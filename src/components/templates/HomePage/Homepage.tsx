'use client';

import { useRef } from 'react';
import Header from './Header';
import Aboutme from './Aboutme';
import Projects from './Projects';
import Contact from './Contact';

export default function HomePage() {
  const aboutmeRef = useRef<HTMLDivElement | null>(null);
  const projectsmeRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <section>
      <div className="relative flex flex-col items-center justify-center gap-20 bg-linear bg-linear-150 from-foreground to-background">
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
