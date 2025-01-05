import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import Script from 'next/script';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <Script
          src="/navbar.js"
          strategy="afterInteractive" // Load script after page has loaded
        />
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-cyan-900 to-blue-900">
          <header className="px-4 py-6">
            <Navbar />
          </header>
          <main className="flex-1 container mx-auto px-4 pb-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
