import type { Metadata } from 'next';
import { Fredoka, Geist, Geist_Mono } from 'next/font/google';
import Background from '@/components/Background';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const fredoka = Fredoka({
  variable: '--font-fredoka',
  subsets: ['latin'],
  weight: ['500', '600'],
});

export const metadata: Metadata = {
  title: 'Lenley - Personal Site',
  description: 'Personal site and Resume for Lenley Ngo',
  icons: {
    icon: [],
    apple: [],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fredoka.variable} antialiased min-h-screen`}
      >
        <Background />
        <div className="site-content">{children}</div>
      </body>
    </html>
  );
}
