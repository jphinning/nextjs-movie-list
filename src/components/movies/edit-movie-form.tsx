'use client';

import { FileInput } from '@/components/file-input';
import { ButtonType, FormButton } from '@/components/form-button';
import { FormInputField } from '@/components/form-input-field';
import { SubmitButton } from '@/components/submit-button';
import { updateMovie } from '@/lib/actions';
import { Movie } from '@prisma/client';
import Link from 'next/link';
import { useFormState } from 'react-dom';

interface EditMovieFormProps {
  movie: Movie;
}

export const EditMovieForm = ({ movie }: EditMovieFormProps) => {
  const initialState = { message: '', errors: {} };

  const updateMovieWithId = updateMovie.bind(null, movie.id);

  const [state, dispatch] = useFormState(updateMovieWithId, initialState);

  return (
    <>
      <div className="mb-12">
        <h2>Edit</h2>
      </div>

      <form action={dispatch} className="flex gap-13 h-[60%] w-[80%]">
        <div className="w-full h-full">
          <FileInput currentImage={movie.image} />
        </div>

        <div className="flex flex-col gap-4 w-[70%]">
          <FormInputField
            placeholder="Title"
            required
            name="title"
            defaultValue={movie?.title}
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
            width="w-[70%]"
            name="published"
            required
            defaultValue={movie?.published.getUTCFullYear()}
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
    </>
  );
};
