'use client';

import { useLocale, useTranslations } from 'next-intl';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import LocaleToggle from '@/components/shared/LocaleSwitcher';
import Menu from '@/components/shared/Menu';
import HomePage from '../templates/MainSection/HomePage';

export default function MainSection() {
  const t = useTranslations('AboutMe');
  const locale = useLocale();

  return (
    <section className="h-screen bg-white dark:bg-gray-800 p-4 flex flex-col">
      <section className="h-13 shrink-0 flex items-center justify-between">
        <Menu />
        <div className="ml-4 flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </section>

      <section className={`bg-background relative w-full h-screen flex-1 rounded-[30px] rounded-tr-none shadow-[0px_2px_2px_rgba(0,0,0,0.1)]`}>
        <HomePage />
        <div className="w-full h-full absolute top-0 z-10 opacity-70 bg-[linear-gradient(330deg,var(--color-primary)_10%,var(--color-background)_25%)] rounded-[30px] rounded-tr-none" />
      </section>
    </section>
  );
}
