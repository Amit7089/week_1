// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../Search/style.css'
import Button from '@mui/material/Button';
import { IoMdSearch } from "react-icons/io";


const Search = () => {
  return (
    <div className='searchBox w-[100%] h-[40px] bg-[#e5e5e5] rounded-[5px] relative p-1'>
        <input type="text" placeholder='Search for Product...' className='w-full h-[35px] focus:outline-none bg-inherit p-2'/>
        <Button className="!absolute top-[5px] right-[5px] z-[50] !w-[35px] !min-w-[35px] h-[35px]
        !rounded-full !text-black ">
            <IoMdSearch className='text-[#2a2a2a] text-[22px]'/>
        </Button>
        

    </div>
  )
}

export default Search;