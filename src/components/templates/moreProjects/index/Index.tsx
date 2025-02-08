'use client';

import { useRef, useEffect, useState, Suspense } from 'react';
import Projects from '@/data/projects';
import WorksCard from '../../HomePage/works/WorksCard';
import { FaSearch } from 'react-icons/fa';
import { ImSpinner8 } from 'react-icons/im';
import { useRouter, useSearchParams } from 'next/navigation';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [finalSearchTerm, setFinalSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const queryTerm = searchParams.get('q') || '';

  useEffect(() => {
    if (queryTerm) {
      setFinalSearchTerm(queryTerm);
      setSearchTerm(queryTerm);
    }
  }, [queryTerm]);

  const executeSearch = () => {
    if (!searchTerm.trim()) return;
    setLoading(true);
    setTimeout(() => {
      router.push(`?q=${encodeURIComponent(searchTerm)}`);
      setFinalSearchTerm(searchTerm);
      setLoading(false);
    }, 2000);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeSearch();
    }
  };

  const handleResetSearch = () => {
    setSearchTerm('');
    setFinalSearchTerm('');
    inputRef.current?.focus();
    router.push('/more-projects');
  };

  const filteredProjects = Projects.filter((project) =>
    project.tech.some((technology) =>
      technology.toLowerCase().includes(finalSearchTerm.toLowerCase())
    )
  );

  return (
    <div className={loading ? "flex flex-col px-10 justify-start items-center min-h-screen" : "flex flex-col px-10 justify-center items-center min-h-screen"}>
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="lg:text-4xl text-xl mt-4 text-back dark:text-fore">
          تمامی نمونه‌ها
        </span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]" />
      </div>

      <div className="relative w-full lg:w-2/3 mt-6">
        <input
          ref={inputRef}
          type="text"
          placeholder="برای جستجو اسم فریمورک یا تکنولوژی و روی دکمه سرچ یا اینتر بزنین ..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleInputKeyDown}
          className="w-full px-4 py-2 pr-10 placeholder:text-xs md:placeholder:text-sm lg:placeholder:text-base border-[1px] rounded-lg bg-back dark:bg-fore text-fore dark:text-back"
        />
        <FaSearch
          className="absolute right-3 top-3 text-fore dark:text-back cursor-pointer"
          onClick={executeSearch}
        />
      </div>

      {loading ? (
        <div className="flex items-center justify-center gap-4 lg:text-4xl text-2xl w-full">
          <p className="text-back dark:text-fore mt-10">در حال جستجو...</p>
          <ImSpinner8 className="animate-spin text-back dark:text-fore mt-10" />
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 lg:px-10 gap-8 justify-center items-center">
          {[...filteredProjects].reverse().map((project, index) => (
            <WorksCard key={index} {...project} />
          ))}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-1 lg:px-10 gap-8 justify-center items-center">
          <p className="text-back dark:text-fore mx-auto lg:text-5xl text-2xl mt-10">
            متاسفانه هیچ نتیجه‌ای پیدا نشد :(
          </p>
          <button
            className="text-back dark:text-fore hover:opacity-70 duration-300 hover:animate-bounce mx-auto lg:text-3xl text-xl mt-10"
            onClick={handleResetSearch}
          >
            میخوای یبار دیگه سرچ کنی؟
          </button>
        </div>
      )}

      <div className="my-16 text-white/70">
        <span className="opacity-60">
          تمامی حقوق محفوظ است. استفاده بدون اجازه ممنوع
        </span>
      </div>
    </div>
  );
};

export default function IndexMore() {
  return (
    <Suspense fallback={<div>در حال بارگذاری...</div>}>
      <SearchComponent />
    </Suspense>
  );
}
