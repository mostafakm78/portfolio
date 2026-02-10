'use client';

import { Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef, useState } from 'react';

gsap.registerPlugin(useGSAP);

export function ThemeToggle() {
  // Current theme + setter (light / dark / system)
  const { theme, setTheme } = useTheme();

  // GSAP animation scope and icon reference
  const scope = useRef<HTMLDivElement | null>(null);
  const iconRef = useRef<HTMLSpanElement | null>(null);

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);

  useGSAP(
    () => {
      // Animate icon when theme changes
      if (!iconRef.current) return;

      gsap.fromTo(iconRef.current, { x: 20, opacity: 0 }, { x: 0, opacity: 1, duration: 0.25, ease: 'power2.out' });
    },
    { scope, dependencies: [theme] }
  );

  // Ensure component renders only on client
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Determine the next theme in the cycle
  const getNextTheme = (t?: string) => {
    if (t === 'system') return 'light';
    if (t === 'light') return 'dark';
    return 'system';
  };

  const toggleTheme = () => {
    const next = getNextTheme(theme);

    // Fallback: switch theme without animation
    if (!iconRef.current) {
      setTheme(next);
      return;
    }

    // Animate icon out, then apply new theme
    gsap.to(iconRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.2,
      ease: 'power2.in',
      onComplete: () => setTheme(next),
    });
  };

  // Select icon based on active theme
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
    // Wrapper used as GSAP scope
    <div ref={scope} className="inline-flex overflow-hidden">
      <Button onClick={toggleTheme} variant="outline" className="relative border-none md:h-9 md:w-9 h-5 w-5 p-3.5 rounded-full shadow-none bg-primary text-foreground dark:text-background cursor-pointer hover:bg-primary/80" aria-label="Toggle theme" title={`Theme: ${theme}`}>
        {/* Animated theme icon */}
        <span ref={iconRef} className="inline-flex">
          {getIcon()}
        </span>

        {/* Accessibility-only text */}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
