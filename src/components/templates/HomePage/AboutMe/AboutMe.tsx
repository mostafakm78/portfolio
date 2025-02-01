
import Image from 'next/image';
import MoreAboutMe from './MoreAboutMe';
import React from 'react';

const apps = [
  { key: 'tailwind', src: '/images/tailwind-css-icon.png', name: 'TailWind' },
  { key: 'Css', src: '/images/css-icon.png', name: 'Css' },
  { key: 'Figma', src: '/images/figma-icon.png', name: 'Figma' },
  { key: 'Html', src: '/images/html-icon.png', name: 'Html' },
  {
    key: 'JavaScript',
    src: '/images/javascript-programming-language-icon.png',
    name: 'JavaScript',
  },
  {
    key: 'TypeScript',
    src: '/images/typescript-programming-language-icon.png',
    name: 'TypeScript',
  },
  { key: 'Next', src: '/images/nextjs-icon.png', name: 'Next Js' },
  { key: 'Redux', src: '/images/redux-icon.png', name: 'Redux' },
  { key: 'Sass', src: '/images/sass-icon.png', name: 'Sass' },
  {
    key: 'VSCode',
    src: '/images/visual-studio-code-icon.png',
    name: 'VS Code',
  },
  { key: 'HeroUI', src: '/images/isotipo.png', name: 'HeroUI' },
  { key: 'WebPack', src: '/images/webpack-icon.png', name: 'WebPack' },
];

interface App {
  key: string;
  src: string;
  name: string;
}

export default function AboutMe() {
  return (
    <div
      id="about-me"
      className="flex flex-col px-10 justify-center items-center"
    >
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="lg:text-4xl text-2xl mt-4 text-back dark:text-fore">
          درباره من
        </span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="mt-10 mb-5 lg:mb-0 lg:w-8/12 w-full">
        <span className="text-back dark:text-fore">
          من متولد پنج اسفند ١٣٧٨ هستم و در رشته کامپیوتر تحصیل کردم. عاشق کار
          های گرافیکی مثل UI و طراحی سایت هستم و دوست دارم هرچیزی به ذهنم میاد
          رو خودم بتونم با کد بوجود بیارم. دنبال یاد گرفتن بیشتر هستم و دوست
          دارم تجربه های بیشتر کسب کنم و چالش های مختلفی رو حل کنم تا بتونم به
          مهارت خودم اضافه کنم و دانش خودم رو ارتقا بدم.
        </span>
      </div>
      <MoreAboutMe />
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="lg:text-4xl text-2xl mt-4 text-back dark:text-fore">
          مهارت ها
        </span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="mt-10 grid lg:grid-cols-6 grid-cols-3 px-10 gap-8 justify-center items-center">
        {apps.map((app: App) => (
          <div
            key={app.key}
            className="flex flex-col justify-center items-center rounded-xl shadow-md bg-back dark:bg-fore p-3"
          >
            <Image
              className="w-24"
              width={800}
              height={800}
              alt={app.name}
              src={app.src}
            />
            <span className="font-sans text-fore dark:text-back font-bold">
              {app.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
