import Link from 'next/link';
import WorksCard from './WorksCard';
import Projects from '@/data/projects.json';

export default function Works() {
  return (
    <div className="flex flex-col px-10 justify-center items-center">
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="lg:text-4xl text-2xl mt-4 text-back dark:text-fore">
          نمونه ها
        </span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="mt-10 mb-5 lg:mb-0 lg:w-8/12 w-full">
        <span className="text-back dark:text-fore">
          تمام نمونه کارهای من به صورت پیش نمایش میتونین از اینجا ببینین و برای
          سورس کد پروژه ها میتونین به لینک گیتهاب هر کدوم مراجعه کنین.
        </span>
      </div>
      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 lg:px-10 gap-8 justify-center items-center">
        {Projects.projects.slice(-2).map((project) => (
          <WorksCard key={Math.random()} {...project} />
        ))}
      </div>
      <Link
        className="rounded-md hover:opacity-85 duration-300 bg-back text-fore dark:bg-fore dark:text-back px-4 py-2"
        href="/more-projects"
      >
        تمامی نمونه ها
      </Link>
    </div>
  );
}
