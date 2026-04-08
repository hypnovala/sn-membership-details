import request from 'supertest';
import app from '../../app';  // Assuming you have an app file that initializes your express app

jest.mock('nodemailer');

describe('POST /api/waitlist', () => {
  it('should return 200 for a valid email', async () => {
    const response = await request(app)
      .post('/api/waitlist')
      .send({ email: 'test@example.com' });
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual('Success: Email sent.');
  });

  it('should return 400 for an invalid email format', async () => {
    const response = await request(app)
      .post('/api/waitlist')
      .send({ email: 'invalid-email' });
    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('Error: Invalid email format.');
  });

  it('should return 400 for a missing email payload', async () => {
    const response = await request(app)
      .post('/api/waitlist')
      .send({});
    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('Error: Email is required.');
  });

  it('should return 500 for missing environment variables', async () => {
    jest.resetModules(); // Clear any cached modules
    delete process.env.EMAIL_SERVICE;
    const response = await request(app)
      .post('/api/waitlist')
      .send({ email: 'test@example.com' });
    expect(response.status).toBe(500);
    expect(response.body.message).toEqual('Error: Environment variables are not configured properly.');
  });

  it('should return 500 on nodemailer sending error', async () => {
    const nodemailer = require('nodemailer');
    nodemailer.createTransport.mockImplementation(() => ({
      sendMail: jest.fn().mockRejectedValue(new Error('Error sending email'))
    }));

    const response = await request(app)
      .post('/api/waitlist')
      .send({ email: 'test@example.com' });
    expect(response.status).toBe(500);
    expect(response.body.message).toEqual('Error: Error sending email.');
  });
});