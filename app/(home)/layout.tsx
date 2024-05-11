import '@/styles/globals.css';

import Footer from '../../components/Footer';
import Navbar from '@/components/navbar/Navbar';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <div className="min-h-screen pb-10">{children}</div>
      <Footer />
    </div>
  );
}
