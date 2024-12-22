// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarWithDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownItems = [
    { name: 'Laptops', path: '/electronics/laptops' },
    { name: 'Mobile Phones', path: '/electronics/mobiles' },
    { name: 'Cameras', path: '/electronics/cameras' },
    { name: 'Televisions', path: '/electronics/televisions' },
  ];

  return (
    <nav className="relative">
      <ul className="flex space-x-4">
        <li className="list-none relative">
          {/* Main Link */}
          <span
            className="link transition hover:text-red-500 text-[17px] cursor-pointer"
            onClick={toggleDropdown}
          >
            Electronic
          </span>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <ul className="absolute left-0 mt-2 w-[200px] bg-white shadow-lg rounded-md">
              {dropdownItems.map((item, index) => (
                <li key={index} className="border-b last:border-none">
                  <Link
                    to={item.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-red-500 transition"
                    onClick={() => setIsDropdownOpen(false)} // Close dropdown after clicking
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavbarWithDropdown;
