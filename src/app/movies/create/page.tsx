'use client';

import { FormInputField } from '@/components/form-input-field';
import { ButtonType, FormButton } from '@/components/form-button';
import { FileInput } from '@/components/file-input';
import { useFormState } from 'react-dom';
import { createMovie } from '@/lib/actions';
import Link from 'next/link';
import { SubmitButton } from '@/components/submit-button';

export default function CreateMovies() {
  const initialState = { message: '', errors: {} };
  const [state, dispatch] = useFormState(createMovie, initialState);

  return (
    <main className="w-screen h-screen prose px-12 py-11">
      <div className="mb-12">
        <h2>Create a new movie</h2>
      </div>

      <form action={dispatch} className="flex gap-13 h-[60%] w-[80%]">
        <div className="w-full h-full">
          <FileInput />
        </div>

        <div className="flex flex-col gap-4 w-[70%]">
          <FormInputField
            name="title"
            placeholder="Title"
            required
            error={!!state.errors?.title}
          />
          <div>
            {state.errors?.title &&
              state.errors.title.map((error: string) => (
                <p className="text-error" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <FormInputField
            placeholder="Publishing year"
            name="published"
            required
            width="w-[70%]"
            error={!!state.errors?.published}
          />
          <div>
            {state.errors?.published &&
              state.errors.published.map((error: string) => (
                <p className="text-error" key={error}>
                  {error}
                </p>
              ))}
          </div>

          <div className="flex gap-5 justify-between mt-10">
            <Link href="/movies" className="w-full">
              <FormButton buttonStyle={ButtonType.ghost}>Cancel</FormButton>
            </Link>
            <SubmitButton>Submit</SubmitButton>
          </div>
        </div>
      </form>
    </main>
  );
}
