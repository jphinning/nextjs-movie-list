import prisma from '@/lib/prisma';

export async function fetchMovies() {
  try {
    const movies = prisma.movie.findMany();

    return movies;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch');
  }
}
