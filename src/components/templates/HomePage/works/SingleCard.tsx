import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import Image from 'next/image';

interface photo {
  photos: string[];
}

export default function SingleCard({ photos }: photo) {
  return (
    <>
      <Swiper
        modules={[EffectCards]}
        effect="cards"
        spaceBetween={50}
        slidesPerView={1}
        rewind={true}
        className="w-11/12"
      >
        {photos.map((photo) => (
          <SwiperSlide key={Math.random()}>
            <Image
              className="rounded-lg"
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
