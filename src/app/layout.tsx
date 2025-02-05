
import ScrollToTop from '@/helpers/ScrollToTop';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className="bg-fore dark:bg-back">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
