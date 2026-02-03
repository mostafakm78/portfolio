export type SocialType = 'telegram' | 'github' | 'linkedin';

export type StageProps = 'HomePage' | 'AboutMe' | 'Projects' | 'ContactMe';

export type Tech = {
  name: string;
  logo: string;
};
export interface ProjectProps {
  id: string;
  name: { fa: string; en: string };
  src: string;
  photos: string[];
  techs: Tech[];
  desc: { fa: string; en: string };
  challenge: { fa: string[]; en: string[] };
  link?: string;
}

export type MoreInfoProjectProps = {
  challenges: { fa: string[]; en: string[] };
  description: { fa: string; en: string };
  technologies: Tech[];
};

export type TechnologiesProps = {
  technologies: Tech[];
};
