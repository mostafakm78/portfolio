import { LiquidGlass } from '@/components/shared/LiquidGlassCard';
import Projects from '@/data/projects.json';
import Image from 'next/image';
import Link from 'next/link';
import { SourceCodeModal } from './SourceCodeModal';
import { PhotosModal } from './PhotosModal';
import { useLocale, useTranslations } from 'next-intl';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RefObject } from 'react';
import { FaChevronLeft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: { fa: string; en: string };
  src: string;
  photos: string[];
  tech: string[];
  desc: { fa: string; en: string };
  link?: string;
}

interface LastProjectsProps {
  projectsRef: RefObject<HTMLDivElement | null>;
}

export default function LastProjects({ projectsRef }: LastProjectsProps) {
  const locale = useLocale();
  const t = useTranslations('Projects');

  useGSAP(() => {
    gsap.fromTo(
      '.card',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: 'top bottom',
          end: 'bottom bottom',
          once: true,
        },
      }
    );
  }, []);

  return (
    <section ref={projectsRef} className="2xl:h-screen w-full mb-12 flex flex-col items-center justify-center gap-6 z-50">
      <div className="relative w-11/12 md:w-10/12 lg:w-11/12 xl:w-10/12 h-9/12 flex lg:flex-row flex-col items-center justify-center gap-10 mt-8">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2">
          <LiquidGlass blur={20} className="p-4 md:text-2xl text-sm rounded-4xl text-secondary">
            {t('lastprojects')}
          </LiquidGlass>
        </div>
        {Projects.projects.slice(-2).map((project: Project, index) => (
          <article key={index} className="card w-full h-full bg-background rounded-3xl shadow-2xl flex flex-col p-4 pb-8 gap-8 lg:gap-4 justify-between items-center">
            <Image src={project.photos[0]} alt={locale === 'fa' ? project.name.fa : project.name.en} width={500} height={500} className="w-full rounded-t-2xl border-2 shadow-lg md:h-60 h-38" />
            <h2 className="font-vazir text-2xl text-secondary">{locale === 'fa' ? project.name.fa : project.name.en}</h2>
            <p className="font-vazir text-center text-secondary/70">{locale === 'fa' ? project.desc.fa : project.desc.en}</p>
            <div className="flex md:flex-row flex-col gap-1 md:gap-0 w-full items-center justify-around">
              <PhotosModal photos={project.photos} />
              <SourceCodeModal tech={project.tech} />
              <Link
                href={project.src}
                target="_blank"
                className="flex items-center gap-2 text-sm p-4 bg-linear bg-linear-180 from-foreground/20 md:w-auto w-full justify-center to-background shadow-lg rounded-xl text-secondary group hover:from-foreground duration-300 transition-colors cursor-pointer"
              >
                {t('sourcecode')}
              </Link>
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className={`flex items-center gap-2 text-sm p-4 bg-linear bg-linear-180 from-foreground/20 to-background shadow-lg w-full justify-center md:w-auto rounded-xl group hover:from-foreground text-secondary duration-300 transition-colors cursor-pointer ${
                    project.link ? '' : 'pointer-events-none opacity-70'
                  }`}
                >
                  {t('see')}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
      <LiquidGlass className={`md:text-2xl text-base p-4 rounded-4xl w-10/12 flex items-center justify-center group`} classnametwo={`${locale === 'fa' ? '' : 'flex-row-reverse'}`}>
        <Link href="/projects" className="text-secondary">
          {t('allprojects')}
        </Link>
        <FaChevronLeft className="opacity-0 hidden lg:block text-secondary group-hover:opacity-100 group-hover:mr-6 duration-300 transition-all " />
      </LiquidGlass>
    </section>
  );
}
