import 'react'
import HomeSlider from '../../assets/components/HomeSlider';
import HomeCatSlider from '../../assets/components/HomeCatSlider';
import { FaShippingFast } from "react-icons/fa";
import AdsBanerSlider from '../../assets/components/AdsBannerSlider';
import Product from '../../assets/components/Product';
import ProductsSlider from '../../assets/components/ProductsSlider';


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
    </div>
  )
}

export default Home;
