import { useStage } from '@/components/Providers/StageProvider';
import GlowButton from '@/components/shared/GlowButton';
import SocialButton from '@/components/shared/SocialButton';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export const apps = [
  { key: 'tailwind', src: '/images/tailwind-css-icon.png', name: 'TailWind' },
  { key: 'Css', src: '/images/css-icon.png', name: 'Css' },
  { key: 'Gsap', src: '/images/gsap.png', name: 'Gsap' },
  { key: 'Html', src: '/images/html-icon.png', name: 'Html' },
  {
    key: 'JavaScript',
    src: '/images/javascript-programming-language-icon.png',
    name: 'JavaScript',
  },
  {
    key: 'TypeScript',
    src: '/images/typescript-programming-language-icon.png',
    name: 'TypeScript',
  },
  { key: 'Next', src: '/images/nextjs-icon.png', name: 'Next Js' },
  { key: 'Redux', src: '/images/redux-icon.png', name: 'Redux' },
  { key: 'Sass', src: '/images/sass-icon.png', name: 'Sass' },
  {
    key: 'Docker',
    src: '/images/docker-icon.png',
    name: 'Docker',
  },
  { key: 'ShadCn', src: '/images/shadcn-ui.png', name: 'ShadCn' },
  { key: 'React', src: '/images/react-js-icon.png', name: 'React' },
];

export interface App {
  key: string;
  src: string;
  name: string;
}

const AboutMe = () => {
  const t = useTranslations('AboutMe');
  const { setStage } = useStage();
  const locale = useLocale();

  return (
    <section className={`relative z-20 w-full h-full flex lg:flex-row flex-col ${locale === 'fa' ? '' : 'lg:flex-row-reverse'} items-center justify-center gap-8`}>
      <div className="lg:w-1/2 w-full h-full flex flex-col items-center justify-between space-y-10">
        <h2 className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-4xl 3xl:text-5xl font-bold`}>{t('aboutme')}</h2>
        <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className={`text-justify ${locale === 'fa' ? 'text-[16px]' : 'text-[14px]'} 3xl:text-lg`}>
          {t('aboutmefull')}
        </p>
        <div className="w-full flex items-center justify-between gap-3 lg:gap-0">
          <GlowButton className="w-1/2 md:w-1/3 md:text-lg text-base">
            <Link className="w-full h-full" href="/MostafaKamari-Resume.pdf" download>
              {t('download')}
            </Link>
          </GlowButton>
          <GlowButton type="button" onClick={() => setStage('ContactMe')} className="w-1/2 md:w-1/3 md:text-lg text-base">
            {t('contact')}
          </GlowButton>
        </div>
      </div>
      <div className="lg:w-1/2 w-full h-full flex flex-col items-center justify-between space-y-10">
        <h2 className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-4xl 3xl:text-5xl font-bold`}>{t('skills')}</h2>
        <div className="grid md:mt-0 mt-6 lg:grid-cols-3 md:grid-cols-4 grid-cols-2 items-center mx-auto h-full gap-4 gap-y-12">
          {apps.map((app: App) => {
            return (
              <div className="relative" key={app.key}>
                <Image className="relative w-[200px] h-10" src="/images/SkillsBack.png" alt={app.name} width={200} height={200} />
                <Image className="absolute -top-10 left-8 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.2)]" src={app.src} alt={app.name} width={50} height={50} />
                <div className="absolute top-1/2 -translate-y-1/2 w-[90px] right-2 text-center">
                  <span className="font-medium text-base dark:text-background text-foreground">{app.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
