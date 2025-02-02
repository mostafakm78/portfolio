
import NavbarComponentMoreProjects from '@/components/templates/moreProjects/header/NavbarProjects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'صفحه پروژه ها',
  description: 'my personal portfolio website',
  icons: '',
};

export default function MoreProjects() {
  return <NavbarComponentMoreProjects />;
}
