import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import './globals.scss';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DreamHome - Real Estate HTML Template',
  description: 'DreamHome - Real Estate HTML Template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={poppins.className + ' ' + 'text-[0.9rem] text-textPrimary'}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
