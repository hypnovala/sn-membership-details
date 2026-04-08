import { GET, POST } from '../../app/api/waitlist/route';

const sendMailMock = jest.fn();

jest.mock('nodemailer', () => ({
  __esModule: true,
  default: {
    createTransport: jest.fn(() => ({
      sendMail: sendMailMock,
    })),
  },
}));

describe('waitlist API route', () => {
  beforeEach(() => {
    sendMailMock.mockReset();
    process.env.GMAIL_USER = 'team@example.com';
    process.env.GMAIL_APP_PASSWORD = 'app-password';
  });

  it('returns a health response on GET', async () => {
    const response = await GET();
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.message).toContain('Waitlist endpoint is live');
  });

  it('returns 400 for invalid payloads', async () => {
    const request = new Request('http://localhost/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ email: 'only-email@example.com' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe('Invalid request body.');
  });

  it('returns 400 for invalid email format', async () => {
    const request = new Request('http://localhost/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ firstName: 'Dana', email: 'not-an-email', inHouston: false }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.message).toBe('Please provide a valid email address.');
  });

  it('returns 200 and success true when both emails are accepted', async () => {
    sendMailMock
      .mockResolvedValueOnce({ accepted: ['team@example.com'], rejected: [] })
      .mockResolvedValueOnce({ accepted: ['member@example.com'], rejected: [] });

    const request = new Request('http://localhost/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ firstName: 'Dana', email: 'member@example.com', inHouston: true }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body.success).toBe(true);
    expect(body.message).toBe('Thank you — check your email for details.');
    expect(sendMailMock).toHaveBeenCalledTimes(2);
  });

  it('returns 500 when team notification is not accepted', async () => {
    sendMailMock.mockResolvedValueOnce({ accepted: ['someone-else@example.com'], rejected: [] });

    const request = new Request('http://localhost/api/waitlist', {
      method: 'POST',
      body: JSON.stringify({ firstName: 'Dana', email: 'member@example.com', inHouston: false }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body.message).toBe('Unable to send waitlist notification email.');
    expect(sendMailMock).toHaveBeenCalledTimes(1);
  });
});
