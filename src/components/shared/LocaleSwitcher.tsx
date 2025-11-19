'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { useSearchParams } from 'next/navigation';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(useGSAP);

export default function LocaleToggle() {
  const locale = useLocale();
  const t = useTranslations('Common');
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const scope = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (!labelRef.current) return;
      gsap.fromTo(labelRef.current, { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.25, ease: 'power2.out' });
    },
    { scope, dependencies: [locale] }
  );

  const withQuery = (path: string) => {
    const q = searchParams.toString();
    return q ? `${path}?${q}` : path;
  };

  const nextLocale = locale === 'fa' ? 'en' : 'fa';

  const handleToggle = () => {
    if (!labelRef.current) {
      router.push(withQuery(pathname), { locale: nextLocale });
      return;
    }
    gsap.to(labelRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => {
        router.push(withQuery(pathname), { locale: nextLocale });
      },
    });
  };

  const currentLabel = locale === 'fa' ? t('language.fa') : t('language.en');

  return (
    <div ref={scope} className="overflow-hidden">
        <Button onClick={handleToggle} variant="outline" size="icon" className="relative rounded-full border-none bg-background/80 dark:bg-background/80 cursor-pointer hover:bg-background/50 dark:hover:bg-background/50 text-foreground" aria-label="Toggle language" title={`Lang: ${locale}`}>
          <span
            ref={labelRef}
            className="inline-flex items-center justify-center text-xs font-semibold select-none"
          >
            {locale === 'fa' ? 'FA' : 'EN'}
          </span>
          <span className="sr-only">{currentLabel}</span>
        </Button>
    </div>
  );
}
