import prisma from '@/lib/prisma';

export async function fetchMovies() {
  try {
    const movies = prisma.movie.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
    });

    return movies;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch');
  }
}

export async function fetchMovieById(id: string) {
  try {
    const movies = prisma.movie.findUnique({
      where: {
        id,
      },
    });

    return movies;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch');
  }
}
