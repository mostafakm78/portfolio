'use client';
import { Image, Link } from '@heroui/react';

export default function HomeHeader() {
  return (
    <div className="bg-fore dark:bg-back p-10 md:justify-center md:items-center md:gap-40 gap-20 flex flex-col md:flex-row w-full">
      <div className="md:w-1/2 w-full flex justify-center">
        <div className="bg-back rounded-3xl shadow-lg dark:bg-fore">
          <Image
            isZoomed
            loading="lazy"
            alt="My Prodfile"
            src="/images/PhotoIphone.png"
            width={400}
            height={500}
          />
        </div>
      </div>
      <div className="flex flex-col md:w-1/2 w-full text-center items-center justify-center">
        <span className="text-back dark:text-fore text-2xl">
          سلام ،‌ من مصطفی هستم
        </span>
        <span className="text-back dark:text-fore xl:text-8xl text-6xl font-sans font-extrabold xl:w-3/4 w-full">
          Front-end Developer
        </span>
        <Link className="text-back dark:text-fore text-2xl mt-3 border-b-2 pb-1 border-b-back dark:border-b-fore" href="/">
          تماس با من
        </Link>
      </div>
    </div>
  );
}
