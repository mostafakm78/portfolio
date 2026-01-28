import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa';
import { useState } from 'react';
import { FaCircleChevronLeft, FaCircleChevronRight } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

interface PhotoModalProps {
  photos: string[];
}

export function PhotosModal({ photos }: PhotoModalProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const t = useTranslations('Projects');

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-sm p-4 border-none md:w-auto w-full bg-linear bg-linear-180 from-foreground/20 to-background shadow-lg rounded-xl hover:from-foreground text-secondary hover:bg-transparent duration-300 transition-colors cursor-pointer">
          {t('photos')}
        </button>
      </DialogTrigger>
      <DialogContent className="w-10/12 bg-transparent h-10/12">
        <DialogHeader>
          <DialogTitle className='text-secondary/80'>{t('projectsphotos')}</DialogTitle>
        </DialogHeader>
        <FaCircleChevronLeft onClick={() => swiperInstance?.slidePrev()} className={`absolute left-10 top-1/2 -translate-y-1/2 cursor-pointer fill-secondary size-8 transition-opacity duration-300 z-50 ${isBeginning ? 'opacity-40 pointer-events-none' : 'opacity-100'}`} />
        <FaCircleChevronRight onClick={() => swiperInstance?.slideNext()} className={`absolute right-10 top-1/2 -translate-y-1/2 fill-secondary cursor-pointer size-8 transition-opacity duration-300 z-50 ${isEnd ? 'opacity-40 pointer-events-none' : 'opacity-100'}`} />
        <Swiper
          className="h-full w-full"
          spaceBetween={50}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onSwiper={setSwiperInstance}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {photos.map((photo, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <Image src={photo} quality={100} alt="photo" width={1000} height={1000} className="w-full h-full object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </DialogContent>
    </Dialog>
  );
}
