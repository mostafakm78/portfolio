'use client';
import { useTranslation } from 'react-i18next';
import FormContact from './Form';
import MoreContact from './MoreContact';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Contact() {
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

      gsap.set('.text-contact', { opacity: 1 });
      gsap.from('.text-contact', {
        scrollTrigger: {
          trigger: '.hero-contact',
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

      gsap.set('.contact', { opacity: 1 });
      gsap.from('.contact', {
        scrollTrigger: {
          trigger: '.contact',
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
    <div ref={container} dir={i18n.language === 'fa' ? 'rtl' : 'ltr'} id="Contact" className="flex flex-col px-10 justify-center items-center">
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="title lg:text-4xl text-2xl mt-4 text-back dark:text-fore">{t('Contact Me')}</span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="hero-contact mt-10 mb-5 lg:mb-0 lg:w-8/12 w-full">
        <span className="text-contact text-back dark:text-fore">{t('Contact Me Dec')}</span>
      </div>
      <div className="contact mt-10 w-full grid lg:grid-cols-2 grid-cols-1 justify-center items-center mb-20 lg:px-10 gap-8">
        <FormContact />
        <MoreContact />
      </div>
      <div className="mb-16 text-white/70">
        <span className="opacity-60">{t('Copy')}</span>
      </div>
    </div>
  );
}
