'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  published: z.string(),
});

const CreateMovie = FormSchema.omit({ id: true });
const UpdateMovie = FormSchema.omit({ id: true });

// This is temporary
export type State = {
  errors?: {
    title?: string[];
    published?: string[];
  };
  message?: string | null;
};

export async function createMovie(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateMovie.safeParse({
    title: formData.get('title'),
    published: formData.get('published'),
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Movie.',
    };
  }

  // Prepare data for insertion into the database
  const { title, published } = validatedFields.data;

  const publishedDate = new Date(Number(published), 0, 1).toISOString();

  // Insert data into the database
  try {
    await prisma.movie.create({
      data: {
        title,
        published: publishedDate,
      },
    });
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.error(error);
    return {
      message: 'Database Error: Failed to Create Movie.',
    };
  }

  // Revalidate the cache for the Movies page and redirect the user.
  revalidatePath('/movies');
  redirect('/movies');
}

export async function updateMovie(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = UpdateMovie.safeParse({
    title: formData.get('title'),
    published: formData.get('published'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Movie.',
    };
  }

  const { title, published } = validatedFields.data;

  const publishedDate = new Date(Number(published), 0, 1).toISOString();

  try {
    await prisma.movie.update({
      where: {
        id,
      },
      data: {
        title,
        published: publishedDate,
      },
    });
  } catch (error) {
    console.error(error);
    return { message: 'Database Error: Failed to Update Movie.' };
  }

  revalidatePath('/movies');
  redirect('/movies');
}
