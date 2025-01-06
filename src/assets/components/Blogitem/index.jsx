// eslint-disable-next-line no-unused-vars
import React from 'react'
import { IoMdTime } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";




const Blogitem = () => {
  return (
    <div className='blogitem group mb-20 border-2 border-[rgba(0,0,0,0.1)]'>
        <div className='imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative'>
            <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/psblog/b/lg-b-blog-6.jpg"
            className='w-full transition-all group-hover:scale-105 group-hover:rotate-1' alt="blog image" />

            <span className='flex items-center justify-center text-white absolute bottom-[15px] 
            right-[15px] z-50 bg-red-500 rounded-md p-1 text-[12px] font-[500] gap-2'>
               <IoMdTime className='text-[17px]'/> 23 December, 2024
            </span>
        </div>
        <div className='info py-4'>
            <h2 className='text-[16px] font-[600] text-black'>
                <Link to="/" className='hover:text-red-500'>Turips at eleifend Aenean porta</Link>
            </h2>
            <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry..</p>

            <Link to="/" className='hover:text-red-500 font-[400] flex items-center gap-1'>Read More <MdOutlineKeyboardArrowRight/></Link>
        </div>

    </div>
  )
}

export default Blogitem;