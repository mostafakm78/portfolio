import SliderMenu from './SliderMenu';

export default function Slider() {
  return (
    <>
      <div className="max-w-80 rounded-l-md bg-white/90 hidden lg:block dark:bg-white/70 sticky right-0 h-full min-h-screen"></div>
      <div className="block lg:hidden mr-6 cursor-pointer mt-6">
        <SliderMenu />
      </div>
    </>
  );
}
