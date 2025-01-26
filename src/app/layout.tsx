import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { homePath, itemsPath } from '@/path';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Clublist',
  description: 'An application to share things to do',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className='supports-backdrop-blur:bg-background/60   fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur w-full flex py-2.5 px-5 justify-between'>
          <div>
            <Link
              href={homePath()}
              className={buttonVariants({ variant: 'outline' })}
            >
              Home
            </Link>
          </div>
          <div>
            <Link
              href={itemsPath()}
              className={buttonVariants({ variant: 'outline' })}
            >
              Items
            </Link>
          </div>
        </nav>
        <main className='min-h-screen felx-1 overflow-y-auto overflow-x-hidden py-24 px-8 bg-secondary/20 flex flex-col'>
          {children}
        </main>
      </body>
    </html>
  );
}
