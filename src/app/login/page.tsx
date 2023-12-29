'use client';

import { CheckboxInputField } from '@/components/checkbox-input-field';
import { FormInputField } from '@/components/form-input-field';
import { ButtonType, FormButton } from '@/components/form-button';
import { useFormState } from 'react-dom';
import { authenticate } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { SubmitButton } from '@/components/submit-button';

export default function SignIn() {
  const router = useRouter();

  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <main className="flex flex-col justify-center items-center w-screen h-full p-13 prose">
      <div className="w-fit">
        <h1>{'Sign In'}</h1>
      </div>
      <form
        action={dispatch}
        className="flex flex-col gap-5 w-[30%] min-w-[348px]"
      >
        <FormInputField placeholder="Email" name="email" />
        <FormInputField
          type="password"
          placeholder="Password"
          name="password"
        />
        <div>
          {errorMessage && <p className="text-error">{errorMessage}</p>}
        </div>
        <div className="flex justify-center items-center">
          <CheckboxInputField text="Remember me" />
        </div>
        <SubmitButton>{'Login'}</SubmitButton>
        <FormButton
          type="button"
          buttonStyle={ButtonType.ghost}
          onClick={() => router.push('/sign-up')}
        >
          {'Sign Up'}
        </FormButton>
      </form>
    </main>
  );
}
