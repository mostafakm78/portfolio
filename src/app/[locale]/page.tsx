import { StageProvider } from '@/components/Providers/StageProvider';
import MainSection from '@/components/templates/MainSection/MainSection';

export default function Home() {
  return (
    <main>
      <StageProvider>
        <MainSection />
      </StageProvider>
    </main>
  );
}
