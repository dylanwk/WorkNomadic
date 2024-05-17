import '@/styles/globals.css';

import Footer from '@/components/Footer';

import Navbar from '@/components/navbar/Navbar';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </div>
  );
}
