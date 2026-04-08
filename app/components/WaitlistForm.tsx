'use client';

import { FormEvent, useState } from 'react';

type WaitlistResponse = {
  success?: boolean;
  message?: string;
};

const WaitlistForm = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [inHouston, setInHouston] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    setSuccessMessage('');

    if (!inHouston) {
      setError('Please select whether you are in Houston.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: firstName.trim(),
          email: email.trim(),
          inHouston: inHouston === 'yes',
        }),
      });

      const data = (await response.json()) as WaitlistResponse;

      if (!response.ok || !data.success) {
        setError(data.message ?? 'Something went wrong. Please try again.');
        return;
      }

      setSuccessMessage(data.message ?? 'Thanks! You are on the waitlist.');
      setFirstName('');
      setEmail('');
      setInHouston('');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-slate-700">
          First name
        </label>
        <input
          id="first-name"
          name="firstName"
          type="text"
          placeholder="Your first name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
        />
      </div>

      <div>
        <label htmlFor="houston" className="mb-2 block text-sm font-medium text-slate-700">
          Are you in Houston?
        </label>
        <select
          id="houston"
          name="houstonStatus"
          value={inHouston}
          onChange={(event) => setInHouston(event.target.value)}
          required
          className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-slate-500 focus:ring-4 focus:ring-slate-100"
        >
          <option value="" disabled>
            Choose an option
          </option>
          <option value="yes">Yes, I am in Houston</option>
          <option value="no">No, I want digital membership only</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-2xl bg-emerald-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
      </button>

      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      {successMessage ? <p className="text-sm text-emerald-700">{successMessage}</p> : null}
    </form>
  );
};

export default WaitlistForm;
