import React from 'react';

import { pacoLogo } from '../../../assets';
import CartWidget from './CartWidget';
import NavItems from './NavItems';
import BrandTitle from '../brand/BrandTitle';
import ItemListContainer from '../itemListContainer/ItemListContainer';
import '../../../App.css'

const Navbar = () => {
    return (
        <>
            <div className='navbar relative'>
                <nav className='flex items-center h-16 p-6 bg-white w-screen'>
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
                <div className=''>
                    <BrandTitle />
                </div>
            </div>
            <ItemListContainer />
        </>
    )
}

export default Navbar