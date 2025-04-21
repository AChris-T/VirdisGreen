import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'Viridis Green',
  description:
    'At Viridis Green, we combine expertise in bid writing, sustainable practices, commodity management, and technology delivery to help UK businesses thrive in today’s competitive landscape.',
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
