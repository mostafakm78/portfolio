'use client';

import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const scope = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useGSAP(
    () => {
      if (!iconRef.current) return;
      gsap.fromTo(iconRef.current, { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.25, ease: 'power2.out' });
    },
    { scope, dependencies: [theme] }
  );

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const getNextTheme = (t?: string) => {
    if (t === 'system') return 'light';
    if (t === 'light') return 'dark';
    return 'system';
  };

  const toggleTheme = () => {
    const next = getNextTheme(theme);
    if (!iconRef.current) {
      setTheme(next);
      return;
    }
    gsap.to(iconRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => setTheme(next),
    });
  };

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-[1.2rem] w-[1.2rem]" />;
      case 'dark':
        return <Moon className="h-[1.2rem] w-[1.2rem]" />;
      default:
        return <Laptop className="h-[1.2rem] w-[1.2rem]" />;
    }
  };

  return (
    <div ref={scope} className="inline-flex overflow-hidden">
      <Button onClick={toggleTheme} variant="outline" size="icon" className="relative rounded-full border-none bg-background/80 dark:bg-background/80 cursor-pointer hover:bg-background/50 dark:hover:bg-background/50 text-foreground" aria-label="Toggle theme" title={`Theme: ${theme}`}>
        <span ref={iconRef} className="inline-flex">
          {getIcon()}
        </span>
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
