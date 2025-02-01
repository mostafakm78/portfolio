import NavbarComponent from '@/components/shared/navbar/Navbar';
import AboutMe from '@/components/templates/HomePage/AboutMe/AboutMe';
import Contact from '@/components/templates/HomePage/contact/Contact';
import HomeHeader from '@/components/templates/HomePage/header/HomeHeader';
import Works from '@/components/templates/HomePage/works/Works';

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeHeader />
      <AboutMe />
      <Works />
      <Contact />
    </>
  );
}
