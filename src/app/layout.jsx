import { Comfortaa, Montserrat } from 'next/font/google';
import '@/styles/globals.css';

import Navbar from '@/components/Navbar';

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' });
const comfortaa = Comfortaa({ subsets: ['latin'], variable: '--font-comfortaa' });

export const metadata = {
  title: 'Sanngar Sinau',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${comfortaa.variable}`}>
      <body>{children}</body>
    </html>
  );
}
