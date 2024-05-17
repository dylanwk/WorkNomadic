import SearchModal from '@/components/modals/SearchModal';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Vagaspace',
  description: 'Housing providor for working remote'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Vagaspace | Vacation rentals for digital nomads, & more</title>
        <meta charSet="UTF-8" />
        <meta name="agd-partner-manual-verification" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body className="min-h-screen bg-background antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
