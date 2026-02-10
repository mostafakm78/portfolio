import { Tech, TechnologiesProps } from '@/types/Types';
import Image from 'next/image';

const Technologies = ({ technologies }: TechnologiesProps) => {
  return (
    <>
      {technologies.map((tech: Tech, index: number) => {
        return (
          <div key={index} className="bg-muted px-2 py-1.5 3xl:px-4 3xl:py-2 rounded-[15px] border border-foreground dark:border-gray-800 flex items-center justify-center gap-1">
            <Image className="w-auto h-4 3xl:h-5" src={tech.logo} alt={tech.name} width={200} height={200} />
            <span className="text-[11px] 3xl:text-sm mt-1 font-medium text-foreground dark:text-background">{tech.name}</span>
          </div>
        );
      })}
    </>
  );
};

export default Technologies;
