import { useState, useCallback, useRef } from 'react';

export type SubscribeStatus = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SUCCESS_MESSAGE = 'Thanks for joining! We will notify you when the campaign goes live.';
const ERROR_MESSAGE = 'Something went wrong. Please try again.';

function findHiddenForm(): HTMLFormElement | null {
  const container = document.getElementById('ml-embedded-form');
  if (!container) return null;
  return container.querySelector('form');
}

function findEmailInput(form: HTMLFormElement): HTMLInputElement | null {
  return (
    form.querySelector<HTMLInputElement>('input[name="fields[email]"]') ||
    form.querySelector<HTMLInputElement>('input[type="email"]') ||
    form.querySelector<HTMLInputElement>('input[name="email"]')
  );
}

function findSubmitButton(form: HTMLFormElement): HTMLElement | null {
  return (
    form.querySelector<HTMLButtonElement>('button[type="submit"]') ||
    form.querySelector<HTMLInputElement>('input[type="submit"]') ||
    form.querySelector<HTMLButtonElement>('button')
  );
}

function waitForForm(timeoutMs = 8000): Promise<HTMLFormElement | null> {
  return new Promise((resolve) => {
    const existing = findHiddenForm();
    if (existing) return resolve(existing);

    const start = Date.now();
    const interval = setInterval(() => {
      const form = findHiddenForm();
      if (form) {
        clearInterval(interval);
        resolve(form);
      } else if (Date.now() - start >= timeoutMs) {
        clearInterval(interval);
        resolve(null);
      }
    }, 200);
  });
}

export function useMailerLiteSubscribe() {
  const [status, setStatus] = useState<SubscribeStatus>('idle');
  const [message, setMessage] = useState('');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const subscribe = useCallback(async (email: string): Promise<SubscribeStatus> => {
    if (!email || !EMAIL_REGEX.test(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return 'error';
    }

    setStatus('loading');
    setMessage('');

    try {
      const form = await waitForForm();
      if (!form) {
        setStatus('error');
        setMessage(ERROR_MESSAGE);
        return 'error';
      }

      const emailInput = findEmailInput(form);
      if (!emailInput) {
        setStatus('error');
        setMessage(ERROR_MESSAGE);
        return 'error';
      }

      emailInput.value = email;
      emailInput.dispatchEvent(new Event('input', { bubbles: true }));
      emailInput.dispatchEvent(new Event('change', { bubbles: true }));

      const submitBtn = findSubmitButton(form);
      if (submitBtn) {
        submitBtn.click();
      } else {
        form.requestSubmit();
      }

      setStatus('success');
      setMessage(SUCCESS_MESSAGE);
      return 'success';
    } catch {
      setStatus('error');
      setMessage(ERROR_MESSAGE);
      return 'error';
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
