'use client';

import { useRef } from 'react';
import Header from './Header';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function HomePage() {
  const aboutmeRef = useRef<HTMLDivElement | null>(null);
  const projectsmeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations('AboutMe')
  const locale = useLocale()

  return (
    <section>
      <div className="relative flex flex-col items-center justify-center gap-20 bg-linear bg-linear-150 from-foreground to-background">
        <div className={`fixed lg:hidden h-12 w-20 bg-foreground bottom-4 ${locale === 'fa' ? 'right-6 text-sm' : 'left-6 text-xs'} z-100 rounded-xl shadow-2xl`}>
            <Link href="/MostafaKamari-Resume.pdf" download className="flex flex-col items-center h-full text-secondary justify-center w-full">
          <span>{t('down')}</span>
          <span>{t('resume')}</span>
        </Link>
        </div>
        <div className="container mx-auto">
          <Header aboutmeRef={aboutmeRef} projectsRef={projectsmeRef} contactRef={contactRef} />
          <Aboutme aboutmeRef={aboutmeRef} />
          <Projects projectsRef={projectsmeRef} />
          <Contact contactRef={contactRef} />
        </div>
      </div>
    </section>
  );
}
