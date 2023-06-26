import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
    return (
        <>
            <div className='hidden md:flex w-full '>
                <ul className='flex text-black p-4 md:p-0 items-center justify-center gap-5 uppercase mx-auto w-full md:translate-x-[8rem] lg:translate-x-[15rem]'>
                    <Link
                        to={"/productos"}
                        className="hover:text-indigo-600 hover:scale-110 transition-all duration-200  text-sm md:text-base font-extralight">
                        fragrances
                    </Link>
                    <Link
                        to={"/productos/her"}
                        className="hover:text-indigo-600 hover:scale-110 transition-all duration-200  text-sm md:text-base font-extralight">
                        for her
                    </Link>
                    <Link
                        to={"/productos/him"}
                        className="hover:text-indigo-600 hover:scale-110 transition-all duration-200  text-sm md:text-base font-extralight">
                        for him
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default NavItems