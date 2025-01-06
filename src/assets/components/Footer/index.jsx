/* eslint-disable no-unused-vars */
import React from 'react'
import { MdOutlineLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { BsWallet2 } from "react-icons/bs";
import { BsGift } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <>
     <div className='py-6'>

        <div className='containe  '>
            <div className='flex items-center justify-center gap-2 npy-8 pb-8'>
                <div className='col1 flex items-center justify-center flex-col group w-[15%]'>
                    <MdOutlineLocalShipping className='text-[40px] trasition-all duration-30
                    group-hover:text-primary group-hover:translate-y-1'/>
                    <h3 className='text-[16px] font-[500] mt-3 '>Free Shipping</h3>
                    <p className='text-[12px] font-[400] mb-10 '>For all Orders Over $100</p>
                </div>
                <div className='col1 flex items-center justify-center flex-col group w-[15%]'>
                    < GiReturnArrow className='text-[40px] trasition-all duration-30
                    group-hover:text-primary group-hover:translate-y-1'/>
                    <h3 className='text-[16px] font-[500] mt-3 '>30 Days Returns</h3>
                    <p className='text-[12px] font-[400] mb-10'>For an Exchange Product</p>
                </div>
                <div className='col1 flex items-center justify-center flex-col group w-[15%]'>
                    <BsWallet2 className='text-[40px] trasition-all duration-30
                    group-hover:text-primary group-hover:translate-y-1'/>
                    <h3 className='text-[16px] font-[500] mt-3 '>Secured Payment</h3>
                    <p className='text-[12px] font-[400] mb-10 '>Payment Cards Accepted</p>
                </div>
                <div className='col1 flex items-center justify-center flex-col group w-[15%]'>
                    <BsGift className='text-[40px] trasition-all duration-30
                    group-hover:text-primary group-hover:translate-y-1'/>
                    <h3 className='text-[16px] font-[500] mt-3 '>Special Gifts</h3>
                    <p className='text-[12px] font-[400] mb-10'>Our Product Order</p>
                </div>
                <div className='col1 flex items-center justify-center flex-col group w-[15%]'>
                    <BiSupport className='text-[40px] trasition-all duration-30
                    group-hover:text-primary group-hover:translate-y-1'/>
                    <h3 className='text-[16px] font-[500] mt-3 '>Support 24/7</h3>
                    <p className='text-[12px] font-[400] mb-10'>Contact us Anytime</p>
                </div>
                
                
            </div>
            <hr />

            <div className='footer flex  p-6 py-8'>
                <div className='part-1 w-[25%] border-r border-[rgba(0,0,0,0.2)]'>
                    <h2 className='text-[20px] font-[600] mb-4'>Contact Us</h2>
                    <p className='text-[14px] font-[400] pb-2'>Electricals Shop - Mega Supar <br />Store Bamitha ChhatarPur</p>
                    <Link  to="mailto:youremail@example.com" className='hover:text-primary'>Vishal@gmail.com</Link>
                    <span className='text-[20px] font-[500] block w-full mt-3 text-primary mb-5'>(+91) 8349665141</span>

                    <div className='flex items-center gap-2'>
                        <IoChatboxOutline className='text-[40px] text-primary'/>
                        <span className='text-[20px] font-[600]'>Online Chat <br />
                        Get Expert Help</span>

                    </div>
                </div>

                <div className='part-2 w-[40%] flex pl-5'>
                    <div className='part2_col1 w-[50%]'>
                        <h2 className='text-[20px] font-[600] mb-4'>Products</h2>

                        <ul className='list py-2 '>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Price drop</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">New Product</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Best Salces</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Contact Us</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Sitemap</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Stores</Link></li>
                        </ul>
                    </div>

                    <div className='part2_col1 w-[50%]'>
                        <h2 className='text-[20px] font-[600] mb-4'>Our Company</h2>

                        <ul className='list py-2 '>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Delivery</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Legal Notice</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Terms of Conditions Of Use</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">About us</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Secure Payment</Link></li>
                            <li className='list-none text-[15px] w-full mb-1 hover:text-primary  py-1'><Link to="/">Login</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='part-2 w-[35%] flex pl-5 flex-col'>
                    <h2 className='text-[25px] font-[500] mb-4'>Subscribe to newsletter</h2>
                    <p className='text-[17px]'>Subscribe to our letest newsletter ot get news about special discounts.</p>


                    <form action="" className='mt-5 '>
                        <input type="text" className='w-full h-[45px] border outline-none 
                        pl-4 pr-4 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)] ' placeholder='Your Email Address' />
                    </form>
                    <Button className='btn-org ' >SUBSCRIBE</Button>
                </div>

            </div>

        </div>

        </div>

      <div className='bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white'>
        <div className='container flex items-center justify-between'>
            <ul className='flex items-center gap-2'>
                <li className='list-none'>
                    <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full
                    border-[rgba(0,0,0,0.1)] flex items-center justify-center group 
                    hover:bg-primary transition-all'> <FaFacebookF className='text-[20px] group-hover:text-white'/></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full
                    border-[rgba(0,0,0,0.1)] flex items-center justify-center group 
                    hover:bg-primary transition-all'> <FaInstagram className='text-[20px] group-hover:text-white'/></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full
                    border-[rgba(0,0,0,0.1)] flex items-center justify-center group 
                    hover:bg-primary transition-all'> < FaYoutube className='text-[20px] group-hover:text-white'/></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full
                    border-[rgba(0,0,0,0.1)] flex items-center justify-center group 
                    hover:bg-primary transition-all'> <FaTwitter className='text-[20px] group-hover:text-white'/></Link>
                </li>
                <li className='list-none'>
                    <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full
                    border-[rgba(0,0,0,0.1)] flex items-center justify-center group 
                    hover:bg-primary transition-all'> <FaWhatsapp className='text-[20px] group-hover:text-white'/></Link>
                </li>
            </ul>

            <p className='flex items-center gap-2'>
                <FaRegCopyright />2025- Ecommmerce website
            </p>
        </div>
      </div>  
    </>
  )
}

export default Footer;