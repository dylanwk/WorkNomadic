import '@/styles/globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import SearchModal from '@/components/modals/SearchModal';

export default function ListingsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header>
        <Navbar search />
      </header>
      <div className="min-h-screen pt-8 pb-20">{children}</div>
      <SearchModal />
      <Footer />
    </>
  );
}
