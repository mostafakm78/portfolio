import WorksCard from "../../HomePage/works/WorksCard";

export default function IndexMore() {
  return (
    <div className="flex flex-col px-10 justify-center items-center min-h-screen">
      <div className="flex bg-fore w-full gap-10 justify-center items-center mt-5 dark:bg-back">
        <span className="lg:text-4xl text-2xl mt-4 text-back dark:text-fore">
          تمامی نمونه ها
        </span>
        <div className="lg:w-2/3 w-2/4 border-[1px] opacity-50 rounded-lg bg-back dark:bg-fore border-back dark:border-fore h-[1px]"></div>
      </div>
      <div className="mt-10 grid lg:grid-cols-2 grid-cols-1 lg:px-10 gap-8 justify-center items-center">
        <WorksCard />
        <WorksCard />
        <WorksCard />
        <WorksCard />
        <WorksCard />
        <WorksCard />
        <WorksCard />
        <WorksCard />
      </div>
      <div className="my-16 text-white/70">
        <span className="opacity-60">
          تمامی حقوق محفوظ است. استفاده بدون اجازه ممنوع
        </span>
      </div>
    </div>
  );
}
