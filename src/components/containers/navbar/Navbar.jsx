import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

import { logoDos, pacoLogo } from '../../../assets';
import CartWidget from './CartWidget';
import NavItems from './NavItems';
import '../../../App.css';

const Navbar = () => {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu)
  };

  const handleBdrop = () => {
    !menu && setMenu(false)
  };

  return (
    <>
      <div className='relative z-10'>
        <div className={menu ? 'left-[-100%]' : 'absolute top-0 left-0 w-full h-[1990vh]  bg-black/50 z-0 md:hidden'}>
        </div>
        <nav
          className='fixed flex justify-between items-center h-16 p-6 bg-white bg-clip-padding w-full'>
          <Link to={"/"}>
            <img
              className='hidden md:block w-36 sm:min-w-36'
              src={pacoLogo}
              alt="logo"
            />
          </Link>
          <NavItems />
          <div
            onClick={handleMenu}
            className='flex items-center -translate-x-32 p-1 text-black md:hidden'>
            {!menu
              ?
              <div>
                <button className='z-10'>
                  <AiOutlineClose size={30} />
                </button>
              </div>
              :
              <button
                onClick={handleBdrop}
                className='z-10'>
                <AiOutlineMenu size={30} />
              </button>
            }
          </div>
          <CartWidget />
        </nav>

        <nav className={!menu ? 'fixed mt-16 left-0 w-[40%] bg-white  h-full ease-in-out duration-700 md:hidden z-10' : 'fixed left-[-100%]'} >
          <ul className='uppercase flex flex-col'>
            <Link
              to={"/productos/him"}
              className="nav-btn p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-slate-800 w-36">
              FOR HIM
            </Link>
            <Link
              to={"/productos/her"}
              className="nav-btn p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-slate-800 w-36">
              FOR HER
            </Link>
            <Link
              to={"/productos"}
              className="nav-btn p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-slate-800 w-36">
              ALL
            </Link>
            <Link
              to={'/'}
            >
              <img
                className='w-32 ml-2'
                src={logoDos}
                alt="logo" />
            </Link>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar