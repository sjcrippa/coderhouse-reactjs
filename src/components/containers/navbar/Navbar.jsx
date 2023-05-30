import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

import { pacoLogo } from '../../../assets';
import CartWidget from './CartWidget';
import NavItems from './NavItems';

const Navbar = () => {
    const [menu, setMenu] = useState(true);

    const handleMenu = () => {
        setMenu(!menu)
    }

    return (
        <>
            <div className=''>
                <nav className='flex items-center h-16 p-6 bg-white w-full'>
                    <Link to={"/"}>
                        <img
                            className='w-36 sm:min-w-36'
                            src={pacoLogo}
                            alt="logo"
                        />
                    </Link>
                    <NavItems />
                    <div className='hidden md:flex'>
                        <CartWidget />
                    </div>
                    <div
                        onClick={handleMenu}
                        className='p-1 flex mx-auto text-black md:hidden'>
                        {!menu
                            ?
                            <button className=''>
                                <AiOutlineClose size={30} />
                            </button>
                            :
                            <button className=''>
                                <AiOutlineMenu size={30} />
                            </button>
                        }
                    </div>
                </nav>

                <nav className={!menu ? 'fixed left-0 top-0 w-[40%] bg-white h-full ease-in-out duration-500' : 'fixed left-[-100%]'} >
                    <ul className='uppercase flex flex-col'>
                        <Link
                            to={"/productos/him"}
                            className="p-4 pl-4 w-1/2 hover:text-white hover:bg-slate-900 duration-200 md:p-0 text-md md:text-base font-extralight border-b-2 border-black ">
                            FOR HIM
                        </Link>
                        <Link
                            to={"/productos/her"}
                            className="p-4 pl-4 w-1/2 hover:text-white hover:bg-slate-900 duration-200 md:p-0 text-md md:text-base font-extralight border-b-2 border-black ">
                            FOR HER
                        </Link>
                        <Link
                            to={"/productos"}
                            className="p-4 pl-4 w-1/2 hover:text-white hover:bg-slate-900 duration-200 md:p-0 text-md md:text-base font-extralight border-b-2 border-black ">
                            ALL
                        </Link>
                    </ul>
                    <div className='p-4 -mt-3'>
                        <CartWidget />
                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar