import Image from 'next/image';
import GlowButton from '@/components/shared/GlowButton';
import SocialButton from '@/components/shared/SocialButton';
import { useLocale, useTranslations } from 'next-intl';
import { useStage } from '@/components/Providers/StageProvider';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const HomePage = () => {
  const t = useTranslations('HomePage');
  const { setStage } = useStage();
  const locale = useLocale();
  const container = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useLayoutEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      const heroText = new SplitText('.herotext', { type: locale === 'fa' ? 'words' : 'chars' });

      gsap.set(locale === 'fa' ? heroText.words : heroText.chars, { y: 200, opacity: 0 });

      tl.fromTo(
        '.image',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power2.out',
        }
      )
        .to(locale === 'fa' ? heroText.words : heroText.chars, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.075,
          ease: 'power3.out',
          delay: 1,
        })
        .fromTo(
          '.text',
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.3,
            stagger: 0.24,
            ease: 'power2.out',
          },
          '-=0.3'
        );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="relative z-20 w-full h-full flex lg:flex-row flex-col items-center justify-center lg:gap-0 md:gap-20 gap-10 pb-15 md:pb-0">
      <div className="md:w-1/2 w-[90%] h-full flex items-center justify-center">
        <Image className="image drop-shadow-lg transition-transform hover:scale-105 duration-300" src="/images/mainPhoto.png" alt="main photo" width={500} height={500} priority />
      </div>
      <div className="md:w-1/2 w-[90%] h-full flex flex-col items-center justify-center">
        <div className="md:space-y-4 space-y-2.5 text-center">
          <h1 dir={locale === 'fa' ? 'rtl' : 'ltr'} className={`text-center md:text-7xl ${locale === 'fa' ? 'text-[55px]' : 'text-[40px]'} font-extrabold flex flex-col`}>
            <span className="herotext inline-block">{t('portfolio')}</span>
            <span className="herotext inline-block">{t('name')}</span>
          </h1>
          <div className="text bg-muted relative rounded-[15px] w-[230px] h-[27px] flex items-center justify-center mr-auto">
            <span className="text-foreground font-light dark:text-background font-vazir">React, Next.js, TypeScript</span>
            <svg className="w-14 h-14 absolute -right-16 -top-1 opacity-20" version="1.0" xmlns="http://www.w3.org/2000/svg" width="600.000000pt" height="600.000000pt" viewBox="0 0 600.000000 600.000000" preserveAspectRatio="xMidYMid meet">
              <g transform="translate(0.000000,600.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                <path
                  className="fill-black dark:fill-white"
                  d="M1130 4352 c-217 -131 -259 -160 -326 -228 -73 -73 -119 -160 -118
                    -221 1 -51 36 -101 102 -147 99 -68 145 -106 286 -235 188 -173 227 -201 281
                    -201 82 0 146 75 131 153 -4 22 -47 89 -118 182 l-111 148 99 -6 c296 -18 824
                    -119 1134 -216 387 -120 771 -295 1235 -562 625 -359 877 -561 1270 -1019 192
                    -225 261 -316 319 -423 46 -86 70 -153 81 -224 21 -133 181 -167 249 -53 48
                    82 -29 318 -173 528 -118 172 -417 517 -612 707 -228 221 -389 343 -714 540
                    -559 340 -940 536 -1265 652 -555 197 -1036 302 -1534 333 -88 5 -161 12 -163
                    14 -2 2 39 28 92 57 118 65 175 122 175 175 0 83 -51 134 -132 134 -36 0 -66
                    -14 -188 -88z"
                />
              </g>
            </svg>
          </div>
          <h2 className="text md:text-4xl text-2xl font-light">{t('desc')}</h2>
          <p className="text md:text-lg text-sm">{t('desctwo')}</p>
          <div className="w-full flex md:mt-0 mt-6 items-center justify-center gap-5">
            <GlowButton type="button" onClick={() => setStage('Projects')}>
              <span className="text">{t('projects')}</span>
            </GlowButton>
            <GlowButton type="button" onClick={() => setStage('ContactMe')}>
              <span className="text">{t('contact')}</span>
            </GlowButton>
          </div>
        </div>
      </div>
      <div className={`absolute ${locale === 'fa' ? 'left-0' : 'right-0'} -bottom-3 flex gap-2 items-center justify-center`}>
        <SocialButton name="telegram" link="https://t.me/Mostafakamari78" />
        <SocialButton name="github" link="https://github.com/mostafakm78" />
        <SocialButton name="linkedin" link="http://linkedin.com/in/mostafa-kamari" />
      </div>
    </section>
  );
};

export default HomePage;
