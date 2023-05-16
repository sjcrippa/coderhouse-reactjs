import React from 'react'

const NavItems = () => {
    return (
        <>
            <div className='flex mx-auto'>
                <ul className='text-black p-4 md:p-0 items-center flex gap-5'>
                    <a
                        href="/"
                        className="py-2 pl-3 pr-4 md:p-0 hover:text-amber-500 transition-colors hover:scale-110 hover:border-2 hover:rounded-xl hover:p-2">
                        Home
                    </a>
                    <a
                        href="/"
                        className="py-2 pl-3 pr-4 md:p-0 hover:text-amber-500 transition-colors hover:scale-110 hover:border-2 hover:rounded-xl hover:p-2">
                        Products
                    </a>
                    <a
                        href="/"
                        className="py-2 pl-3 pr-4 md:p-0 hover:text-amber-500 transition-colors hover:scale-110 hover:border-2 hover:rounded-xl hover:p-2">
                        Contact
                    </a>
                </ul>
            </div>
        </>
    )
}

export default NavItems