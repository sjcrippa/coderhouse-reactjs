import React from 'react';

import { pacoLogo } from '../../../assets';
import CartWidget from './CartWidget';
import NavItems from './NavItems';
import '../../../App.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <nav className='flex items-center h-16 p-6 bg-white'>
                    <a href="/">
                        <img
                            className='w-36 sm:min-w-36'
                            src={pacoLogo}
                            alt="logo"
                        />
                    </a>
                    <NavItems />
                    <CartWidget />
                </nav>
            </div>
        </>
    )
}

export default Navbar