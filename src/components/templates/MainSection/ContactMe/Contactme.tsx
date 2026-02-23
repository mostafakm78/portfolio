import { useLocale, useTranslations } from 'next-intl';
import SocialApp from './SocialApp';
import EmailTell from './EmailTell';
import { SendMessage } from './SendMessage';


const ContactMe = () => {
  const locale = useLocale();
  const t = useTranslations('Contact');
  return (
    <section className={`relative z-20 w-full h-full flex lg:flex-row flex-col ${locale === 'fa' ? '' : 'lg:flex-row-reverse'} items-center justify-center gap-8`}>
      <article className="lg:w-1/2 w-full h-full flex flex-col items-center justify-between space-y-10">
        <div className="w-full h-full flex flex-col items-start justify-start gap-2.5">
          <h2 className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-4xl 3xl:text-5xl font-bold`}>{t('contactme')}</h2>
          <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-justify text-[16px] 3xl:text-lg`}>
            {t('contactone')}
          </p>
          <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-justify text-[16px] 3xl:text-lg`}>
            {t('contacttwo')}
          </p>
        </div>
        <div className="flex h-full flex-col w-full gap-2">
          <EmailTell />
        </div>
        <div className="w-full h-full flex flex-col items-start justify-start gap-8">
          <h3 className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-3xl 3xl:text-4xl font-bold`}>{t('social')}</h3>
          <SocialApp />
        </div>
      </article>
      <div className="lg:w-1/2 w-full h-full flex flex-col items-center justify-between space-y-4">
        <h3 className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-3xl 3xl:text-4xl font-bold`}>{t('sendms')}</h3>
        <SendMessage />
      </div>
    </section>
  );
};

export default ContactMe;
