import React from 'react'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <nav className='flex mx-auto justify-center font-[Verdana] text-lg font-bold pt-2'>
            <ul className='text-slate-900 flex gap-5'>
                <a 
                href="/" 
                className="hover:text-slate-50 hover:scale-110 duration-200">
                Home
                </a>
                <a 
                href="/" 
                className="hover:text-slate-50 hover:scale-110 duration-200">
                Products
                </a>
                <a 
                href="/" 
                className="hover:text-slate-50 hover:scale-110 duration-200">
                Contact
                </a>
                <CartWidget />
            </ul>
        </nav>
    )
}

export default Navbar