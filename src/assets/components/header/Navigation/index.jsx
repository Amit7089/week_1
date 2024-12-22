/* eslint-disable no-unused-vars */
import React from 'react'
import { RiMenu2Fill } from "react-icons/ri";
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { VscAccount } from "react-icons/vsc";
import CategoryDrawer from './categoriesPanel';
import NavbarWithDropdown from './Electronic DropDown';





const Navigation = () => {
  return (
    <nav>
        <div className='container flex items-center justify-start py-2'>
            <div className='col_1 w-[25%] '>
           <CategoryDrawer/>
            </div>
            <div className='col_2 w-[60%] '>
                <ul className='flex items-center gap-8'>
                    <li className='list-none'>
                        <Link to="/" className='link transition hover:text-red-500 text-[17px] '>Home</Link>                 
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition hover:text-red-500 text-[17px]'>Shop</Link>                 
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition hover:text-red-500 text-[17px]'> <NavbarWithDropdown/></Link>                 
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition hover:text-red-500 text-[17px]'>About Us</Link>                 
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition hover:text-red-500 text-[17px]'>Service</Link>                 
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition hover:text-red-500 text-[17px]'>Contact</Link>                 
                    </li>
                    <li className='list-none'>
                        <Link to="/" className='link transition hover:text-red-500 text-[17px]'>Support</Link>                 
                    </li>
                </ul>
            </div>
            
            <div className='col_3 w-'></div>
            <Button className='!text-black gap-5 ' >
                <VscAccount className='text-[20px]'/>
                   My Account
                  
                </Button>

           

        </div>
    </nav>
  )
}

export default Navigation


