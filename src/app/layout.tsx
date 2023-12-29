import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';
import { Toaster } from 'react-hot-toast';

const font = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Movie List',
  description: 'Nextjs movie list',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-bg`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
