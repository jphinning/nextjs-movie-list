'use client';

import { CheckboxInputField } from '@/components/checkbox-input-field';
import { FormInputField } from '@/components/form-input-field';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 p-24">
      <div>Sign in</div>
      <div className="flex flex-col gap-5">
        <FormInputField />
        <FormInputField />
        <CheckboxInputField text="Remember me?" />
        <button
          className="bg-primary rounded-lg p-2"
          onClick={() => router.push('/movies')}
        >
          Log in
        </button>
      </div>
    </main>
  );
}
