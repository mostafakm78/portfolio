import { Separator } from '@/components/ui/separator';
import { useLocale, useTranslations } from 'next-intl';
import { FaChevronDown } from 'react-icons/fa';
import Projects from './Projects';
import { useStage } from '@/components/Providers/StageProvider';

const ProjectsPage = () => {
  const locale = useLocale();
  const t = useTranslations('Projects');
  const { lastIndex } = useStage();

  return (
    <section className="relative z-20 w-full h-[80vh] flex flex-col items-center justify-between lg:gap-0 gap-4">
      <div className="w-full h-20 flex flex-col items-start justify-start gap-2.5">
        <h2 className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-4xl 3xl:text-5xl font-bold`}>{t('projects')}</h2>
        <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-justify text-sm md:text-[16px] 3xl:text-lg`}>
          {t('desc')}
        </p>
      </div>
      <div className="w-full relative lg:h-[calc(100%-90px)] md:h-[calc(100%-100px)] h-[calc(100%-130px)] p-1">
        <div className="absolute w-full lg:inset-0 lg:left-0 lg:translate-x-0 bottom-0 left-1/2 -translate-x-1/2 flex flex-row lg:flex-col lg:gap-0 gap-2 lg:mt-4 items-center justify-center pointer-events-none">
          <Separator className="lg:block hidden h-11/12 w-0.5 bg-foreground/10" orientation="vertical" />
          {lastIndex ? null : (
            <>
              <FaChevronDown className="text-base opacity-30 text-foreground" />
              <span className="text-xs opacity-50 text-foreground">{t('moreprojects')}</span>
            </>
          )}
        </div>
        <div id="projects-scroll-container" dir="ltr" className="w-full relative h-full overflow-y-scroll space-y-20 snap-y snap-mandatory scroll-smooth">
          <Projects />
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
