'use client';
import { ThemeToggle } from '@/components/shared/ThemeToggle';
import LocaleToggle from '@/components/shared/LocaleSwitcher';
import Menu from '@/components/shared/Menu';
import HomePage from './HomePage/HomePage';
import AboutMe from './AboutMe/Aboutme';
import { useStage } from '@/components/Providers/StageProvider';
import Projects from './Projects/ProjectsPage';
import ContactMe from './ContactMe/Contactme';
import { StageProps } from '@/types/Types';
import { JSX } from 'react';

export default function MainSection() {
  const { stage } = useStage();

  const screens: Record<StageProps, JSX.Element> = {
    HomePage: <HomePage />,
    AboutMe: <AboutMe />,
    Projects: <Projects />,
    ContactMe: <ContactMe />,
  };

  const content = screens[stage] ?? <HomePage />;

  return (
    <section className="lg:h-screen p-4 flex flex-col">
      <section className="h-13 shrink-0 flex items-center justify-between">
        <Menu />
        <div className="ml-4 flex items-center gap-2">
          <LocaleToggle />
          <ThemeToggle />
        </div>
      </section>

      <section className={`bg-background py-6 px-10 3xl:py-10 3xl:px-10 relative w-full flex-1 rounded-[30px] rounded-tr-none shadow-[0px_2px_2px_rgba(0,0,0,0.1)]`}>
        {content}
        <div className="w-full h-full absolute pointer-events-none right-0 top-0 z-10 opacity-70 bg-[linear-gradient(330deg,var(--color-primary)_10%,var(--color-background)_25%)] rounded-[30px] rounded-tr-none" />
      </section>
    </section>
  );
}
