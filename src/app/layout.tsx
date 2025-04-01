import { Inter } from 'next/font/google';
import './globals.css';
import AppProviders from '@/components/AppProviders';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Resume Generator - Create Professional Resumes',
  description: 'Create stunning, professional resumes in minutes with our sleek resume generator.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-[rgb(13,17,23)] to-[rgb(23,27,33)]">
          <AppProviders>
            {children}
          </AppProviders>
        </div>
      </body>
    </html>
  );
}
