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

  return (
    <>
      <div className='relative z-10'>
        <div className={menu ? 'left-[-100%]' : 'absolute top-0 left-0 w-full h-[1990vh]  bg-black/50 z-0 md:hidden'}>
        </div>
        <nav className='fixed flex items-center justify-center h-16 p-6 bg-white w-full'>
          <Link to={"/"}>
            <img
              className='hidden md:inline w-96'
              src={pacoLogo}
              alt="logo"
            />
          </Link>
          <NavItems />
          <div
            onClick={() => setMenu(!menu)}
            className='flex items-center p-1 text-black md:hidden'>
            {menu ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
          </div>
          <div className='w-full flex justify-end'>
            <CartWidget />
          </div>
        </nav>

        <nav className=
          {`flex sm:items-center sm:px-4 sm:static sm:gap-3 text-light text-sm bg-white px-5 mt-2 z-10 h-screen fixed top-12 transition-color duration-700 ease-in sm:hidden
          ${menu ? '-left-[100%]' : 'fixed left-0 shadow-lg shadow-dark'}
          `}>
          <ul className='uppercase flex flex-col'>
            <Link
              to={"/home"}
              className="nav-btn p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-slate-800 w-36">
              home
            </Link>
            <Link
              to={"/productos/him"}
              className="nav-btn p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-slate-800 w-36">
              for him
            </Link>
            <Link
              to={"/productos/her"}
              className="nav-btn p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-slate-800 w-36">
              for her
            </Link>
            <Link
              to={"/productos"}
              className="nav-btn p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-slate-800 w-36">
              all
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