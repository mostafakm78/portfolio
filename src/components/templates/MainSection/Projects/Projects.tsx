import ProjectsData from '@/data/projects.json';
import GlowButton from '@/components/shared/GlowButton';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaGithub } from 'react-icons/fa';
import { ProjectProps } from '@/types/Types';
import { useLocale, useTranslations } from 'next-intl';
import Link from 'next/link';
import { CgMediaLive } from 'react-icons/cg';
import MoreInfoProject from './MoreInfoProject';
import { useEffect, useRef, useState } from 'react';
import { useStage } from '@/components/Providers/StageProvider';
import { IoIosMore } from 'react-icons/io';
import { useMobile } from '@/hooks/useMobile';
import { MoreInfoProjectModal } from './MoreInfoProjectModal';

const Projects = () => {
  const locale = useLocale();
  const [openId, setOpenId] = useState<string | null>(null);
  const isMobile = useMobile();
  const ProjectsList = [...ProjectsData.projects].reverse();
  const t = useTranslations('Projects');
  const { setLastIndex } = useStage();
  const lastRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!lastRef.current) return;

    const root = document.querySelector('#projects-scroll-container');
    const observer = new IntersectionObserver(
      ([entry]) => {
        setLastIndex(entry.isIntersecting);
      },
      {
        root,
        threshold: 0.5,
      }
    );

    observer.observe(lastRef.current);
    return () => observer.disconnect();
  }, [setLastIndex]);

  return (
    <>
      {ProjectsList.map((project: ProjectProps, index: number) => {
        const isLast = index === ProjectsList.length - 1;
        const isOpen = openId === project.id;

        return (
          <article
            key={project.id}
            ref={
              isLast
                ? (el) => {
                    lastRef.current = el;
                  }
                : undefined
            }
            className={`w-full h-full flex ${locale === 'fa' ? 'flex-row-reverse' : ''} items-center snap-start`}
          >
            <div className="lg:w-1/2 w-full h-full flex items-center justify-center">
              <div className="bg-[url('/images/card.png')] bg-contain bg-center bg-no-repeat h-[330px] w-[290px] md:h-[400px] md:w-[360px] lg:h-[420px] 3xl:h-[520px] lg:w-[380px] 3xl:w-[450px] relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-10/12 flex flex-col items-center justify-center gap-5 3xl:gap-6 py-8 px-6">
                  <h3 className="text-xl font-medium text-center text-foreground dark:text-background">{locale === 'fa' ? project.name.fa : project.name.en}</h3>
                  <Image className="w-auto max-w-[70%] 3xl:max-w-[80%] h-[150px]" src={project.photos[0]} alt={locale === 'fa' ? project.name.fa : project.name.en} width={800} height={800} quality={90} />
                  <div className="flex items-center justify-center gap-2 w-3/4 group hover:gap-4 duration-300">
                    <Button className="bg-background shadow-none w-full hover:bg-background/80 group-hover:bg-background/80 text-base">
                      <Link href={project.src} target="_blank" className="w-full h-full">
                        {t('rep')}
                      </Link>
                    </Button>
                    <FaGithub className="text-3xl group-hover:scale-115 duration-300 text-foreground dark:text-background" />
                  </div>
                  <div className="flex items-center justify-center gap-2 w-3/4 group hover:gap-4 duration-300">
                    <Button asChild disabled={!project.link} className="bg-background w-full shadow-none hover:bg-background/80 group-hover:bg-background/80 text-base">
                      <Link href={project.link ? project.link : '#'} target="_blank" className="w-full h-full">
                        {t('view')}
                      </Link>
                    </Button>
                    <CgMediaLive className="text-3xl group-hover:scale-115 duration-300 text-foreground dark:text-background" />
                  </div>
                </div>
                <span className={`md:text-[10px] text-[8px] text-foreground dark:text-background opacity-80 absolute bottom-1/12 ${locale === 'fa' ? 'md:right-1/8 right-[7%]' : 'md:right-1/10 right-[4.5%]'} 3xl:right-1/6 `}>{t('moreinfo')}</span>
                <GlowButton
                  itemID={project.id}
                  onClick={() => setOpenId((prev) => (prev === project.id ? null : project.id))}
                  spanclassname="flex flex-col items-center justify-center gap-0"
                  className="absolute bottom-0 left-2 md:left-3 lg:left-3.5 3xl:left-2 3xl:w-[110px] 3xl:h-[85px] lg:w-[90px] lg:h-[70px] md:w-[85px] md:h-[65px] w-[70px] h-[55px] md:rounded-[15px] rounded-[10px] md:text-base text-sm"
                >
                  {isMobile ? (
                    <MoreInfoProjectModal challenges={project.challenge} description={project.desc} technologies={project.techs} />
                  ) : isOpen && !isMobile ? (
                    <>
                      <span>{t('close')}</span>
                      {locale === 'fa' ? <FaChevronRight className="ml-2" /> : <FaChevronLeft className="mr-1" />}
                    </>
                  ) : (
                    <>
                      <span>{t('more')}</span>
                      {locale === 'fa' ? <FaChevronLeft /> : <FaChevronRight />}
                    </>
                  )}
                </GlowButton>
              </div>
            </div>
            <div className="lg:w-1/2 hidden h-full lg:flex items-center justify-center">
              {isOpen && !isMobile ? (
                <MoreInfoProject challenges={project.challenge} description={project.desc} technologies={project.techs} />
              ) : (
                <div className="flex flex-col items-center justify-center text-xl opacity-30">
                  <span>{t('notopen')}</span>
                  <IoIosMore />
                </div>
              )}
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Projects;
