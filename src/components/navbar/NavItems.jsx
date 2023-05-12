import React from 'react'

const NavItems = () => {
    return (
        <>
            <div className='flex mx-auto'>
                <ul className='text-white p-4 md:p-0 items-center flex gap-5'>
                    <a
                        href="/"
                        className="py-2 pl-3 pr-4 md:bg-transparent md:p-0 hover:scale-110 duration-200">
                        Home
                    </a>
                    <a
                        href="/"
                        className="py-2 pl-3 pr-4 md:bg-transparent md:p-0 hover:scale-110 duration-200">
                        Products
                    </a>
                    <a
                        href="/"
                        className="py-2 pl-3 pr-4 md:bg-transparent md:p-0 hover:scale-110 duration-200">
                        Contact
                    </a>
                </ul>
            </div>
        </>
    )
}

export default NavItems