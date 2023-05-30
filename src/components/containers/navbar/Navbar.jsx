import React from 'react';
import {AiOutlineMenu} from 'react-icons/ai'

import { pacoLogo } from '../../../assets';
import CartWidget from './CartWidget';
import NavItems from './NavItems';
const Navbar = () => {
    return (
        <>
            <div className='relative'>
                <nav className='flex items-center h-16 p-6 bg-white w-full'>
                    <a href="/">
                        <img
                            className='w-36 sm:min-w-36'
                            src={pacoLogo}
                            alt="logo"
                        />
                    </a>
                    <NavItems />
                    <CartWidget />
                    <button>
                        <AiOutlineMenu size={25} />
                    </button>
                </nav>
{/*                 <nav className='flex items-center h-16 p-6 bg-black text-white w-full'>
                    <a href="/">
                        <img
                            className='w-36 sm:min-w-36'
                            src={pacoLogo}
                            alt="logo"
                        />
                    </a>
                    <NavItems />
                    <CartWidget />
                    <button>
                        <AiOutlineMenu size={25} />
                    </button>
                </nav> */}
            </div>
        </>
    )
}

export default Navbar