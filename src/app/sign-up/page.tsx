'use client';

import { FormInputField } from '@/components/form-input-field';
import { ButtonType, FormButton } from '@/components/form-button';
import { useFormState } from 'react-dom';
import { signUp } from '@/lib/actions';
import { useRouter } from 'next/navigation';
import { SubmitButton } from '@/components/submit-button';

export default function SignUp() {
  const router = useRouter();

  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(signUp, initialState);

  return (
    <main className="flex flex-col justify-center items-center w-screen h-full p-13 prose">
      <div className="w-fit">
        <h1>{'Sign Up'}</h1>
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
          {state?.errors?.password &&
            state.errors.password.map((error: string) => (
              <p className="text-error" key={error}>
                {error}
              </p>
            ))}
        </div>
        <div>
          {state.message && <p className="text-error">{state.message}</p>}
        </div>
        <SubmitButton>{'Sign up'}</SubmitButton>
        <FormButton
          buttonStyle={ButtonType.ghost}
          type="button"
          onClick={() => router.push('/login')}
        >
          {'Login'}
        </FormButton>
      </form>
    </main>
  );
}
