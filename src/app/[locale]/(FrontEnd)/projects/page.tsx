import ProjectsPage from '@/components/templates/Projects/ProjectsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works',
  description: 'my personal portfolio website',
  icons: '/images/PhotoIphone.png',
};

export default async function MoreProjects() {

  return <ProjectsPage />;
}
