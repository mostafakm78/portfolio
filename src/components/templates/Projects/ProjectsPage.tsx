'use client';

import { useLocale, useTranslations } from 'next-intl';
import ProjectsCards from './ProjectsCards';
import SideBar from './Sidebar';
import AboutProjects from './AboutProjects';
import Contact from './Contact';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import LocaleToggle from '@/components/shared/LocaleSwitcher';
import { Menu } from './Menu';
import { useMobile } from '@/hooks/useMobile';

export default function ProjectsPage() {
  const t = useTranslations('AllProjects');
  const locale = useLocale();
  const isMobile = useMobile();

  return (
    <section className="min-h-screen bg-linear bg-linear-150 from-foreground to-background">
      <div className="container mx-auto">
        <div className="flex flex-col relative items-center justify-center lg:p-4 xl:p-8 p-2 gap-10">
          <h1 className="lg:text-5xl md:text-4xl text-3xl text-secondary mt-8 lg:mt-0">{t('allprojects')}</h1>
          <div className={`lg:absolute top-10 left-10 z-20 flex items-center gap-4 ${locale === 'fa' ? 'flex-row-reverse' : ''}`}>
            <ThemeToggle />
            <LocaleToggle />
            {isMobile && <Menu />}
          </div>
          <div className="flex items-start justify-center w-full h-full gap-4">
            <SideBar />
            <ProjectsCards />
          </div>
          <AboutProjects />
          <Contact />
        </div>
      </div>
    </section>
  );
}
