'use client';

import { ThemeToggle } from '@/components/shared/ThemeToggle';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import LiquidGlassBackground from '@/components/shared/LiquidGlassCard';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  const scopeRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const timeline = gsap.timeline();
    const heroText = new SplitText('.herotext', { type: 'chars' });
    const tracker = document.querySelector('.tracker');
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

    gsap.set(heroText.chars, { y: 200, opacity: 0 });

    timeline
      .to(heroText.chars, {
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
          duration: 1,
          stagger: 0.5,
          ease: 'power3.out',
          delay: 0.1,
        }
      );

    gsap.to('.pin', {
      scrollTrigger: {
        trigger: '.pin',
        start: 'top top',
        end: 'bottom top',
        pin: true,
        scrub: true,
      },
    });

    gsap.set('.anime', { y: 0 });

    gsap.to('.tracker', {});

    gsap.fromTo(
      '.anime',
      {
        y: -5,
      },
      {
        y: 5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
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
  }, [scopeRef]);

  return (
    <main ref={scopeRef}>
      <section className=" relative flex flex-col items-center justify-center gap-20 h-screen bg-linear bg-linear-150 from-slate-900 to-slate-700">
        <div className="anime w-10/12 h-10/12 absolute bg-slate-700/50 blur-sm rounded-3xl z-10" />
        <div className="tracker opacity-0 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute h-20 w-20 bg-slate-100 rounded-full z-0 blur-2xl" />
        <div className="flex flex-col items-center justify-center">
          <h1 className="herotext font-stacksans text-9xl z-20">Mostafa Kamari</h1>
          <h2 className="herotext font-stacksans text-9xl z-20">Portfolio</h2>
        </div>
        <div className="w-8/12 flex items-center justify-around gap-4 z-20">
          <ul>
            <li className="links">
              <LiquidGlassBackground className="p-4 rounded-4xl">
                <Link href="/projects" className="font-stacksans text-2xl">
                  About me
                </Link>
              </LiquidGlassBackground>
            </li>
          </ul>
          <ul>
            <li className="links">
              <LiquidGlassBackground className="p-4 rounded-4xl">
                <Link href="/projects" className="font-stacksans text-2xl">
                  Projects
                </Link>
              </LiquidGlassBackground>
            </li>
          </ul>
          <ul>
            <li className="links relative group duration-300">
              <LiquidGlassBackground className="p-4 rounded-4xl group-hover:opacity-0 duration-300 font-stacksans text-2xl">Contact</LiquidGlassBackground>
              <Link href="/projects" className="font-stacksans absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl group-hover:opacity-70 duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
