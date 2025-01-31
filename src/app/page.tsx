import NavbarComponent from '@/components/shared/navbar/Navbar';
import AboutMe from '@/components/templates/HomePage/AboutMe/AboutMe';
import HomeHeader from '@/components/templates/HomePage/header/HomeHeader';

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeHeader />
      <AboutMe />
    </>
  );
}
