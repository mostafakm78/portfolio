import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';

export default function AboutProjects() {
  const t = useTranslations('AllProjects');

  return (
    <section className="flex flex-col my-12 items-center lg:h-[200px] justify-center gap-8">
      <h3 className="lg:text-5xl text-4xl text-secondary">{t('aboutprojects')}</h3>
      <Separator className="bg-secondary/50" />
      <div className="flex flex-col lg:flex-row justify-center text-lg text-secondary/80 h-full gap-3">
        <p className="lg:w-1/3 w-full">{t('secone')}</p>
        <Separator orientation="vertical" className="bg-secondary/50 h-full hidden lg:block" />
        <p className="lg:w-1/3 w-full">{t('sectwo')}</p>
        <Separator orientation="vertical" className="bg-secondary/50 h-full hidden lg:block" />
        <p className="lg:w-1/3 w-full">{t('secthree')}</p>
      </div>
    </section>
  );
}
