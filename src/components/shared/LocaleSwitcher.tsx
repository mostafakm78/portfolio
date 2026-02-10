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
  // Current active locale (fa / en)
  const locale = useLocale();

  // Translations for accessibility labels
  const t = useTranslations('Common');

  // Routing helpers
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  // GSAP scope + animated label reference
  const scope = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      // Animate label when locale changes
      if (!labelRef.current) return;

      gsap.fromTo(labelRef.current, { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.25, ease: 'power2.out' });
    },
    { scope, dependencies: [locale] }
  );

  // Preserve existing query params when switching locale
  const withQuery = (path: string) => {
    const q = searchParams.toString();
    return q ? `${path}?${q}` : path;
  };

  // Determine the next locale
  const nextLocale = locale === 'fa' ? 'en' : 'fa';

  const handleToggle = () => {
    // Fallback: switch locale without animation
    if (!labelRef.current) {
      router.push(withQuery(pathname), { locale: nextLocale });
      return;
    }

    // Animate label out, then change locale
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

  // Screen-reader friendly label
  const currentLabel = locale === 'fa' ? t('language.fa') : t('language.en');

  return (
    // Wrapper used as GSAP animation scope
    <div ref={scope} className="overflow-hidden">
      <Button onClick={handleToggle} variant="outline" className="relative rounded-full border-none md:h-9 md:w-9 h-5 w-5 p-3.5 shadow-none bg-primary cursor-pointer hover:bg-primary/80 text-foreground dark:text-background" aria-label="Toggle language" title={`Lang: ${locale}`}>
        {/* Animated locale label */}
        <span ref={labelRef} className="inline-flex items-center justify-center text-xs font-semibold select-none">
          {locale === 'fa' ? 'EN' : 'Fa'}
        </span>

        {/* Accessibility-only text */}
        <span className="sr-only">{currentLabel}</span>
      </Button>
    </div>
  );
}
