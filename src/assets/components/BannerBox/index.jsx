/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom';

const BannerBox = (props) => {
  return (
    <div className='box bannerBox overflow-hidden rounded-lg group'>
        <Link to="/">
            <img src={props.img} alt="banner" className='w-full h-[200px] group-hover:scale-105 group-hover:rotate-1' />
        </Link>

   </div>
  )
}

export default BannerBox;
