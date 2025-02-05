import NavbarComponentCompact from '@/components/templates/moreProjects/header/NavbarCompact';
import IndexMore from '@/components/templates/moreProjects/index/Index';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'صفحه پروژه ها',
  description: 'my personal portfolio website',
  icons: '',
};

export default function MoreProjects() {
  return (
    <>
      <NavbarComponentCompact />
      <IndexMore />
    </>
  );
}
