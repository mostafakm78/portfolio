'use client';

import { IoMdClose } from 'react-icons/io';
import { toast } from 'sonner';

type ToastArg = {
  message: string;
  bg?: string;
};

const useToast = () => {
  const showToast = ({ message, bg }: ToastArg) => {
    return toast.custom((t) => (
      <section className={`${bg ? bg : 'bg-secondary'} max-w-[360px] md:max-w-none font-medium text-foreground dark:text-background text-sm h-[50px] py-3 px-4 rounded-lg shadow-lg border border-background`} role="status" aria-live="polite" aria-atomic="true" aria-label="notification">
        <div className="flex h-full w-full items-center gap-2">
          <button
            onClick={() => toast.dismiss(t)}
            className="rounded text-foreground text-xl hover:text-foreground/50 dark:text-background dark:hover:text-background/50 duration-300 focus:text-foreground/50 dark:focus:text-background/50 cursor-pointer"
            aria-label="close notification"
            title="close notification"
          >
            <IoMdClose aria-hidden="true" />
          </button>
          <div className="font-semibold w-full">{message}</div>
        </div>
      </section>
    ));
  };

  return showToast;
};

export default useToast;
