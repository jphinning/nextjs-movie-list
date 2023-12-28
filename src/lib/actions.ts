import prisma from '@/lib/prisma';

export async function updateMovie() {
  try {
    // const movie = prisma.movie.update();
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update');
  }
}
