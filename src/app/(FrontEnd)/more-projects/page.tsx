import NavbarComponentCompact from '@/components/templates/moreProjects/header/NavbarCompact';
import IndexMore from '@/components/templates/moreProjects/index/Index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works',
  description: 'my personal portfolio website',
  icons: '/images/PhotoIphone.png',
};

export default function MoreProjects() {
  return (
    <>
      <NavbarComponentCompact />
      <IndexMore />
    </>
  );
}
