import React from 'react'

const NavItems = () => {
    return (
        <>
            <div className='flex mx-auto'>
                <ul className='text-black p-4 md:p-0 items-center flex gap-5'>
                    <a
                        href="/"
                        className="py-2 pl-3 pr-4 md:p-0 text-sm md:text-base font-extralight hover:shadow-sm transition-colors">
                        FRAGANCIAS
                    </a>
                    <a
                        href="/"
                        className="py-2 pl-3 pr-4 md:p-0 text-sm md:text-base font-extralight hover:shadow-sm transition-colors">
                        MODA & ACCESORIOS
                    </a>
                </ul>
            </div>
        </>
    )
}

export default NavItems