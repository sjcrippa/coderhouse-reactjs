import React from 'react'

const Navbar = () => {
    return (
        <nav className='container max-w-full font-sans text-xl font-bold pt-2'>
            <ul className='flex gap-7 justify-center text-slate-900'>
                <a 
                href="/" 
                className="hover:text-slate-50 hover:scale-125 duration-200">
                Home
                </a>
                <a 
                href="/" 
                className="hover:text-slate-50 hover:scale-125 duration-200">
                Products
                </a>
                <a 
                href="/" 
                className="hover:text-slate-50 hover:scale-125 duration-200">
                Contact
                </a>
            </ul>
        </nav>
    )
}

export default Navbar