import '@/styles/globals.css';

import Footer from '../../components/Footer';
import Navbar from '@/components/navbar/Navbar';
import SearchModal from '@/components/modals/SearchModal';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="relative w-full h-full">
        <Navbar landing/>

        <main>{children}</main>
        <Footer />
      </div>
      <SearchModal />
    </>
  );
}
