import { SocialType } from '@/types/Types';
import Link from 'next/link';
import { JSX } from 'react';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa';

const ICONS: Record<SocialType, JSX.Element> = {
  telegram: <FaTelegram />,
  github: <FaGithub />,
  linkedin: <FaLinkedin />,
};

const SocialButton = ({ name, link }: { name: SocialType; link: string }) => {
  return (
    <Link href={link} target="_blank" className="text-3xl hover:opacity-80 duration-300 text-foreground">
      {ICONS[name]}
    </Link>
  );
};

export default SocialButton;
