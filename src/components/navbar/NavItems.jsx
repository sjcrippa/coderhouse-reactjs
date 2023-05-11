import React from 'react'

const NavItems = () => {
    return (
        <>
            
            <ul className='text-white flex xl:flex-row xl:gap-5 p-4 md:p-0 items-center'>
                    <a
                        href="/"
                        className="block py-2 pl-3 pr-4 md:bg-transparent md:p-0 hover:scale-110 duration-200">
                        Home
                    </a>
                    <a
                        href="/"
                        className="block py-2 pl-3 pr-4 md:bg-transparent md:p-0 hover:scale-110 duration-200">
                        Products
                    </a>
                    <a
                        href="/"
                        className="block py-2 pl-3 pr-4 md:bg-transparent md:p-0 hover:scale-110 duration-200">
                        Contact
                    </a>
                </ul>
        </>
    )
}

export default NavItems