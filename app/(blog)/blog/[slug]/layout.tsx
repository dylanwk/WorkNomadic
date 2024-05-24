import '@/styles/globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';

export default function BlogLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <Navbar blog />
      </header>
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}
