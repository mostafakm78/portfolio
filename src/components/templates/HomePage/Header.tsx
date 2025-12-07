'use client';

import { ThemeToggle } from '@/components/shared/ThemeToggle';
import Link from 'next/link';
import LocaleToggle from '@/components/shared/LocaleSwitcher';
import { Ref, RefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';
import { useLocale, useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { LiquidGlass } from '@/components/shared/LiquidGlassCard';

gsap.registerPlugin(SplitText, ScrollToPlugin);

interface HeaderProps {
  aboutmeRef: RefObject<HTMLDivElement | null>;
  projectsRef: RefObject<HTMLDivElement | null>;
  contactRef: RefObject<HTMLDivElement | null>;
}

export default function Header({ aboutmeRef, contactRef, projectsRef }: HeaderProps) {
  const t = useTranslations('HomePage');
  const locale = useLocale();

  const scrollToAboutme = () => {
    if (aboutmeRef.current) {
      gsap.to(window, {
        duration: 0.7,
        scrollTo: aboutmeRef.current,
        ease: 'power4.in',
      });
    }
  };

  const scrollToProjects = () => {
    if (projectsRef.current) {
      gsap.to(window, {
        duration: 0.7,
        scrollTo: projectsRef.current,
        ease: 'power4.in',
      });
    }
  };

  const scrollToContact = () => {
    if (contactRef.current) {
      gsap.to(window, {
        duration: 0.7,
        scrollTo: contactRef.current,
        ease: 'power4.in',
      });
    }
  };

  useGSAP(() => {
    const tracker = document.querySelector('.tracker');
    const timeline = gsap.timeline();
    const heroText = new SplitText('.herotext', { type: locale === 'fa' ? 'words' : 'chars' });
    let isShow: boolean = false;

    const showTracker = () => {
      if (!isShow) {
        isShow = true;
        gsap.to(tracker, {
          opacity: 0.7,
          duration: 0.3,
          delay: 0.5,
        });
      }
    };

    gsap.set(locale === 'fa' ? heroText.words : heroText.chars, { y: 200, opacity: 0 });

    timeline
      .to(locale === 'fa' ? heroText.words : heroText.chars, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.075,
        ease: 'power3.out',
        delay: 1,
      })
      .fromTo(
        '.links',
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.7,
          stagger: 0.3,
          ease: 'power3.out',
          delay: 0.25,
        }
      );

    window.addEventListener('mousemove', (e) => {
      showTracker();

      gsap.to(tracker, {
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
        duration: 0.2,
        delay: 0.2,
        ease: 'power3.out',
      });
    });
  }, []);

  return (
    <div className="relative md:h-screen h-[500px] w-full flex justify-center items-center">
      <div className="tracker opacity-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute h-20 w-20 bg-secondary rounded-full z-0 blur-2xl" />
      <div className="w-11/12 md:w-10/12 h-10/12 bg-background/50 rounded-3xl z-10 shadow-2xl relative">
        <div className={`absolute top-5 left-5 z-20 flex items-center gap-4 ${locale === 'fa' ? 'flex-row-reverse' : ''}`}>
          <ThemeToggle />
          <LocaleToggle />
        </div>
        <div className="flex flex-col lg:gap-20 items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center h-2/3 lg:h-auto">
            <h1 className="herotext xl:text-9xl lg:text-8xl md:text-7xl text-4xl text-secondary z-20">{t('name')}</h1>
            <h2 className="herotext xl:text-9xl lg:text-8xl md:text-7xl text-4xl text-secondary z-20">{t('portfolio')}</h2>
          </div>
          <ul className="w-full flex lg:flex-row flex-col items-center md:justify-around justify-center gap-2 pb-4 lg:pb-0 lg:gap-4 md:gap-10 z-20">
            <li className="links w-full px-2 lg:w-auto lg:px-0">
              <LiquidGlass className="lg:p-4 md:p-2 p-1 rounded-4xl">
                <Button onClick={scrollToAboutme} className="xl:text-2xl lg:text-xl md:text-lg text-xs bg-transparent shadow-none hover:bg-transparent text-secondary hover:opacity-75 duration-300 transition-all cursor-pointer p-0">
                  {t('aboutme')}
                </Button>
              </LiquidGlass>
            </li>
            <li className="links w-full px-2 lg:w-auto lg:px-0">
              <LiquidGlass className="lg:p-4 md:p-2 p-1 rounded-4xl">
                <Button onClick={scrollToProjects} className="xl:text-2xl lg:text-xl md:text-lg text-xs bg-transparent shadow-none hover:bg-transparent text-secondary hover:opacity-75 duration-300 transition-all cursor-pointer p-0">
                  {t('projects')}
                </Button>
              </LiquidGlass>
            </li>
            <li className="links w-full px-2 lg:w-auto lg:px-0">
              <LiquidGlass className="lg:p-4 md:p-2 p-1 rounded-4xl">
                <Button onClick={scrollToContact} className="xl:text-2xl lg:text-xl md:text-lg text-xs bg-transparent shadow-none hover:bg-transparent text-secondary hover:opacity-75 duration-300 transition-all cursor-pointer p-0">
                  {t('contact')}
                </Button>
              </LiquidGlass>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
