import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

interface SourceCodeModalProps {
  tech: string[];
}

export function SourceCodeModal({ tech }: SourceCodeModalProps) {
  const t = useTranslations('Projects');
  const [open, setOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const runAnime = () => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current.querySelectorAll('.logo'),
      {
        opacity: 0,
        scale: 1.01,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.45,
        stagger: 0.15,
        ease: 'power4.inOut',
      }
    );
  };

  return (
    <Dialog onOpenChange={(value) => setOpen(value)}>
        <DialogTrigger asChild>
          <button className="text-sm p-4 border-none md:w-auto w-full bg-linear bg-linear-180 from-foreground/20 to-background shadow-lg rounded-xl hover:from-foreground text-secondary hover:bg-transparent duration-300 transition-colors cursor-pointer">{t('technology')}</button>
        </DialogTrigger>
        <DialogContent onOpenAutoFocus={() => setTimeout(runAnime, 0)} ref={containerRef} className="max-w-2xl h-1/2 bg-transparent">
          <DialogHeader>
            <DialogTitle className='text-secondary/80'>{t('technology')}</DialogTitle>
            <div className="w-full h-full flex flex-wrap items-center justify-center bg-slate-700/50 rounded-md p-4 gap-4">
              {tech.map((item, index) => (
                <div key={index} className="logo">
                  <Image src={item} alt={item} width={500} height={500} className="w-24 h-24 bg-slate-700 p-2 rounded-md" />
                </div>
              ))}
            </div>
          </DialogHeader>
        </DialogContent>
    </Dialog>
  );
}
