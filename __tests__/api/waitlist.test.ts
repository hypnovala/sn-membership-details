import nodemailer from 'nodemailer';
import { expect } from 'chai';

describe('Nodemailer Responses', () => {
    it('should send email successfully', async () => {
        const transporter = nodemailer.createTransport({
            host: 'smtp.example.com',
            port: 587,
            secure: false,
            auth: {
                user: 'user@example.com',
                pass: 'password',
            },
        });

        const mailOptions = {
            from: 'sender@example.com',
            to: 'recipient@example.com',
            subject: 'Test Email',
            text: 'Hello, this is a test email!',
        };

        const info = await transporter.sendMail(mailOptions);

        expect(info).to.have.property('messageId');
        expect(info.messageId).to.exist;
        expect(info).to.have.property('envelope');
        expect(info.envelope).to.include({
            from: 'sender@example.com',
            to: 'recipient@example.com',
        });
    });

    it('should return an error for invalid email', async () => {
        const transporter = nodemailer.createTransport({
            // Configuration with invalid details
            host: 'smtp.example.com',
            port: 587,
            secure: false,
            auth: {
                user: 'invaliduser',
                pass: 'invalidpassword',
            },
        });

        const mailOptions = {
            from: 'sender@example.com',
            to: 'invalidemail', // Invalid email format
            subject: 'Test Email',
            text: 'This should fail!',
        };

        try {
            await transporter.sendMail(mailOptions);
            expect.fail('Expected an error to be thrown!');
        } catch (error) {
            expect(error).to.exist;
            expect(error).to.have.property('response');
        }
    });
});
