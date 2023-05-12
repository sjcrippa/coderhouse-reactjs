import React from 'react';

import { pacoLogo } from '../assets';
import MenuHamb from '../containers/MenuHamb';
import NavItems from './NavItems';
import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <>
            <div className='relative'>
                <nav className='flex mx-auto items-center text-lg font-bold h-16 p-6 bg-white'>
                    <a href="/">
                        <img
                            className='w-36 h-6 transition ease-in-out hover:scale-110 duration-200'
                            src={pacoLogo}
                            alt="logo"
                        />
                    </a>
                    <NavItems />
                    <CartWidget />
                    <MenuHamb />
                </nav>
            </div>
        </>
    )
}

export default Navbar