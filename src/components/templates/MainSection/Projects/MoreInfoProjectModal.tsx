'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MoreInfoProjectProps } from '@/types/Types';
import { useLocale, useTranslations } from 'next-intl';
import Technologies from './Technologies';
import Challenges from './Challenges';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export function MoreInfoProjectModal({ ...props }: MoreInfoProjectProps) {
  const locale = useLocale();
  const container = useRef<HTMLDivElement | null>(null);
  const { technologies, description, challenges } = props;
  const t = useTranslations('Projects');

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.fromTo(
        '.col',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.25,
        }
      ).fromTo(
        '.row',
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.22,
        },
        '-=0.3'
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="w-full h-full">{t('more')}</span>
      </DialogTrigger>
      <DialogContent className="w-[90%] rounded-[15px] bg-background">
        <DialogHeader>
          <DialogTitle className="tracking-wider">{t('info')}</DialogTitle>
        </DialogHeader>
        <div ref={container} className="flex flex-col items-center justify-center min-h-[450px] w-full">
          <div className={`flex ${locale === 'fa' ? '' : 'flex-row-reverse'} items-stretch gap-4 w-full`}>
            <div className="flex flex-col items-center col">
              <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
              <div className="flex-1 w-1 bg-secondary" />
            </div>
            <div className={`flex flex-col ${locale === 'fa' ? 'items-start' : 'items-end'} gap-4 row`}>
              <h3 className="text-xl 3xl:text-2xl font-medium">{t('about')}</h3>
              <p dir={locale === 'fa' ? 'rtl' : 'ltr'} className="text-sm 3xl:text-base 3xl:max-w-3/4 opacity-90 mb-2">
                {locale === 'fa' ? description.fa : description.en}
              </p>
            </div>
          </div>
          <div className={`flex ${locale === 'fa' ? '' : 'flex-row-reverse'} items-stretch gap-4 w-full`}>
            <div className="flex flex-col items-center col">
              <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
              <div className="flex-1 w-1 bg-secondary" />
            </div>
            <div className={`flex flex-col ${locale === 'fa' ? 'items-start' : 'items-end'} gap-4 row`}>
              <h3 className="text-xl 3xl:text-2xl font-medium">{t('techs')}</h3>
              <div className={`flex ${locale === 'fa' ? '' : 'flex-row-reverse'} flex-wrap gap-3 mb-2`}>
                <Technologies technologies={technologies} />
              </div>
            </div>
          </div>
          <div className={`flex ${locale === 'fa' ? '' : 'flex-row-reverse'} items-stretch gap-4 w-full`}>
            <div className="flex flex-col items-center col">
              <div className="bg-transparent w-6 h-6 3xl:w-8 3xl:h-8 rounded-full border-[5px] border-secondary" />
              <div className="flex-1 w-1 bg-secondary" />
            </div>
            <div className={`flex flex-col ${locale === 'fa' ? 'items-start' : 'items-end'} gap-4 row`}>
              <h3 className="text-xl 3xl:text-2xl font-medium">{t('chall')}</h3>
              <Challenges challenges={challenges} />
            </div>
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">{t('close')}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
