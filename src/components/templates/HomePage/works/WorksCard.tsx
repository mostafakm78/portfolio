'use client';

import { Button, Link, Tooltip } from '@heroui/react';
import SingleCard from './SingleCard';
import { VscTools } from 'react-icons/vsc';
import { BsGithub } from 'react-icons/bs';

export default function WorksCard() {
  return (
    <div className=" rounded-lg lg:max-w-lg w-full mb-6 flex flex-col justify-center items-start p-2">
      <SingleCard />
      <div className="border-[1px] w-full opacity-50 rounded-lg mt-6 bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      <div className="flex justify-around w-full h-full items-center">
        <div>
          <h3 className="text-black text-xl dark:text-white mb-2">
            نمونه سایت
          </h3>
          <Tooltip
            closeDelay={1000}
            className="bg-back dark:bg-fore text-fore dark:text-back rounded-md"
            placement="bottom"
            content="React - Next - JavaScript - TailWind"
          >
            <Button className="text-back dark:text-fore">
              ابزارها
              <VscTools />
            </Button>
          </Tooltip>
        </div>
        <div className="border-[1px] h-16 opacity-30 rounded-lg my-4 bg-back dark:bg-fore border-back dark:border-fore w-[1px]"></div>
        <Link
          href="https://github.com/mostafakm78"
          className="mt-3 text-black text-lg dark:text-white cursor-pointer"
          target="_blank"
        >
          مشاهده در GitHub
          <BsGithub className="mr-2 text-xl mb-1" />
        </Link>
      </div>
    </div>
  );
}
