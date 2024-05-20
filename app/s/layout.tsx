import '@/styles/globals.css';

import Footer from '../../components/Footer';
import Navbar from '@/components/navbar/Navbar';
import SearchModal from '@/components/modals/SearchModal';
import Categories from '@/components/categories/Categories';

export default function SLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>
        <Navbar search />
      </header>

      <div className="min-h-screen pb-10">{children}</div>
      <SearchModal />
      <Footer />
    </>
  );
}
