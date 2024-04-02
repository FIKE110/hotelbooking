import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import React from 'react';

const Slider=({children}:{children:React.ReactNode[]}) => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
       children.map(child=>(
        <SwiperSlide>{child}</SwiperSlide>
       ))
      }
    </Swiper>
  );
};

export default Slider