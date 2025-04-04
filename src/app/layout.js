import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1512px] mx-auto">
        <div className="w-full">
          <Navbar />
          <div className="">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
