import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('NotFound');
  const locale = useLocale();

  return (
    <div className="flex items-center justify-center h-screen bg-linear-150 from-background via-background to-primary dark:to-primary/70 gap-2">
      <div className="flex items-center justify-center w-[80%] h-auto">
        <div className="w-2/3 flex flex-col items-center justify-center gap-2">
          <h1 className="text-7xl font-bold text-red-500">{t('title')}</h1>
          <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className="text-xl text-foreground">
            {t('message')}
          </p>
          <Link href={locale === 'fa' ? '/fa' : '/en'} className="mt-6 bg-primary text-foreground dark:text-background duration-300 transition-colors py-2 px-4 rounded-[15px] text-lg hover:bg-primary/80">
            {t('home')}
          </Link>
        </div>
        <div className="w-1/3 h-full flex items-center justify-start">
          <Image className="w-auto h-auto drop-shadow-xl" src="/images/404.png" alt="notfound" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
