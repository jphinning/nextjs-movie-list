import prisma from '@/lib/prisma';

export const MOVIES_PER_PAGE = 8;

export async function fetchMovies(page: number) {
  try {
    const movies = await prisma.movie.findMany({
      orderBy: {
        updatedAt: 'desc',
      },
      skip: (page - 1) * MOVIES_PER_PAGE,
      take: MOVIES_PER_PAGE,
    });

    const total = await prisma.movie.count();

    return { movies, total };
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
