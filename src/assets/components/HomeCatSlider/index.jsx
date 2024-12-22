// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

const HomeCatSlider = () => {
  const sliderItems = [
    { id: 1, name: 'Smart Bulb', image: 'https://static2.bigstockphoto.com/9/5/3/large1500/359767951.jpg', link: '/' },
    { id: 2, name: 'Smart Remote', image:  'https://th.bing.com/th/id/OIP.lnFF3qESw_aW-GCsyQAsWgHaHc?w=1020&h=1025&rs=1&pid=ImgDetMain', link: '/' },
    { id: 3, name: 'Smart Cable', image: 'https://img1.exportersindia.com/product_images/bc-full/2020/2/3012862/electrical-wiring-accessories-1582806395-1074558.jpeg', link: '/' },
    { id: 4, name: 'Smart Switch', image: 'https://th.bing.com/th/id/OIP.lt6ERZZEIfuU4l1nS_CA4wHaGs?rs=1&pid=ImgDetMain', link: '/' },
    { id: 5, name: 'Smart Friz', image: 'https://in2english.net/wp-content/uploads/2020/04/electrical-applainces-at-home.jpg', link: '/' },
    { id: 6, name: 'Smart Tools', image: 'https://m.media-amazon.com/images/I/81qFn0Z5kEL._AC_UL960_QL65_.jpg', link: '/' },
    { id: 7, name: 'Smart Sound', image: 'https://th.bing.com/th/id/OIP.xEd1JSaO7INHxL9A9PGqbgHaFN?rs=1&pid=ImgDetMain', link: '/' },
    { id: 8, name: 'Smart Plug', image: 'https://th.bing.com/th/id/OIP.j97tG94GQQXXcQkivorDDQHaHa?rs=1&pid=ImgDetMain', link: '/' },
    { id: 9, name: 'Smart TV', image: 'https://th.bing.com/th/id/OIP.1VYYXtWB7VwH_zGUuLJIdQHaFz?rs=1&pid=ImgDetMain', link: '/' },
    { id: 10, name: 'Smart EarPhone', image: 'https://i5.walmartimages.com/asr/01f45e55-1e7d-4b2c-9983-abd6499b8e68_1.42b65de79c231959bc7711ac356b69fb.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff', link: '/' },
  ];

  return (
    <div className='homeSlider py-8 pt-4'>
      <Swiper
        slidesPerView={5} 
        spaceBetween={30} 
        navigation={true} 
        modules={[Navigation]}
        className="mySwiper"
      >
        {sliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <Link to={item.link}>
              <div
                className="item mt-4 p-2 bg-white rounded-sm text-center flex items-center justify-center flex-col transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-35 h-32 object-cover rounded- mb-2"
                />
                <h3 className="text-[15px] font-[500] text-gray-800 hover:text-white">{item.name}</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCatSlider;
