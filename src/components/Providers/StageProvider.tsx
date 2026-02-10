'use client';

import { StageProps } from '@/types/Types';
import { useState, createContext, useContext, ReactNode } from 'react';

type StageContextValue = {
  stage: StageProps;
  setStage: React.Dispatch<React.SetStateAction<StageProps>>;
  lastIndex: boolean;
  setLastIndex: React.Dispatch<React.SetStateAction<boolean>>;
};

const StageContext = createContext<StageContextValue | undefined>(undefined);

export function StageProvider({ children }: { children: ReactNode }) {
  const [stage, setStage] = useState<StageProps>('HomePage');
  const [lastIndex, setLastIndex] = useState<boolean>(false);

  return <StageContext.Provider value={{ stage, setStage, lastIndex, setLastIndex }}>{children}</StageContext.Provider>;
}

export function useStage() {
  const ctx = useContext(StageContext);
  if (!ctx) {
    throw new Error('useStage must be used within a StageProvider');
  }
  return ctx;
}
