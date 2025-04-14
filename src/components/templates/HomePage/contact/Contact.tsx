'use client';
import { useTranslation } from 'react-i18next';
import FormContact from './Form';
import MoreContact from './MoreContact';

export default function Contact() {
  const { t, i18n } = useTranslation();
  return (
    <div dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} id="Contact" className="flex flex-col px-10 justify-center items-center">
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="lg:text-4xl text-2xl mt-4 text-back dark:text-fore">{t('Contact Me')}</span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="mt-10 mb-5 lg:mb-0 lg:w-8/12 w-full">
        <span className="text-back dark:text-fore">{t('Contact Me Dec')}</span>
      </div>
      <div className="mt-10 w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-center mb-20 lg:px-10 gap-8">
        <FormContact />
        <MoreContact />
      </div>
      <div className="mb-16 text-white/70">
        <span className="opacity-60">{t('Copy')}</span>
      </div>
    </div>
  );
}
