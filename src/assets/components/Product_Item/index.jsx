// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

const Product_item = () => {
  return (
    <div className='productItem  '>
      <div className='imgWrapper w-[100%] h-[200px] overflow-hidden'>
        <img src="https://rukminim2.flixcart.com/image/612/612/xif0q/bulb/v/i/3/-original-imah5f2ejq2ujfsk.jpeg?q=70" alt="bulb"
        className='w-full' />
        
      </div>
      <div className='info p-3'>
        <h6 className=' text-[13px] font-[600]  '><Link to="/" className='hover:text-red-500'>Energy-Efficient LED Bulb</Link></h6>
        <h3 className='text-[14px]  mt-2 font-[300] text-[rgba(0,0,0,0.9)]'>
        <Link to="/" className='hover:text-red-500'>Illuminate your space with the cutting-edge [Brand Name] LED bulb.</Link></h3>
      </div>
     
    </div>
  )
}

export default Product_item;
