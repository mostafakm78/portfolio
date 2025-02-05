import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col px-10 justify-center items-center min-h-screen">
      <div className="flex flex-col bg-fore w-full justify-center items-center mt-5 dark:bg-back">
        <span className="text-[150px] animate-appearance-in mt-4 text-back dark:text-fore">
          404
        </span>
        <span className="text-5xl animate-appearance-in text-back dark:text-fore">
          مشکلی پیش اومده!
        </span>
      </div>
      <div className="text-back dark:text-fore flex flex-col mt-16 justify-center items-center">
        <span className="text-2xl animate-appearance-in mb-10">
          متاسفانه همچین صفحه ای پیدا نشد :(
        </span>
        <Link className="animate-pulse text-whit" href="/">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
}
