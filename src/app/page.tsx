'use client';

import { CheckboxInputField } from '@/components/checkbox-input-field';
import { FormInputField } from '@/components/form-input-field';
import { useRouter } from 'next/navigation';
import { FormButton } from '@/components/form-button';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col justify-center items-center w-screen h-full p-13 prose">
      <div className="w-fit">
        <h1>{'Sign In'}</h1>
      </div>
      <div className="flex flex-col gap-5 w-[30%] min-w-[348px]">
        <FormInputField placeholder="Email" />
        <FormInputField placeholder="Password" />
        <div className="flex justify-center items-center">
          <CheckboxInputField text="Remember me" />
        </div>
        <FormButton onClick={() => router.push('/movies')}>
          {'Login'}
        </FormButton>
      </div>
    </main>
  );
}
