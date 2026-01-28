import { useLocale } from 'next-intl';
import { useEffect, useMemo, useRef, useState } from 'react';

const itemsFa = ['صفحه اصلی', 'درباره من', 'پروژه‌ها', 'ارتباط با من'] as const;
const itemsEn = ['HomePage', 'About Me', 'Projects', 'Contact Me'] as const;

const Menu: React.FC = () => {
  const locale = useLocale();

  const [activeIndex, setActiveIndex] = useState(0);

  const ulRef = useRef<HTMLUListElement | null>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const items = useMemo(() => (locale === 'fa' ? itemsFa : itemsEn), [locale]);

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
    updateLine();

    window.addEventListener('resize', updateLine);
    return () => window.removeEventListener('resize', updateLine);
  }, [activeIndex, locale]);

  useEffect(() => {
    if (activeIndex >= items.length) setActiveIndex(0);

    itemRefs.current = [];
  }, [items.length, activeIndex]);

  return (
    <ul ref={ulRef} className={`relative flex h-full text-lg w-1/2 text-foreground dark:text-background items-center justify-around rounded-[30px] rounded-b-none bg-primary px-10 ${locale === 'fa' ? 'font-bold' : 'font-medium'}`}>
      {items.map((item, index) => (
        <li key={item}>
          <button
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onClick={() => setActiveIndex(index)}
            className="cursor-pointer py-2"
            type="button"
          >
            {item}
          </button>
        </li>
      ))}
      <div ref={lineRef} className="absolute bottom-0.5 h-1 bg-foreground dark:bg-background transition-all duration-300" />
    </ul>
  );
};

export default Menu;
