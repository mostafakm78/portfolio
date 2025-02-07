'use client';

import { Link } from '@heroui/react';
import { BsEye, BsGithub } from 'react-icons/bs';
import WorksModal from './WorksModal';
import Image from 'next/image';
import PhotoModal from './PhotoModal';

interface projects {
  name: string;
  src: string;
  photos: string[];
  tech: string[];
  link?: string;
}

export default function WorksCard({ src, photos, tech, name, link }: projects) {
  return (
    <div className=" rounded-lg bg-back dark:bg-fore min-h-[450px] lg:max-w-lg w-full mb-6 flex flex-col justify-center items-start py-2 shadow-md">
      <div className="p-4">
        <Image
          src={photos[0]}
          width={1000}
          height={1000}
          alt=""
          className="shadow-md rounded-md"
        />
      </div>
      <div className="flex flex-col justify-around px-6 py-2 w-full h-full items-center">
        <h3 className="text-white text-xl mb-2">{name}</h3>
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
          <WorksModal tech={tech} />
        </div>
        <PhotoModal photos={photos} />
        <Link
          href={src}
          className="rounded-md bg-transparent hover:opacity-85 duration-300 text-fore dark:text-back p-2 cursor-pointer"
          target="_blank"
        >
          مشاهده در GitHub
          <BsGithub className="mr-1 text-xl mb-1" />
        </Link>
      </div>
    </div>
  );
}
