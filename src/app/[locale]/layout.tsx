import ScrollToTop from '@/helpers/ScrollToTop';
import '../globals.css';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { ThemeProvider } from '@/components/Providers/ThemeProvider';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

async function loadMessages(locale: string) {
  try {
    const messages = (await import(`../../../messages/${locale}.json`)).default;
    return messages;
  } catch {
    notFound();
  }
}

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: locale === 'fa' ? 'مصطفی کمری' : 'Mostafa Kamari',
    description: locale === 'fa' ? 'پروژه Next.js با پشتیبانی i18n' : 'Next.js project with i18n support',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await loadMessages(locale);

  return (
    <html lang={locale} dir='rtl' suppressHydrationWarning>
      <body className={` selection:bg-red-500 ${locale === 'fa' ? 'font-vazir' : 'font-stacksans'} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
