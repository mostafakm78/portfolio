'use client';

import { Button, Link, Tooltip } from '@heroui/react';
import SingleCard from './SingleCard';
import { VscTools } from 'react-icons/vsc';
import { BsEye, BsGithub } from 'react-icons/bs';

interface projects {
  name: string;
  src: string;
  photos: string[];
  tech: string[];
  link?: string;
}

export default function WorksCard({ src, photos, tech, name, link }: projects) {
  return (
    <div className=" rounded-lg bg-back dark:bg-fore min-h-[420px] lg:max-w-lg w-full mb-6 flex flex-col justify-center items-start p-4 shadow-md">
      <SingleCard photos={photos} />

      <div className="flex justify-around p-6 w-full h-full mt-4 items-center">
        <div>
          <h3 className="text-white text-base mb-2">{name}</h3>
          {link && (
            <Link
              href={link}
              className="ml-3 text-fore dark:text-back animate-appearance-in text-base cursor-pointer"
              target="_blank"
            >
              مشاهده
              <BsEye className="mr-1 text-xl mb-1" />
            </Link>
          )}
          <Tooltip
            closeDelay={1000}
            className="text-white max-w-80 dark:text-black rounded-md"
            placement="bottom"
            classNames={{
              content: 'bg-black dark:bg-white',
            }}
            content={tech.join(' - ')}
          >
            <Button className="text-fore bg-back dark:bg-fore cursor-help dark:text-back p-0 text-base">
              تکنولوژی ها
              <VscTools />
            </Button>
          </Tooltip>
        </div>
        <Link
          href={src}
          className="mt-3 text-white text-base cursor-pointer"
          target="_blank"
        >
          مشاهده در GitHub
          <BsGithub className="mr-1 text-xl mb-1" />
        </Link>
      </div>
    </div>
  );
}
