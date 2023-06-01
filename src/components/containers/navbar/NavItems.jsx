import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
    return (
        <>
            <div className='hidden md:flex mx-auto'>
                <ul className='text-black p-4 md:p-0 items-center flex gap-5 uppercase'>
                    <Link
                        to={"/productos"}
                        className="py-2 pl-3 pr-4 md:p-0 text-sm md:text-base font-extralight transition-colors">
                        fragrances
                    </Link>
                    <Link
                        to={"/productos/her"}
                        className="py-2 pl-3 pr-4 md:p-0 text-sm md:text-base font-extralight transition-colors">
                        for her
                    </Link>
                    <Link
                        to={"/productos/him"}
                        className="py-2 pl-3 pr-4 md:p-0 text-sm md:text-base font-extralight transition-colors">
                        for him
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default NavItems