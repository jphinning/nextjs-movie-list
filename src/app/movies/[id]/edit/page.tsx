import { EditMovieForm } from '@/components/movies/edit-movie-form';
import { fetchMovieById } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function EditMovies({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;

  const movie = await fetchMovieById(id);

  if (!movie) {
    notFound();
  }

  return (
    <main className="w-screen h-screen prose px-12 py-11">
      <EditMovieForm movie={movie} />
    </main>
  );
}
