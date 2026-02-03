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
    <section className="relative z-20 w-full h-[80vh] flex flex-col items-center justify-center">
      <div className="w-full h-22 flex flex-col items-start justify-start gap-2.5">
        <h2 className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-5xl font-bold`}>{t('projects')}</h2>
        <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className={`${locale === 'fa' ? 'ml-auto' : 'mr-auto'} text-justify text-[16px] 3xl:text-lg`}>
          {t('desc')}
        </p>
      </div>
      <div className="w-full relative h-[calc(100%-90px)] p-1">
        <div className="absolute inset-0 flex flex-col gap-0 mt-4 items-center justify-center pointer-events-none">
          <Separator className="h-11/12 w-0.5 bg-foreground/10" orientation="vertical" />
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
