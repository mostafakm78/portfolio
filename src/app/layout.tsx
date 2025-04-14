'use client';
import '../helpers/i18n';
import ScrollToTop from '@/helpers/ScrollToTop';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html >
      <body className="bg-fore dark:bg-back">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
