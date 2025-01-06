import 'react'
import HomeSlider from '../../assets/components/HomeSlider';
import HomeCatSlider from '../../assets/components/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdsBanerSlider from '../../assets/components/AdsBannerSlider';
import Product from '../../assets/components/Product';
import ProductsSlider from '../../assets/components/ProductsSlider';




import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';
import Blogitem from '../../assets/components/Blogitem';


const Home = () => {
  return (
    <div>
      <HomeSlider/>
      <HomeCatSlider/>
      
     
      <section className='py-5 bg-white'>
        <Product/>
        <ProductsSlider items={5}/>


        <div className='container '>
          <div className='freeshiping mt-10 w-full py-4 p-5 border-2 border-[#ff5252] flex items-center justify-between rounded-md mb-7'>
            <div className='col1 flex items-center gap-4 '>
            <FaShippingFast  className='text-[50px]'/>
            <span className='text-[24px] font-[600] uppercase'>Free Shipping</span>

            </div>

            <div className='col2'>
              <p className='mb-0 font-[500]'>Free Delivery Now On Your First Order and over $200</p>
            </div>

            <div className='col3'>
             <p className='font-bold text-[23px]'>-Only $200</p>
            </div>

          </div>
        </div>

        <AdsBanerSlider items={4}/>

        
       

      </section >  

      <section className='py-4 bg-white'>
      <h3 className='text-[25px] font-[450] mb-3'>Latest Product</h3>
        <div className='containe'> 
        <ProductsSlider items={5}/>
        
        </div>
        <div className='Ads py-5 '>
        <AdsBanerSlider items={3}/>

        </div>
      </section>

      <section className='py-4 bg-white'>
      <h3 className='text-[25px] font-[500] mb-3'>Featured Products</h3>
        <div className='containe'> 
        <ProductsSlider items={5}/>
        
        </div>
        
      </section>

      <section className='py-5 bg-white blogSection'>
        <div className='containe ml-4'>
          <h2 className='text-[20px] font-[600] mb-5'>From The Blog</h2>
           <Swiper
                  slidesPerView={4} 
                  spaceBetween={30} 
                  navigation={true} 
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Blogitem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Blogitem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Blogitem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Blogitem/>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Blogitem/>
                  </SwiperSlide>
                </Swiper>

        </div>

      </section>

    

     
    </div>
  )
}

export default Home;
