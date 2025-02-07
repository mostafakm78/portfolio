import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Pagination } from 'swiper/modules';

interface photo {
  photos: string[];
}

export default function SingleCard({ photos }: photo) {
  return (
    <div className="w-full h-auto">
      <Swiper
        pagination
        modules={[Pagination]}
        className="w-full h-full"
        spaceBetween={50}
        slidesPerView={1}
        loop
      >
        {photos.map((photo) => (
          <SwiperSlide key={photo}>
            <div className="w-full h-[250px] lg:h-[500px] relative">
              <Image
                src={photo}
                alt="Slide image"
                layout="fill"
                objectFit="center"
                className="rounded-md"
                quality={100}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
