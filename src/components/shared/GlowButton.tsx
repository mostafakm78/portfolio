'use client';

import * as React from 'react';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(({ children, className, ...props }, ref) => {
  const glowRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!glowRef.current) return;

    gsap.fromTo(
      glowRef.current,
      { x: '120%', y: '120%', opacity: 0 },
      {
        x: '-120%',
        y: '-120%',
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        repeat: -1,
        repeatDelay: 2,
      }
    );
  }, []);

  return (
    <Button
      ref={ref}
      className={cn(
        // default styles (including default width)
        'relative overflow-hidden w-1/2 py-5 rounded-[30px]',
        // user overrides
        className
      )}
      {...props}
    >
      {/* Glow layer */}
      <span
        ref={glowRef}
        className="
            pointer-events-none
            absolute -inset-1
            rounded-full
            bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.7),transparent)]
            blur-md
          "
      />

      {/* Content */}
      <span className="relative z-10 font-medium">{children}</span>
    </Button>
  );
});

GlowButton.displayName = 'GlowButton';

export default GlowButton;
