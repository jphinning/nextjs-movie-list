import { EmptyState } from '@/components/empty-state';
import { fetchMovies } from '@/lib/data';
import Link from 'next/link';
import { MdOutlineLogout } from 'react-icons/md';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MovieCard } from '@/components/movie-card';
import Pagination from '@/components/movies/pagination';
import { signOut } from '@/auth';

export default async function Movies({
  searchParams,
}: {
  searchParams?: {
    page?: string;
  };
}) {
  const currentPage = Number(searchParams?.page) || 1;

  const { movies, total } = await fetchMovies(currentPage);

  return movies.length ? (
    <main className="w-screen h-full prose px-12 py-11">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-5">
          <h2 className="mt-0">My movies</h2>
          <Link href={'/movies/create'}>
            <IoMdAddCircleOutline size="2em" />
          </Link>
        </div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
          className="flex items-center gap-2"
        >
          <b>Logout</b>
          <button type="submit">
            <MdOutlineLogout size="2em" />
          </button>
        </form>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {movies.map((movie) => (
          <Link
            key={movie.id}
            href={`movies/${movie.id}/edit`}
            className="no-underline w-fit"
          >
            <MovieCard
              title={movie.title}
              publishDate={movie.published}
              imgUrl={movie?.image}
            />
          </Link>
        ))}
      </div>
      <div className="mt-10 flex w-full justify-center">
        <Pagination count={total} />
      </div>
    </main>
  ) : (
    <EmptyState />
  );
}
