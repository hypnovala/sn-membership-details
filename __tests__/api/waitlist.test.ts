import { sendEmail } from '../path/to/your/nodemailer/module';

describe('Email Sending Tests', () => {
    test('should send email successfully', async () => {
        const response = await sendEmail({
            to: 'test@example.com',
            subject: 'Test Email',
            text: 'This is a test email.'
        });
        expect(response).toBeDefined();
        expect(response.accepted).toContain('test@example.com');
    });

    test('should handle errors during sending', async () => {
        await expect(sendEmail({
            to: 'invalid-email',
            subject: 'Test Email',
            text: 'This should fail.'
        })).rejects.toThrow('Invalid email');
    });

    test('should validate email addresses correctly', async () => {
        await expect(sendEmail({
            to: '',
            subject: 'Validation Test',
            text: 'Invalid email test.'
        })).rejects.toThrow('Validation Error');
    });

    test('should send email to multiple recipients', async () => {
        const response = await sendEmail({
            to: ['test1@example.com', 'test2@example.com'],
            subject: 'Group Email',
            text: 'This is a group test email.'
        });
        expect(response).toBeDefined();
        expect(response.accepted).toEqual(expect.arrayContaining(['test1@example.com', 'test2@example.com']));
    });

    test('should validate SMTP response', async () => {
        const response = await sendEmail({
            to: 'test@example.com',
            subject: 'SMTP Test',
            text: 'Testing SMTP response.'
        });
        expect(response.envelope).toBeDefined();
        expect(response.envelope.to).toContain('test@example.com');
    });
});
