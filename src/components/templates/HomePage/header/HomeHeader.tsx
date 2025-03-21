'use client';
import { Image, Link } from '@heroui/react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export default function HomeHeader() {
  const { t } = useTranslation();

  const scrollToContact = useCallback(() => {
    const section = document.getElementById('Contact');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <div className="bg-fore dark:bg-back p-10 md:justify-center md:items-center md:gap-40 gap-20 flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="bg-back rounded-3xl shadow-lg dark:bg-fore">
          <Image isZoomed loading="lazy" alt="My Prodfile" src="/images/me.jpeg" width={400} height={500} />
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 w-full text-center items-center justify-center">
        <span className="text-back dark:text-fore text-2xl">{t('Hello , Im Mostafa')}</span>
        <span className="text-back dark:text-fore xl:text-8xl text-6xl font-sans font-extrabold xl:w-3/4 w-full">Front-end Developer</span>
        <Link className="text-back dark:text-fore cursor-pointer text-2xl mt-6 border-b-2 pb-1 border-b-back dark:border-b-fore" onPress={scrollToContact}>
          {t('Contact Me')}
        </Link>
      </div>
    </div>
  );
}
