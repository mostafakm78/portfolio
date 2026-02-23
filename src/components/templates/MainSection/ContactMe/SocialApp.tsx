import { SocialAppDataProps } from '@/types/Types';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTelegram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

export const SocialAppData: SocialAppDataProps[] = [
  {
    name: { fa: 'تلگرام', en: 'Telegram' },
    logo: FaTelegram,
    link: 'https://t.me/Mostafakamari78',
  },
  {
    name: { fa: 'واتساپ', en: 'WhatsApp' },
    logo: IoLogoWhatsapp,
    link: 'https://wa.me/989169799533',
  },
  {
    name: { fa: 'اینستاگرام', en: 'Instagram' },
    logo: FaInstagramSquare,
    link: 'http://www.instagram.com/imyour_mosi',
  },
  {
    name: { fa: 'لینکدین', en: 'LinkedIn' },
    logo: FaLinkedin,
    link: 'http://linkedin.com/in/mostafa-kamari',
  },
  {
    name: { fa: 'گیت‌هاب', en: 'GitHub' },
    logo: FaGithub,
    link: 'https://github.com/mostafakm78',
  },
];

const SocialApp = () => {
  const locale = useLocale();

  return (
    <div className="flex flex-wrap w-full items-center justify-between">
      {SocialAppData.map((item: SocialAppDataProps, index: number) => {
        return (
          <Link key={index} href={item.link} target="_blank" className="relative group md:w-20 w-15 flex flex-col items-center gap-1">
            <item.logo className="relative text-foreground dark:text-background bg-muted w-10 h-10 md:w-14 md:h-14 p-2 rounded-[15px] z-10" />
            <div className="z-5 absolute w-10 h-10 md:w-14 md:h-14 rounded-[15px] bg-foreground/50 -top-2 left-6 rotate-12 group-hover:rotate-0 group-hover:left-1/2 group-hover:top-0 group-hover:-translate-x-1/2 group-hover:w-12 group-hover:h-12 duration-300" />
            <span className="inline-block text-base opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 duration-300">{locale === 'fa' ? item.name.fa : item.name.en}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default SocialApp;
