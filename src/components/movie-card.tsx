import Image from 'next/image';

interface MovieCardProps {
  title: string;
  publishDate: Date;
  imgUrl?: string;
}

export const MovieCard = ({ title, publishDate, imgUrl }: MovieCardProps) => (
  <div className="flex flex-col w-fit bg-card px-3 rounded-lg prose pb-4 pt-3 hover:bg-input transition">
    <Image
      src={imgUrl || '/placeholder.png'}
      alt="Movie Image"
      width={266}
      height={400}
    />
    <b>{title}</b>
    <p>{publishDate.getFullYear()}</p>
  </div>
);
