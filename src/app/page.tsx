import NavbarComponent from '@/components/templates/HomePage/header/Navbar';
import AboutMe from '@/components/templates/HomePage/AboutMe/AboutMe';
import Contact from '@/components/templates/HomePage/contact/Contact';
import HomeHeader from '@/components/templates/HomePage/header/HomeHeader';
import Works from '@/components/templates/HomePage/works/Works';
import type { Metadata } from 'next';
import FadeInSection from '../components/common/FadeInSection';

export const metadata: Metadata = {
  title: 'Welcome to my Portfolio :)',
  description: 'my personal portfolio website',
  icons: '/images/PhotoIphone.png',
};

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <HomeHeader />
      <FadeInSection>
        <AboutMe />
      </FadeInSection>
      <FadeInSection>
        <Works />
      </FadeInSection>
      <FadeInSection>
        <Contact />
      </FadeInSection>
    </>
  );
}
