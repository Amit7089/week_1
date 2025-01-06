
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import Product_item from '../Product_Item';


const ProductsSlider = () => {
  
  
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Product_item/></SwiperSlide>
        <SwiperSlide><Product_item/></SwiperSlide>
        <SwiperSlide><Product_item/></SwiperSlide>
        <SwiperSlide><Product_item/></SwiperSlide>
        <SwiperSlide><Product_item/></SwiperSlide>
        <SwiperSlide><Product_item/></SwiperSlide>
        
      </Swiper>
    );
  };
  
         




export default ProductsSlider;
