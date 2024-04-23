import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const mainFontFamily = Rubik({
  weight: ['300', '400', '900'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Weather App',
  description: 'Meteorological Application'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={mainFontFamily.className}>
      <body className="sm:text-xs">{children}</body>
    </html>
  );
}
