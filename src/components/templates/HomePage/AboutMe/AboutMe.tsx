'use client';
import Image from 'next/image';
import MoreAboutMe from './MoreAboutMe';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@heroui/react';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const apps = [
  { key: 'tailwind', src: '/images/tailwind-css-icon.png', name: 'TailWind' },
  { key: 'Css', src: '/images/css-icon.png', name: 'Css' },
  { key: 'Figma', src: '/images/figma-icon.png', name: 'Figma' },
  { key: 'Html', src: '/images/html-icon.png', name: 'Html' },
  {
    key: 'JavaScript',
    src: '/images/javascript-programming-language-icon.png',
    name: 'JavaScript',
  },
  {
    key: 'TypeScript',
    src: '/images/typescript-programming-language-icon.png',
    name: 'TypeScript',
  },
  { key: 'Next', src: '/images/nextjs-icon.png', name: 'Next Js' },
  { key: 'Redux', src: '/images/redux-icon.png', name: 'Redux' },
  { key: 'Sass', src: '/images/sass-icon.png', name: 'Sass' },
  {
    key: 'VSCode',
    src: '/images/visual-studio-code-icon.png',
    name: 'VS Code',
  },
  { key: 'HeroUI', src: '/images/isotipo.png', name: 'HeroUI' },
  { key: 'React', src: '/images/react-js-icon.png', name: 'React' },
];

interface App {
  key: string;
  src: string;
  name: string;
}

export default function AboutMe() {
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

      gsap.set('.about', { opacity: 1 });
      gsap.from('.about', {
        scrollTrigger: {
          trigger: '.about-hero',
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

      gsap.set('.skills', { opacity: 1 });

      gsap.from('.skills', {
        scrollTrigger: {
          trigger: '.skills-hero',
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
    <div ref={container} dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} id="about-me" className="flex flex-col px-10 justify-center items-center">
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="title inline-block lg:text-4xl text-2xl mt-4 text-back dark:text-fore">{t('About Me')}</span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="about-hero mt-10 mb-5 lg:mb-0 lg:w-8/12 w-full">
        <span className="about inline-block text-back dark:text-fore">{t('About Me short')}</span>
      </div>
      <div className="flex justify-around w-full">
        <Link href="/MostafaKamari-Resume.pdf" download>
          <Button className="rounded-md hover:opacity-85 mt-6 duration-300 bg-back text-fore dark:bg-fore dark:text-back">{t('Download Resume')}</Button>
        </Link>
        <MoreAboutMe />
      </div>
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="title inline-block lg:text-4xl text-2xl mt-4 text-back dark:text-fore">{t('Skills')}</span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="skills-hero mt-10 grid lg:grid-cols-6 grid-cols-2 px-10 gap-8 justify-center items-center">
        {apps.map((app: App) => (
          <div key={app.key} className="skills flex flex-col justify-center items-center rounded-xl shadow-md bg-back dark:bg-fore p-3">
            <Image className="w-24" width={800} height={800} alt={app.name} src={app.src} />
            <span className="font-sans text-fore text-[12px] lg:text-base dark:text-back ">{app.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
