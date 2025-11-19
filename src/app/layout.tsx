import './globals.css';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
