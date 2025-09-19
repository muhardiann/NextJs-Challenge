// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | MyStore',
    default: 'MyStore - High Quality Products',
  },
  description: 'Find the best products for your needs.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <header className="bg-white shadow-sm">
          <nav className="container mx-auto p-4">
            <a href="/" className="text-2xl font-bold">ShopTime</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}