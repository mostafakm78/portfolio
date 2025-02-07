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
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-11/12 h-48 lg:h-72 flex items-center justify-center"
        effect="cards"
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
      >
        {photos.map((photo) => (
          <SwiperSlide key={Math.random()}>
            <Image
              className="lg:rounded-md"
              src={photo}
              alt=""
              width={1000}
              height={1000}
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
