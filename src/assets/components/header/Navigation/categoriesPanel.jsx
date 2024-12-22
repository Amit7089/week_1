// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Drawer, Button, List, ListItem, IconButton, Collapse } from '@mui/material';
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const CategoryDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState(null); // Track expanded categories
  const navigate = useNavigate();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  const handleExpand = (index) => {
    setExpanded(expanded === index ? null : index); // Toggle expand/collapse
  };

  const categories = [
    {
      name: 'Lighting',
      path: '/lighting',
      subcategories: [
        { name: 'LED Bulbs', path: '/lighting/led-bulbs' },
        { name: 'Tube Lights', path: '/lighting/tube-lights' },
        { name: 'Ceiling Lights', path: '/lighting/ceiling-lights' }
      ],
    },
    {
      name: 'Wiring & Cables',
      path: '/wiring-cables',
      subcategories: [
        { name: 'Copper Wires', path: '/wiring-cables/copper-wires' },
        { name: 'Flexible Cables', path: '/wiring-cables/flexible-cables' },
        { name: 'Coaxial Cables', path: '/wiring-cables/coaxial-cables' }
      ],
    },
    {
      name: 'Switches & Sockets',
      path: '/switches-sockets',
      subcategories: [
        { name: 'Modular Switches', path: '/switches-sockets/modular-switches' },
        { name: 'Electrical Sockets', path: '/switches-sockets/electrical-sockets' },
        { name: 'Switch Panels', path: '/switches-sockets/switch-panels' }
      ],
    },
    {
      name: 'Appliances',
      path: '/appliances',
      subcategories: [
        { name: 'Heaters', path: '/appliances/heaters' },
        { name: 'Air Conditioners', path: '/appliances/air-conditioners' },
        { name: 'Water Purifiers', path: '/appliances/water-purifiers' }
      ],
    },
    {
      name: 'Tools & Hardware',
      path: '/tools-hardware',
      subcategories: [
        { name: 'Drills', path: '/tools-hardware/drills' },
        { name: 'Hammers', path: '/tools-hardware/hammers' },
        { name: 'Screwdrivers', path: '/tools-hardware/screwdrivers' }
      ],
    },
    {
      name: 'Smart Devices',
      path: '/smart-devices',
      subcategories: [
        { name: 'Smart Lights', path: '/smart-devices/smart-lights' },
        { name: 'Thermostats', path: '/smart-devices/thermostats' },
        { name: 'Smart Plugs', path: '/smart-devices/smart-plugs' }
      ],
    },
    {
      name: 'Fans & Coolers',
      path: '/fans',
      subcategories: [
        { name: 'Ceiling Fans', path: '/fans/ceiling-fans' },
        { name: 'Table Fans', path: '/fans/table-fans' },
        { name: 'Air Coolers', path: '/fans/air-coolers' }
      ],
    },
  ];

  return (
    <div>
      <Button onClick={toggleDrawer(true)} className="!text-black gap-5 cursor-pointer">
        <RiMenu2Fill />
        Shop By Categories
        <FaAngleDown />
      </Button>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
        <div className="w-[250px] relative">
          {/* Close Icon */}
          <IconButton
            className="absolute top-2 left-2 cursor-pointer"
            onClick={toggleDrawer(false)}
            aria-label="close"
          >
            <IoMdClose size={24} />
          </IconButton>

          {/* Drawer Title */}
          <div className="text-center font-semibold text-lg py-4 border-b cursor-pointer">
            Shop by Categories
          </div>

          {/* Category List */}
          <List>
            {categories.map((category, index) => (
              <div key={index}>
                <ListItem
                  button
                  onClick={() => handleExpand(index)}
                  className="flex justify-between items-center hover:bg-gray-100 p-2 cursor-pointer"
                >
                  <span>{category.name}</span>
                  {expanded === index ? (
                    <AiOutlineMinus className="ml-4 text-gray-600" />
                  ) : (
                    <AiOutlinePlus className="ml-4 text-gray-600" />
                  )}
                </ListItem>

                {/* Subcategories */}
                <Collapse in={expanded === index} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {category.subcategories.map((subcategory, subIndex) => (
                      <ListItem
                        key={subIndex}
                        button
                        onClick={() => {
                          setIsOpen(false); // Close drawer
                          navigate(subcategory.path); // Navigate to the subcategory page
                        }}
                        className="pl-8 hover:bg-gray-50 p-2 text-sm text-gray-500 cursor-pointer"
                        style={{
                          marginLeft: '16px', // Clear indentation
                          borderLeft: '2px solid #ddd', // Subtle indicator
                          backgroundColor: 'transparent', // Keep button appearance minimal
                        }}
                      >
                        {subcategory.name}
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default CategoryDrawer;
