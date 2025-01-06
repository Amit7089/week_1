import 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import { IoMdCart } from "react-icons/io"; 
import Badge from '@mui/material/Badge'; 
import IconButton from '@mui/material/IconButton'; 
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';

const Header = () => {
  const cartCount = 5; // Example cart count, you can replace it with a state or prop

  return (
    <header className='bg-white'>
      <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px] ">
        <div className="container">
          <div className="flex item-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-[400]">Get up to 50% off new season styles, limited time only</p>
            </div>
            <div className="col2 flex item-center justify-end">
              <ul className="flex item-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[400] text-gray-600 hover:text-blue-500 transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[400] text-gray-600 hover:text-blue-500 transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-gray-250 border-b-[1px]">
        <div className="container flex item-center justify-between">
          <div className="col1 gap-2 flex w-[25%]">
            <Link to="/">
              <img src="/public/Logo/logo2.png" alt="Logo" />
            </Link>
            <h2 className="text-[27px] font-[400]">Electronic</h2>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[30%] flex mt-1 ml-4 justify-end">
            <ul className="flex gap-3">
              <li className="list-none">
                <Link to="/login" className="link transition hover:text-red-500 text-[17px]">
                  Login 
                </Link>
                /&nbsp;
                <Link to="/register" className="link transition hover:text-red-500 text-[15px]">
                  Register
                </Link>
              </li>
              <li className="list-none">
                {/* Cart Icon with Badge */}
                <Tooltip title="Wishlist">
                    <IconButton aria-label="cart">
                    <Badge badgeContent={cartCount} color="secondary">
                    <FaRegHeart size={24}/>
                    </Badge>
                    </IconButton>
                  </Tooltip> 
              </li>

              <li className="list-none">
                {/* Cart Icon with Badge */}
                <Tooltip title="Cart">
                    <IconButton aria-label="cart">
                    <Badge badgeContent={cartCount} color="secondary">
                        <IoMdCart size={24} />
                    </Badge>
                    </IconButton>
                </Tooltip>    
              </li>
              
            </ul>
          </div>
        </div>
      </div>

      <Navigation/>
    </header>
  );
};

export default Header;
