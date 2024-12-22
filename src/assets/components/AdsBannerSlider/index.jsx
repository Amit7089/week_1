/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full AdsSlider">
      <Swiper
        slidesPerView={props.items}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerBox
            img={'../../../../public/Logo/AdsBanner/Ads1.jpg'}
            link={'/'}
            className="slider-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={'../../../../public/Logo/AdsBanner/Ads2.jpg'}
            link={'/'}
            className="slider-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={'../../../../public/Logo/AdsBanner/Ads3.webp'}
            link={'/'}
            className="slider-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={'../../../../public/Logo/AdsBanner/Ads4.webp'}
            link={'/'}
            className="slider-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={'../../../../public/Logo/AdsBanner/Ads5.png'}
            link={'/'}
            className="slider-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerBox
            img={'../../../../public/Logo/AdsBanner/Ads6.jpg'}
            link={'/'}
            className="slider-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
