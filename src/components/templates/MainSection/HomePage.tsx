import Image from 'next/image';
import GlowButton from '@/components/shared/GlowButton';
import SocialButton from '@/components/shared/SocialButton';
import { useLocale, useTranslations } from 'next-intl';
import { useStage } from '@/components/Providers/StageProvider';

const HomePage = () => {
  const t = useTranslations('HomePage');
  const { setStage } = useStage();
  const locale = useLocale();

  return (
    <section className="relative z-20 w-full h-full flex items-center justify-center">
      <div className="w-1/2 h-full flex items-center justify-center">
        <Image src="/images/mainPhoto.png" alt="main photo" width={500} height={500} />
      </div>
      <div className="w-1/2 h-full flex flex-col items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-center text-7xl font-extrabold flex flex-col">
            <span>{t('portfolio')}</span>
            <span>{t('name')}</span>
          </h1>
          <div className="bg-muted relative rounded-[15px] w-[230px] h-[27px] flex items-center justify-center mr-auto">
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
          <h2 className="text-4xl font-light">{t('desc')}</h2>
          <p className="text-lg">{t('desctwo')}</p>
          <div className="w-full flex items-center justify-center gap-5">
            <GlowButton type="button" onClick={() => setStage('Projects')}>
              {t('projects')}
            </GlowButton>
            <GlowButton type="button" onClick={() => setStage('ContactMe')}>
              {t('contact')}
            </GlowButton>
          </div>
        </div>
      </div>
      <div className={`absolute ${locale === 'fa' ? 'left-0' : 'right-0'} -bottom-7 flex gap-2 items-center justify-center`}>
        <SocialButton name="telegram" link="https://t.me/Mostafakamari78" />
        <SocialButton name="github" link="https://github.com/mostafakm78" />
        <SocialButton name="linkedin" link="http://linkedin.com/in/mostafa-kamari" />
      </div>
    </section>
  );
};

export default HomePage;
