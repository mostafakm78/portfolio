'use client';

import Projects from '@/data/projects.json';
import Image from 'next/image';
import { PhotosModal } from '../MainSection/PhotosModal';
import { SourceCodeModal } from '../MainSection/SourceCodeModal';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { LiquidGlass } from '@/components/shared/LiquidGlassCard';
import { MdArrowBackIos } from 'react-icons/md';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Project {
  name: { fa: string; en: string };
  src: string;
  photos: string[];
  tech: string[];
  techtitle: string[];
  desc: { fa: string; en: string };
  link?: string;
}

export default function ProjectsCards() {
  const locale = useLocale();
  const t = useTranslations('AllProjects');
  const query = useSearchParams();
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    const keyword = query.get('keyword')?.toLowerCase() || '';
    const sort = query.get('sort') || 'newest';
    const tech = query.get('tech')?.split('-') || [];

    let baseList = [...Projects.projects];

    if (sort === 'newest') {
      baseList = baseList.reverse();
    }

    if (!keyword) {
      setFilteredProjects(baseList);
    }

    let result = baseList.filter((item: Project) => {
      const nameMatch = item.name.fa.toLowerCase().includes(keyword) || item.name.en.toLowerCase().includes(keyword);
      const descMatch = item.desc.fa.toLowerCase().includes(keyword) || item.desc.en.toLowerCase().includes(keyword);
      const techMatch = item.tech.some((tech) => tech.toLowerCase().includes(keyword));

      return nameMatch || descMatch || techMatch;
    });

    if (tech.length > 0) {
      result = result.filter((item: Project) => tech.every((t) => item.techtitle.some((tt) => tt.toLowerCase().includes(t.toLowerCase()))));
    }

    setFilteredProjects(result);
  }, [query]);

  return (
    <div className="lg:w-9/12 w-full min-h-screen grid lg:grid-cols-2 grid-cols-1 shadow-lg place-items-center gap-8 relative bg-background p-2 lg:p-8 rounded-3xl">
      <LiquidGlass className="h-10 absolute -top-5 left-8">
        <Link href="/" className={`flex items-center gap-2 text-secondary p-2 px-3 text-lg ${locale === 'fa' ? 'flex-row' : 'flex-row-reverse'}`}>
          {t('homepage')}
          <MdArrowBackIos />
        </Link>
      </LiquidGlass>
      {filteredProjects.length === 0 ? (
        <p className="text-secondary/80 col-span-2 text-center text-3xl">{t('notfound')}</p>
      ) : (
        filteredProjects.map((project: Project, index: number) => (
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
        ))
      )}
    </div>
  );
}
