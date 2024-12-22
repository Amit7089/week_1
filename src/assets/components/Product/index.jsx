// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Product = () => {
  // State to manage the active tab
  const [value, setValue] = useState(0);

  // Handler for tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section>
      <div className="container bg-white mt-8 p-4">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="left-Sec">
            <h2 className="text-[22px] font-[600]">Popular Products</h2>
            <p className="text-[16px] font-[400]">
              Do not miss the current offer until the end of March.
            </p>
          </div>

          {/* Right Section */}
          <div className="right-Sec w-[60%]">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="LED Lighting"/>
              <Tab label="Electric Heaters"/>
              <Tab label="Home Appliances"/>
              <Tab label="Electric Motors" />
              <Tab label="Ceiling Fans"/>
              <Tab label="Smart Bulbs"/>
              <Tab label="Switches & Sockets"/>
              <Tab label="Cables & Wires"/>
              <Tab label="Fans & Coolers"/>
              <Tab label="Kitchen Appliances"/>
              <Tab label="Smart Home Devices"/>
              <Tab label="Electrical Tools"/>
           
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
