// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './index.css'
import {Collapse} from 'react-collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { FaAngleUp } from "react-icons/fa6";




const Sidebar = () => {

  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailbleFilter, setIsOpenAvailbleFilter] = useState(true);



  return (
    <div className='sidebar'>
        <div className='box'>
            <h3 className='mb-3 text-[18px] font-[500] flex items-center '>Shop by Category
            <Button className='!w-[30px] h-[30px] !min-w-[30px] !rounded-full !ml-auto' onClick={()=>setIsOpenCategoryFilter(!isOpenCategoryFilter)}>

              {
                isOpenCategoryFilter === true ?  <FaAngleUp/> : <FaAngleDown /> 
              }
              

            </Button></h3>
            <Collapse isOpened={ isOpenCategoryFilter}>
           
            <div className='scroll px-3 relative -left-[10px]'>
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Lighting" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Fans & Coolers" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Smart Devices" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Outdoor Electricals" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Tools & Hardware" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Switches & Sockets" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Wiring & Cables" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Heating & Cooling"  className='w-full'/>

            </div>
            </Collapse>

            
        </div>

        <div className='box mt-5'>

          
            <h3 className='mb-3 text-[18px] font-[500] flex items-center '>Availblity
            <Button className='!w-[30px] h-[30px] !min-w-[30px] !rounded-full !ml-auto' onClick={()=>setIsOpenAvailbleFilter(!isOpenAvailbleFilter)}>

              {
                isOpenAvailbleFilter === true ?  <FaAngleUp/> : <FaAngleDown /> 
              }
              

            </Button></h3>
            <Collapse isOpened={ isOpenAvailbleFilter}>
           
            <div className='scroll px-3 relative -left-[10px]'>
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Available (17)" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="In Stock (10)" className='w-full' />
              <FormControlLabel control={<Checkbox size="small" defaultChecked />} label="Not available (8)" className='w-full' />
              

            </div>
            </Collapse>

            
        </div>
    </div>
  )
}

export default Sidebar