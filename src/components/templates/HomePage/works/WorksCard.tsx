'use client';

import { Button, Link, Tooltip } from '@heroui/react';
import SingleCard from './SingleCard';
import { VscTools } from 'react-icons/vsc';
import { BsGithub } from 'react-icons/bs';

export default function WorksCard() {
  return (
    <div className=" rounded-lg bg-back dark:bg-fore lg:max-w-lg w-full mb-6 flex flex-col justify-center items-start p-4 shadow-md">
      <SingleCard />

      <div className="flex justify-around w-full h-full mt-4 items-center">
        <div>
          <h3 className="text-white text-lg  mb-2">نمونه سایت</h3>
          <Tooltip
            closeDelay={1000}
            className="text-white dark:text-black rounded-md"
            placement="bottom"
            classNames={{
              content: 'bg-black dark:bg-white',
            }}
            content="React - Next - JavaScript - TailWind"
          >
            <Button className="text-fore bg-back dark:bg-fore cursor-help dark:text-back p-0 text-base">
              تکنولوژی ها
              <VscTools />
            </Button>
          </Tooltip>
        </div>
        <Link
          href="https://github.com/mostafakm78"
          className="mt-3 text-white text-lg cursor-pointer"
          target="_blank"
        >
          مشاهده در GitHub
          <BsGithub className="mr-2 text-xl mb-1" />
        </Link>
      </div>
    </div>
  );
}
