'use client';
import Link from 'next/link';
import WorksCard from './WorksCard';
import Projects from '@/data/projects.json';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Works() {
  const container = useRef(null);
  const { t, i18n } = useTranslation();
  useGSAP(
    () => {
      let lastScroll = window.scrollY;

      ScrollTrigger.create({
        trigger: '.title',
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: () => {
          const currentScroll = window.scrollY;
          const direction = currentScroll > lastScroll ? 'down' : 'up';
          lastScroll = currentScroll;

          gsap.to('.title', {
            y: direction === 'down' ? -20 : 10,
            duration: 0.5,
            ease: 'power2.out',
          });
        },
      });

      gsap.set('.text-works', { opacity: 1 });
      gsap.from('.text-works', {
        scrollTrigger: {
          trigger: '.text-hero',
          start: 'bottom bottom',
          toggleActions: 'play none none none',
          once: true,
        },
        opacity: 0,
        x: 1000,
        duration: 1,
        ease: 'power2.out',
        delay: 0.3,
      });

      gsap.set('.works-card', { opacity: 1 });
      gsap.from('.works-card', {
        scrollTrigger: {
          trigger: '.works-card',
          start: 'top 80%',
          toggleActions: 'play none none none',
          once: true,
        },
        opacity: 0,
        x: 1000,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out',
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} className="flex flex-col px-10 justify-center items-center">
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="title lg:text-4xl text-2xl mt-4 text-back dark:text-fore">{t('Works')}</span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="text-hero mt-10 mb-5 lg:mb-0 lg:w-8/12 w-full">
        <span className="text-works text-back inline-block dark:text-fore">{t('Works Dec')}</span>
      </div>
      <div className="works-card mt-10 grid lg:grid-cols-2 grid-cols-1 lg:px-10 gap-8 justify-center items-center">
        {Projects.projects.slice(-2).map((project) => (
          <WorksCard key={Math.random()} {...project} />
        ))}
      </div>
      <Link className="rounded-md hover:opacity-85 duration-300 bg-back text-fore dark:bg-fore dark:text-back px-4 py-2" href="/more-projects">
        {t('More Info')}
      </Link>
    </div>
  );
}
