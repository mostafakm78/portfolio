'use client';

import { Button, Link, Tooltip } from '@heroui/react';
import SingleCard from './SingleCard';
import { VscTools } from 'react-icons/vsc';
import { BsEye, BsGithub } from 'react-icons/bs';
import WorksModal from './WorksModal';

interface projects {
  name: string;
  src: string;
  photos: string[];
  tech: string[];
  link?: string;
}

export default function WorksCard({ src, photos, tech, name, link }: projects) {
  return (
    <div className=" rounded-lg bg-back dark:bg-fore lg:max-w-lg w-full mb-6 flex flex-col justify-center items-start py-2 shadow-md">
      <SingleCard photos={photos} />

      <div className="flex flex-col justify-around px-6 py-2 w-full h-full items-center">
        <h3 className="text-white text-base mb-2">{name}</h3>
        <div className="flex flex-row w-full justify-around">
          {link && (
            <Link
              href={link}
              className="text-fore dark:text-back animate-appearance-in text-base cursor-pointer"
              target="_blank"
            >
              مشاهده
              <BsEye className="mr-1 text-xl mb-1" />
            </Link>
          )}
          <Tooltip
            closeDelay={1000}
            className="text-white max-w-80 hidden lg:block dark:text-black rounded-md"
            placement="bottom"
            classNames={{
              content: 'bg-black dark:bg-white',
            }}
            content={tech.join(' - ')}
          >
            <Button className="text-fore hidden lg:block bg-back dark:bg-fore cursor-help dark:text-back p-0 text-base">
              تکنولوژی ها
              <VscTools />
            </Button>
          </Tooltip>
          <WorksModal tech={tech} />
        </div>
        <Link
          href={src}
          className="text-white text-base cursor-pointer"
          target="_blank"
        >
          مشاهده در GitHub
          <BsGithub className="mr-1 text-xl mb-1" />
        </Link>
      </div>
    </div>
  );
}
