import { MoreInfoProjectProps } from '@/types/Types';
import { useLocale, useTranslations } from 'next-intl';
import Technologies from './Technologies';
import Challenges from './Challenges';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';


const MoreInfoProject = ({ ...props }: MoreInfoProjectProps) => {
  const { technologies, description, challenges } = props;
  const t = useTranslations('Projects');
  const locale = useLocale();

  const container = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.col',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.25,
        }
      ).fromTo(
        '.row',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.22,
        },
        '-=0.3'
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="flex flex-col items-center justify-center h-full w-[calc(100%-100px)]">
      <div className={`flex ${locale === 'fa' ? 'flex-row-reverse' : ''} items-stretch gap-4 w-full`}>
        <div className="flex flex-col items-center col">
          <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
          <div className="flex-1 w-1 bg-secondary" />
        </div>
        <div className={`flex flex-col ${locale === 'fa' ? 'items-end' : 'items-start'} gap-4 row`}>
          <h3 className="text-xl 3xl:text-2xl font-medium">{t('about')}</h3>
          <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className="text-sm 3xl:text-base 3xl:max-w-3/4 opacity-90 mb-2">
            {locale === 'fa' ? description.fa : description.en}
          </p>
        </div>
      </div>
      <div className={`flex ${locale === 'fa' ? 'flex-row-reverse' : ''} items-stretch gap-4 w-full`}>
        <div className="flex flex-col items-center col">
          <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
          <div className="flex-1 w-1 bg-secondary" />
        </div>
        <div className={`flex flex-col ${locale === 'fa' ? 'items-end' : 'items-start'} gap-4 row`}>
          <h3 className="text-xl 3xl:text-2xl font-medium">{t('techs')}</h3>
          <div className={`flex ${locale === 'fa' ? 'flex-row-reverse' : ''} flex-wrap gap-3 mb-2`}>
            <Technologies technologies={technologies} />
          </div>
        </div>
      </div>
      <div className={`flex ${locale === 'fa' ? 'flex-row-reverse' : ''} items-stretch gap-4 w-full`}>
        <div className="flex flex-col items-center col">
          <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
          <div className="flex-1 w-1 bg-secondary" />
        </div>
        <div className={`flex flex-col ${locale === 'fa' ? 'items-end' : 'items-start'} gap-4 row`}>
          <h3 className="text-xl 3xl:text-2xl font-medium">{t('chall')}</h3>
          <Challenges challenges={challenges} />
        </div>
      </div>
    </div>
  );
};

export default MoreInfoProject;
