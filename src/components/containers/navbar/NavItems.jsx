import React from 'react';
import { Link } from 'react-router-dom';

const NavItems = () => {
    return (
        <>
            <div className='hidden md:flex w-full '>
                <ul className='flex text-black p-4 md:p-0 items-center justify-center gap-5 uppercase translate-x-72'>
                    <Link
                        to={"/productos"}
                        className=" text-sm md:text-base font-extralight transition-colors">
                        fragrances
                    </Link>
                    <Link
                        to={"/productos/her"}
                        className=" text-sm md:text-base font-extralight transition-colors">
                        for her
                    </Link>
                    <Link
                        to={"/productos/him"}
                        className=" text-sm md:text-base font-extralight transition-colors">
                        for him
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default NavItems