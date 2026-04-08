declare module "nodemailer" {
  export type SendMailOptions = {
    from: string;
    to: string;
    subject: string;
    text: string;
  };

  export type SendMailResponse = {
    accepted: string[];
    rejected: string[];
    response: string;
  };

  export type Transporter = {
    sendMail: (mailOptions: SendMailOptions) => Promise<SendMailResponse>;
  };

  export type TransportOptions = {
    service: string;
    auth: {
      user: string;
      pass: string;
    };
  };

  export function createTransport(options: TransportOptions): Transporter;

  const nodemailer: {
    createTransport: typeof createTransport;
  };

  export default nodemailer;
}
