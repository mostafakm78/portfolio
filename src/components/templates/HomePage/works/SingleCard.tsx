import { Pagination, EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import Image from 'next/image';

export default function SingleCard() {
  return (
    <>
      <Swiper
        modules={[Pagination, EffectCards]}
        effect="cards"
        spaceBetween={50}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        rewind={true}
        className="w-10/12"
      >
        <SwiperSlide>
          <Image
            className="rounded-lg"
            src="/images/projects/1/Screenshot 2025-02-01 180909.png"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            src="/images/projects/1/Screenshot 2025-02-01 180937.png"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="rounded-lg"
            src="/images/projects/1/Screenshot 2025-02-01 180947.png"
            alt=""
            width={500}
            height={500}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
