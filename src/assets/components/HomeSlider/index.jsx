// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="../../../../public/Logo/heroSection/electrical-banner.jpg"
            alt="Banner Slider"
            className="w-full h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../public/Logo/heroSection/friz.jpg"
            alt=""
            className="w-full h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../public/Logo/heroSection/fan.jpg"
            alt=""
            className="w-full h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../public/Logo/heroSection/img4.jpg"
            alt=""
            className="w-full h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../public/Logo/heroSection/img5.png"
            alt=""
            className="w-full h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../public/Logo/heroSection/img6.jpg"
            alt=""
            className="w-full h-[450px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="../../../../public/Logo/heroSection/img7.avif"
            alt=""
            className="w-full h-[450px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeSlider;
