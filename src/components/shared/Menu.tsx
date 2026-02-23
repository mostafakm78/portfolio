'use client';

import { useLocale } from 'next-intl';
import { useEffect, useRef } from 'react';
import { useStage } from '../Providers/StageProvider';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import type { StageProps } from '@/types/Types';

type MenuItem = {
  value: StageProps;
  labelFa: string;
  labelEn: string;
};

const Menu: React.FC = () => {
  const { stage, setStage } = useStage();
  const locale = useLocale();

  const items: MenuItem[] = [
    { value: 'HomePage' as StageProps, labelFa: 'صفحه اصلی', labelEn: 'HomePage' },
    { value: 'AboutMe' as StageProps, labelFa: 'درباره من', labelEn: 'About Me' },
    { value: 'Projects' as StageProps, labelFa: 'پروژه‌ها', labelEn: 'Projects' },
    { value: 'ContactMe' as StageProps, labelFa: 'ارتباط با من', labelEn: 'Contact Me' },
  ];

  const activeIndex = Math.max(
    0,
    items.findIndex((i) => i.value === stage)
  );

  const ulRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLLabelElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const updateLine = () => {
    const ulEl = ulRef.current;
    const activeEl = itemRefs.current[activeIndex];
    const lineEl = lineRef.current;

    if (!ulEl || !activeEl || !lineEl) return;

    const ulRect = ulEl.getBoundingClientRect();
    const btnRect = activeEl.getBoundingClientRect();

    lineEl.style.width = `${btnRect.width + 20}px`;
    lineEl.style.left = `${btnRect.left - ulRect.left - 10}px`;
  };

  useEffect(() => {
    const raf = requestAnimationFrame(updateLine);
    window.addEventListener('resize', updateLine);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', updateLine);
    };
  }, [activeIndex, locale]);

  return (
    <RadioGroup
      defaultValue="HomePage"
      value={stage as string}
      onValueChange={(v) => setStage(v as StageProps)}
      ref={ulRef}
      className={`relative flex h-full lg:w-1/2 md:w-2/3 w-3/4 text-foreground dark:text-background items-center justify-around rounded-[30px] rounded-b-none bg-primary md:px-10 px-5 ${locale === 'fa' ? 'flex-row-reverse' : ''}`}
    >
      {items.map((item, index) => (
        <div key={String(item.value)}>
          <RadioGroupItem id={`menu-${String(item.value)}`} value={String(item.value)} className="sr-only" />
          <Label
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            htmlFor={`menu-${String(item.value)}`}
            className={`cursor-pointer py-2 hover:opacity-80 duration-300 md:text-lg  ${locale === 'fa' ? 'font-bold text-sm' : 'font-medium text-[12px]'}`}
          >
            {locale === 'fa' ? item.labelFa : item.labelEn}
          </Label>
        </div>
      ))}

      <div ref={lineRef} className="absolute bottom-0.5 md:h-1 h-0.5 bg-foreground dark:bg-background transition-all duration-300" />
    </RadioGroup>
  );
};

export default Menu;
