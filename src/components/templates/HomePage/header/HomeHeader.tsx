'use client';
import { Image, Link } from '@heroui/react';
import { useCallback, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function HomeHeader() {
  const container = useRef(null);
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'fa';

  const introTl = gsap.timeline();
  const introImage = gsap.timeline();

  useGSAP(
    () => {
      const split = SplitText.create('.mostafa', { type: 'words', aria: 'hidden' });

      const words = isRtl ? split.words : [...split.words];

      introTl
        .set('.text-box', { opacity: 1, scale: 1 })
        .from('.text-box', {
          y: -500,
          opacity: 0,
          duration: 1.3,
          delay: 0.7,
        })
        .from(words, {
          opacity: 0,
          duration: 1,
          ease: 'sine.out',
          stagger: 0.3,
        })
        .fromTo(
          '.front',
          {
            scale: 1,
            opacity: 0,
          },
          {
            opacity: 1,
            scale: 2,
            duration: 0.3,
            ease: 'power2.out',
            onStart: () => {
              document.querySelector('.front')?.classList.add('text-rose-700');
            },
          }
        )
        .to('.front', {
          scale: 1,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            document.querySelector('.front')?.classList.remove('text-rose-700');
          },
        })
        .fromTo(
          '.end',
          {
            scale: 1,
            opacity: 0,
          },
          {
            opacity: 1,
            scale: 2,
            duration: 0.3,
            ease: 'power2.out',
            onStart: () => {
              document.querySelector('.end')?.classList.add('text-rose-700');
            },
          },
          '+=.4'
        )
        .to('.end', {
          scale: 1,
          duration: 0.3,
          ease: 'power2.inOut',
          onComplete: () => {
            document.querySelector('.end')?.classList.remove('text-rose-700');
          },
        })
        .fromTo(
          '.dev',
          {
            opacity: 0,
            scale: 5,
          },
          {
            scale: 1,
            opacity: 1,
            ease: 'bounce.out',
          },
          '+=.4'
        )
        .fromTo(
          '.dev',
          {},
          {
            duration: 0.3,
            onStart: () => {
              document.querySelector('.dev')?.classList.add('text-rose-700');
            },
          },
          '+=.2'
        )
        .to('.dev', {
          duration: 0.3,
          onComplete: () => {
            document.querySelector('.dev')?.classList.remove('text-rose-700');
          },
        })
        .fromTo(
          '.contact',
          {
            rotate: 0,
          },
          {
            rotate: 25,
            y: 10,
            ease: 'power4.out',
            duration: 1,
          }
        );

      gsap.set('.contact', {
        rotate: 25,
        y: 10,
        delay: 10,
      });

      ScrollTrigger.create({
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        onEnter: () => {
          gsap.to('.contact', {
            rotate: 0,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          gsap.to('.contact', {
            rotate: 25,
            y: 10,
            duration: 1,
            ease: 'power2.out',
          });
        },
      });

      introImage.set('.image', { opacity: 1 }).from('.image', {
        x: 1000,
        opacity: 0,
        duration: 1.3,
        delay: 0.7,
      });
    },
    { scope: container }
  );

  const scrollToContact = useCallback(() => {
    const section = document.getElementById('Contact');
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return (
    <div ref={container} className="hero bg-fore dark:bg-back p-10 md:justify-center md:items-center md:gap-40 gap-20 flex flex-col-reverse md:flex-row w-full">
      <div className="image md:w-1/2 w-full flex justify-center">
        <div className="bg-back rounded-3xl shadow-lg dark:bg-fore">
          <Image isZoomed loading="lazy" alt="My Profile" src="/images/me.jpeg" width={400} height={500} />
        </div>
      </div>
      <div className="text-box flex flex-col md:w-1/2 w-full text-center items-center justify-center">
        <span className={`mostafa text-back dark:text-fore text-2xl inline-block ${isRtl ? 'rtl' : 'ltr'}`} style={{ direction: isRtl ? 'rtl' : 'ltr' }}>
          {t('Hello , Im Mostafa')}
        </span>
        <div className="text-back dark:text-fore xl:text-8xl text-6xl font-sans font-extrabold xl:w-3/4 w-full">
          <div className="flex space-x-2 justify-center items-center flex-row-reverse">
            <p className="front">Front</p>
            <p className="end inline-block">end</p>
          </div>
          <p className="dev inline-block">Developer</p>
        </div>
        <Link className="contact text-back dark:text-fore cursor-pointer text-2xl mt-6 border-b-2 pb-1 border-b-back dark:border-b-fore" onPress={scrollToContact}>
          {t('Contact Me')}
        </Link>
      </div>
    </div>
  );
}
