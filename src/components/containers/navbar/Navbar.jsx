import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

import { pacoLogo } from '../../../assets';
import CartWidget from './CartWidget';
import NavItems from './NavItems';

const Navbar = () => {
    const [menu, setMenu] = useState(true);
    const [bdrop, setBdrop] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
    };

    const handleBdrop = () => {
/*         if (!setMenu) {
            setBdrop(false)
        } else {
            console.log('no funciona');
        } */
        !setMenu ? setBdrop(true) : setBdrop(false);
    }

    return (
        <>
            <div className='relative'>
                <div className='absolute top-0 left-0 w-full h-screen bg-black/50 z-0'>
                    {bdrop}
                </div>
                <nav className='flex items-center h-16 p-6 bg-white w-full'>
                    <Link to={"/"}>
                        <img
                            className='w-36 sm:min-w-36'
                            src={pacoLogo}
                            alt="logo"
                        />
                    </Link>
                    <NavItems />
                    <div
                        onClick={handleMenu} 
                        className='p-1 flex mx-auto text-black md:hidden'>
                        {!menu
                            ?
                            <button className='z-10'>
                                <AiOutlineClose size={30} />
                            </button>
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
                
                <nav className={!menu ? 'fixed left-0 top-0 w-[40%] bg-white h-full border-r-2 border-black/20 ease-in-out duration-500 backdrop-opacity-50	' : 'fixed left-[-100%]'} >
                    <ul className='uppercase flex flex-col'>
                        <Link
                            to={"/productos/him"}
                            className="p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-black ">
                            FOR HIM
                        </Link>
                        <Link
                            to={"/productos/her"}
                            className="p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-black ">
                            FOR HER
                        </Link>
                        <Link
                            to={"/productos"}
                            className="p-4 pl-4 hover:text-white hover:bg-slate-900 duration-300 md:p-0 text-md md:text-base font-extralight border-b-2 border-black ">
                            ALL
                        </Link>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar