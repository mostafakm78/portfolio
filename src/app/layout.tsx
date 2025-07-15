'use client';

import '../helpers/i18n';
import ScrollToTop from '@/helpers/ScrollToTop';
import './globals.css';
import { ClientOnly } from './ClientOnly';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-fore dark:bg-back overflow-x-hidden">
        <ClientOnly>
          {children}
          <ScrollToTop />
        </ClientOnly>
      </body>
    </html>
  );
}
