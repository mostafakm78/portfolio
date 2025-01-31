export default function AboutMe() {
  return (
    <div className="flex flex-col p-10 justify-center items-center">
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="lg:text-5xl text-3xl text-back dark:text-fore">درباره من</span>
        <div className="lg:w-2/3 w-2/4 border-2 bg-back dark:bg-fore border-back dark:border-fore h-1"></div>
      </div>
      <div className="mt-10 lg:w-8/12 w-full">
        <span>
          من متولد پنج اسفند ١٣٧٨ هستم و در رشته کامپیوتر تحصیل کردم. عاشق کار
          های گرافیکی مثل UI و طراحی سایت هستم و دوست دارم هرچیزی به ذهنم میاد
          رو خودم بتونم با کد بوجود بیارم. دنبال یاد گرفتن بیشتر هستم و دوست
          دارم تجربه های بیشتر کسب کنم و چالش های مختلفی رو حل کنم تا بتونم به
          مهارت خودم اضافه کنم و دانش خودم رو ارتقا بدم.
        </span>
      </div>
      <div className="mt-10"></div>
    </div>
  );
}
