import { Inter } from 'next/font/google';
import './globals.css';
import FaviconRotator from './components/FaviconRotator';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Luis Alvarez | Software Engineer',
  description: 'Portfolio of Luis Alvarez - Full-Stack Software Engineer, Machine Learning Practitioner, and Creator.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <FaviconRotator />
      </head>
      <body className={`${inter.className} bg-slate-900 text-slate-100 antialiased selection:bg-blue-600 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
