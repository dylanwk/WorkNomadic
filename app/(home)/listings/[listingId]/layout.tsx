import '@/styles/globals.css';

import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';

export default function HomeLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='min-h-screen pt-8 pb-20'>{children}</div>
  );
}
