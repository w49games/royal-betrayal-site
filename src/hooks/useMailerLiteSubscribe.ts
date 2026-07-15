import { useState, useCallback, useRef } from 'react';

// MailerLite embedded form endpoint. Replace FORM_ID with the ID from your
// MailerLite embedded form's <form action="..."> URL.
// e.g. action="https://static.mailerlite.com/webforms/submit/abc123" -> FORM_ID = "abc123"
const MAILERLITE_FORM_ID = '6tS57Y';
const MAILERLITE_ENDPOINT = `https://static.mailerlite.com/webforms/submit/${MAILERLITE_FORM_ID}`;

export type SubscribeStatus = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function useMailerLiteSubscribe() {
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [message, setMessage] = useState('');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const subscribe = useCallback(async (email: string) => {
    if (!email || !EMAIL_REGEX.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const body = new FormData();
      body.append('fields[email]', email);
      body.append('ml-submit', '1');

      const response = await fetch(MAILERLITE_ENDPOINT, {
        method: 'POST',
        body,
        mode: 'no-cors',
      });

      // With no-cors the response is opaque, so we treat 0 / type:opaque as success.
      if (response.type === 'opaque' || response.status === 0 || response.ok) {
        setStatus('success');
        setMessage('Thanks for joining! We will notify you when the campaign goes live.');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }, []);

  const reset = useCallback(() => {
    if (resetTimer.current) {
      clearTimeout(resetTimer.current);
      resetTimer.current = null;
    }
    setStatus('idle');
    setMessage('');
  }, []);

  const scheduleReset = useCallback((ms: number) => {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(reset, ms);
  }, [reset]);

  return { status, message, subscribe, scheduleReset, reset };
}
