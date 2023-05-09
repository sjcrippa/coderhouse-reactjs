import React from 'react'

import CartWidget from './CartWidget'
import { logo } from '../assets'

const Navbar = () => {
    return (
        <>
            <nav className='container mx-auto flex mx-full font-[Verdana] text-lg font-bold pt-2'>
                <a href="/">
                    <img
                        className='w-16 h-16 transition ease-in-out hover:scale-110 duration-200 p-1'
                        src={logo}
                        alt="logo"
                    />
                </a>
                <ul className='text-white flex mx-auto gap-5'>
                    <a
                        href="/"
                        className="hover:scale-110 duration-200">
                        Home
                    </a>
                    <a
                        href="/"
                        className="hover:scale-110 duration-200">
                        Products
                    </a>
                    <a
                        href="/"
                        className="hover:scale-110 duration-200">
                        Contact
                    </a>
                </ul>
                <CartWidget />
            </nav>
        </>
    )
}

export default Navbar