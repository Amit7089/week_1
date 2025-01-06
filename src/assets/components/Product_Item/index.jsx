// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import { BsCurrencyRupee } from "react-icons/bs";
import Button from '@mui/material/Button';
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";

import './ProductItem.css'; // Ensure the CSS file exists.

const Product_item = () => {
  return (
    <div className="productItem border-2 group relative">
      <div className="imgWrapper w-[100%] h-[200px] overflow-hidden relative">
        <img 
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/bulb/v/i/3/-original-imah5f2ejq2ujfsk.jpeg?q=70" 
          alt="bulb"
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-red-500 text-white rounded-lg p-1 text-[12px] font-[500]">14%</span>

        <div className="actions absolute top-[-50px] right-[5px] z-50 flex flex-col items-center gap-2 transition-all duration-300 ease-in-out group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button
            className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white/80 text-black shadow-lg hover:!bg-blue-500 hover:text-white group"
          >
            <MdZoomOutMap className="text-[18px] text-black " />
          </Button>
          <Button
            className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-white/80 text-black shadow-lg hover:!bg-blue-500 hover:text-white group"
          >
            <FaRegHeart className="text-[18px] text-black " />
          </Button>
        </div>
      </div>

      <div className="info p-3 bg-[#f1f1f1]">
        <h6 className="text-[13px] font-[600]">
          <Link to="/" className="hover:text-red-500">Energy-Efficient LED Bulb</Link>
        </h6>
        <h3 className="text-[12px] mt-2 font-[300] text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="hover:text-red-500">Illuminate your space with the cutting-edge LED bulb.</Link>
        </h3>
        <Rating name="size-medium" defaultValue={2} readOnly />
        <div className="flex items-center gap-3 mt-3">
          <span className="oldPrice flex items-center gap-1 line-through text-gray-500">
            <BsCurrencyRupee />
            120
          </span>
          <span className="newPrice flex items-center gap-1 text-red-600 font-bold">
            <BsCurrencyRupee />
            100
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product_item;
