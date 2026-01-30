import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Button } from '../ui/button';

const GlowButton = ({ children }: { children: React.ReactNode }) => {
  // Reference to the animated glow layer
  const glowRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    // Animate glow from bottom-right to top-left in a loop
    gsap.fromTo(
      glowRef.current,
      {
        x: '120%', // start outside (right)
        y: '120%', // start outside (bottom)
        opacity: 0,
      },
      {
        x: '-120%', // exit outside (left)
        y: '-120%', // exit outside (top)
        opacity: 1,
        duration: 0.8, // animation duration
        ease: 'power2.out',
        repeat: -1, // infinite loop
        repeatDelay: 2, // delay between runs (seconds)
      }
    );
  }, []);

  return (
    // Button must be relative + overflow-hidden to clip the glow
    <Button className="relative overflow-hidden w-1/2 rounded-[30px]">
      {/* Glow layer */}
      <span
        ref={glowRef}
        className="
          pointer-events-none
          absolute -inset-1
          rounded-full
          bg-[linear-gradient(45deg,transparent,rgba(255,255,255,0.7),transparent)]
          blur-md"
      />

      {/* Button content */}
      <span className="relative z-10 font-medium">{children}</span>
    </Button>
  );
};

export default GlowButton;
