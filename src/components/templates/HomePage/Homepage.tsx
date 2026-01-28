'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import LocaleToggle from '@/components/shared/LocaleSwitcher';
import Menu from '@/components/shared/Menu';

export default function MainSection() {
  const t = useTranslations('AboutMe');
  const locale = useLocale();

  return (
    <section className="min-h-screen bg-white dark:bg-gray-800 p-4 flex flex-col">
      <section className="h-13 shrink-0 flex items-center justify-between">
        <Menu />
        <div className="ml-4 flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </section>

      <section className={`bg-background w-full flex-1 rounded-[30px] ${locale === 'fa' ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-[0px_2px_2px_rgba(0,0,0,0.1)]`} />
    </section>
  );
}
