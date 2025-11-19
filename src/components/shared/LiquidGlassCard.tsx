'use client';
import React, { useId } from 'react';

interface LiquidGlassBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  distortionScale?: number;
  noiseFrequency?: number;
  blur?: number;
}

export default function LiquidGlassBackground({ children, className = '', style = {}, distortionScale = 85, noiseFrequency = 0.012, blur = 2 }: LiquidGlassBackgroundProps) {
  const id = useId();
  const filterId = `glass-distortion-${id}`;

  return (
    <div className={['relative isolate overflow-hidden', 'rounded-2xl', className].join(' ')} style={style}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id={filterId} x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency={`${noiseFrequency} ${noiseFrequency}`} numOctaves={2} seed={92} result="noise" />
            <feGaussianBlur in="noise" stdDeviation={blur} result="blurred" />
            <feDisplacementMap in="SourceGraphic" in2="blurred" scale={distortionScale} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <div
        className="absolute inset-0 z-0 pointer-events-none rounded-2xl"
        style={{
          boxShadow: 'inset 0 0 20px -8px rgba(255,255,255,0.3)',
          backgroundColor: 'rgba(255,255,255,0)',
        }}
      />

      <div
        className="absolute inset-0 -z-10 pointer-events-none rounded-2xl"
        style={{
          backdropFilter: 'blur(0px)',
          WebkitBackdropFilter: 'blur(0px)',
          filter: `url(#${filterId})`,
          WebkitFilter: `url(#${filterId})`,
          isolation: 'isolate',
        }}
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center text-white text-center">{children}</div>
    </div>
  );
}
