import React from 'react';

import { logo } from '../assets';
import MenuHamb from '../containers/MenuHamb';
import NavItems from './NavItems';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <>
            <nav className=' flex flex-wrap items-center font-[Verdana] text-lg font-bold pt-2 p-4'>
                <a href="/">
                    <img
                        className='w-16 h-16 transition ease-in-out hover:scale-110 duration-200 p-1'
                        src={logo}
                        alt="logo"
                    />
                </a>
                <NavItems />
                <CartWidget />
                <MenuHamb />
            </nav>
        </>
    )
}

export default Navbar