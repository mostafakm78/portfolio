import Slider from '@/components/templates/dashboard/slider/Slider';
import NavbarComponentCompact from '@/components/templates/moreProjects/header/NavbarCompact';

export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen">
        <NavbarComponentCompact />
        <Slider />
      </div>
    </>
  );
}
