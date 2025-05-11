import NavbarComponent from '@/components/templates/HomePage/header/Navbar';
import AboutMe from '@/components/templates/HomePage/AboutMe/AboutMe';
import Contact from '@/components/templates/HomePage/contact/Contact';
import HomeHeader from '@/components/templates/HomePage/header/HomeHeader';
import Works from '@/components/templates/HomePage/works/Works';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to my Portfolio :)',
  description: 'my personal portfolio website - mostafa kamari',
  icons: '/images/PhotoIphone.png',
};

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
