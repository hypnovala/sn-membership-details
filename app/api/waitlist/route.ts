import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type WaitlistPayload = {
  firstName: string;
  email: string;
  inHouston: boolean;
};

type SendMailResult = {
  accepted?: string[];
  rejected?: string[];
  response?: string;
};

const isValidPayload = (value: unknown): value is WaitlistPayload => {
  if (!value || typeof value !== "object") return false;

  const payload = value as Record<string, unknown>;

  return (
    typeof payload.firstName === "string" &&
    payload.firstName.trim().length > 0 &&
    typeof payload.email === "string" &&
    payload.email.trim().length > 0 &&
    typeof payload.inHouston === "boolean"
  );
};

const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const wasAccepted = (result: SendMailResult, expectedRecipient: string): boolean => {
  if (!Array.isArray(result.accepted)) return false;

  const normalizedRecipient = expectedRecipient.trim().toLowerCase();

  return result.accepted.some((recipient) => recipient.trim().toLowerCase() === normalizedRecipient);
};

export async function GET() {
  return NextResponse.json(
    {
      message: "Waitlist endpoint is live. Send a POST request with firstName, email, and inHouston.",
    },
    { status: 200 },
  );
}

export async function POST(req: Request) {
  try {
    const body: unknown = await req.json();

    if (!isValidPayload(body)) {
      return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
    }

    const { firstName, email, inHouston } = body;

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json({ message: "Server email configuration is missing." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const teamNotificationResult = (await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      subject: "New Waitlist Signup",
      text: [
        "New waitlist signup received:",
        `First name: ${firstName}`,
        `Email: ${email}`,
        `In Houston: ${inHouston ? "Yes" : "No"}`,
      ].join("\n"),
    })) as SendMailResult;

    if (!wasAccepted(teamNotificationResult, gmailUser)) {
      console.error("Team notification email was not accepted:", teamNotificationResult);
      return NextResponse.json({ message: "Unable to send waitlist notification email." }, { status: 500 });
    }

    const confirmationResult = (await transporter.sendMail({
      from: gmailUser,
      to: email,
      subject: "You’re on the waitlist — Somatic Nurse",
      html: `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#f4efe8;font-family:Georgia, 'Times New Roman', serif;color:#1f2937;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:#f4efe8;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background-color:#ffffff;border-radius:24px;overflow:hidden;">
            <tr>
              <td style="background:linear-gradient(135deg,#24104f,#3f2a73);padding:40px 40px 28px 40px;">
                <div style="font-size:12px;letter-spacing:0.24em;text-transform:uppercase;color:#d9d0f0;font-weight:700;">
                  Somatic Nurse
                </div>
                <h1 style="margin:16px 0 0 0;font-size:42px;line-height:1.08;color:#f8f5ff;font-weight:700;">
                  Thanks for joining the waitlist
                </h1>
                <p style="margin:18px 0 0 0;font-size:18px;line-height:1.8;color:#efe8ff;">
                  You’re officially in, ${firstName}.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:36px 40px 12px 40px;">
                <p style="margin:0 0 18px 0;font-size:18px;line-height:1.9;color:#374151;">
                  I’m glad you’re here.
                </p>

                <p style="margin:0 0 18px 0;font-size:18px;line-height:1.9;color:#374151;">
                  This work is designed for women carrying long shifts, constant responsibility, and the kind of stress that does not just stay in the mind — it settles into the body.
                </p>

                <p style="margin:0 0 18px 0;font-size:18px;line-height:1.9;color:#374151;">
                  As a waitlist member, you’ll receive:
                </p>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 24px 0;">
                  <tr>
                    <td style="padding:0 0 12px 0;font-size:17px;line-height:1.8;color:#374151;">• First access when membership opens</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px 0;font-size:17px;line-height:1.8;color:#374151;">• The 40% founder rate</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px 0;font-size:17px;line-height:1.8;color:#374151;">• Early access to new tools, practices, and updates</td>
                  </tr>
                </table>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:12px 0 28px 0;background-color:#f6f8fb;border:1px solid #e7edf5;border-radius:20px;">
                  <tr>
                    <td style="padding:24px 24px 24px 24px;">
                      <div style="font-size:12px;letter-spacing:0.2em;text-transform:uppercase;color:#64748b;font-weight:700;margin-bottom:12px;">
                        Try this now
                      </div>
                      <div style="font-size:24px;line-height:1.3;color:#1f2937;font-weight:700;margin-bottom:12px;">
                        30-second nervous system reset
                      </div>
                      <p style="margin:0;font-size:17px;line-height:1.9;color:#374151;">
                        Drop your shoulders slightly.<br>
                        Take a slow inhale through your nose.<br>
                        Take a second short inhale at the top.<br>
                        Then exhale slowly through your mouth.<br><br>
                        Repeat 3 times.
                      </p>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 18px 0;font-size:18px;line-height:1.9;color:#374151;">
                  If you haven’t already, start with the free Somatic Reset Guide:
                </p>

                <table role="presentation" cellspacing="0" cellpadding="0" style="margin:0 0 28px 0;">
                  <tr>
                    <td align="center" style="border-radius:16px;background-color:#10b981;">
                      <a href="https://brockjohn.com/free-somatic-guide" style="display:inline-block;padding:15px 26px;font-size:16px;font-weight:700;color:#ffffff;text-decoration:none;border-radius:16px;">
                        Read the Free Somatic Guide
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="margin:0 0 18px 0;font-size:18px;line-height:1.9;color:#374151;">
                  You don’t need to escape your life to feel better.
                </p>

                <p style="margin:0 0 18px 0;font-size:18px;line-height:1.9;color:#374151;">
                  You need small moments where your body can finally register:
                  <span style="color:#24104f;font-weight:700;">I’m safe enough to soften.</span>
                </p>

                <p style="margin:0 0 28px 0;font-size:18px;line-height:1.9;color:#374151;">
                  More soon.
                </p>

                <p style="margin:0;font-size:18px;line-height:1.9;color:#111827;font-weight:700;">
                  — Brock John
                </p>
                <p style="margin:4px 0 0 0;font-size:15px;line-height:1.8;color:#6b7280;">
                  Somatic Nervous System Educator
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:20px 40px 36px 40px;">
                <p style="margin:0;font-size:13px;line-height:1.8;color:#9ca3af;">
                  Education only • Not medical advice • Consult a qualified health professional for medical concerns
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`,
    })) as SendMailResult;

    if (!wasAccepted(confirmationResult, email)) {
      console.error("User confirmation email was not accepted:", confirmationResult);
      return NextResponse.json({ message: "Unable to send confirmation email." }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: "Thank you — check your email for details.",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json({ message: "Something went wrong. Please try again." }, { status: 500 });
  }
}
