import { MoreInfoProjectProps } from '@/types/Types';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Technologies from './Technologies';
import Challenges from './Challenges';

const MoreInfoProject = ({ ...props }: MoreInfoProjectProps) => {
  const { technologies, description, challenges } = props;
  const t = useTranslations('Projects');
  const locale = useLocale();
  console.log(challenges);
  return (
    <div className="flex flex-col items-center justify-center h-full w-[calc(100%-100px)]">
      <div className={`flex ${locale === 'fa' ? 'flex-row-reverse' : ''} items-stretch gap-4 w-full`}>
        <div className="flex flex-col items-center">
          <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
          <div className="flex-1 w-1 bg-secondary" />
        </div>
        <div className={`flex flex-col ${locale === 'fa' ? 'items-end' : 'items-start'} gap-4`}>
          <h3 className="text-xl 3xl:text-2xl font-medium">{t('about')}</h3>
          <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className="text-sm 3xl:text-base 3xl:max-w-3/4 opacity-90 mb-2">
            {locale === 'fa' ? description.fa : description.en}
          </p>
        </div>
      </div>
      <div className={`flex ${locale === 'fa' ? 'flex-row-reverse' : ''} items-stretch gap-4 w-full`}>
        <div className="flex flex-col items-center">
          <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
          <div className="flex-1 w-1 bg-secondary" />
        </div>
        <div className={`flex flex-col ${locale === 'fa' ? 'items-end' : 'items-start'} gap-4`}>
          <h3 className="text-xl 3xl:text-2xl font-medium">{t('techs')}</h3>
          <div className={`flex ${locale === 'fa' ? 'flex-row-reverse' : ''} flex-wrap gap-3 mb-2`}>
            <Technologies technologies={technologies} />
          </div>
        </div>
      </div>
      <div className={`flex ${locale === 'fa' ? 'flex-row-reverse' : ''} items-stretch gap-4 w-full`}>
        <div className="flex flex-col items-center">
          <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
          <div className="flex-1 w-1 bg-secondary" />
        </div>
        <div className={`flex flex-col ${locale === 'fa' ? 'items-end' : 'items-start'} gap-4`}>
          <h3 className="text-xl 3xl:text-2xl font-medium">{t('chall')}</h3>
          <Challenges challenges={challenges} />
        </div>
      </div>
    </div>
  );
};

export default MoreInfoProject;
