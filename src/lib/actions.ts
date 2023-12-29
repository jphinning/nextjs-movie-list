'use server';

import prisma from '@/lib/prisma';
import { put } from '@vercel/blob';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { AuthError } from 'next-auth';
import { signIn } from '@/auth';

const SignUpSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string().min(6),
});

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  published: z.number().max(9999),
});

const CreateMovie = FormSchema.omit({ id: true });
const UpdateMovie = FormSchema.omit({ id: true });
const SignUp = SignUpSchema.omit({ id: true });

export type State = {
  errors?: {
    title?: string[];
    published?: string[];
  };
  message?: string | null;
};

// This is temporary
export type SignUpState = {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
};

export async function createMovie(prevState: State, formData: FormData) {
  const file = formData.get('file_upload') as File;

  const validatedFields = CreateMovie.safeParse({
    title: formData.get('title'),
    published: Number(formData.get('published')),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Movie.',
    };
  }

  const blob =
    file.size > 0
      ? await put(file.name, file, {
          access: 'public',
        })
      : undefined;

  // Prepare data for insertion into the database
  const { title, published } = validatedFields.data;

  const publishedDate = new Date(published, 0, 1).toISOString();

  // Insert data into the database
  try {
    await prisma.movie.create({
      data: {
        title,
        published: publishedDate,
        image: blob?.url ?? undefined,
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
  const file = formData.get('file_upload') as File;

  const validatedFields = UpdateMovie.safeParse({
    title: formData.get('title'),
    published: Number(formData.get('published')),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Movie.',
    };
  }

  const blob =
    file.size > 0
      ? await put(file.name, file, {
          access: 'public',
        })
      : undefined;

  const { title, published } = validatedFields.data;

  const publishedDate = new Date(published, 0, 1).toISOString();

  try {
    await prisma.movie.update({
      where: {
        id,
      },
      data: {
        title,
        published: publishedDate,
        image: blob?.url ?? undefined,
      },
    });
  } catch (error) {
    console.error(error);
    return { message: 'Database Error: Failed to Update Movie.' };
  }

  revalidatePath('/movies');
  redirect('/movies');
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

export async function signUp(prevState: SignUpState, formData: FormData) {
  const validatedFields = SignUp.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: '',
    };
  }

  // Prepare data for insertion into the database
  const { email, password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: { email, password: hashedPassword },
    });
  } catch (error) {
    console.error(error);
    return { message: 'Failed to create user. Email already being used' };
  }

  redirect('/login');
}
