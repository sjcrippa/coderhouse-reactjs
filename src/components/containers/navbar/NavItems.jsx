import React from 'react'
import { Link } from 'react-router-dom'

const NavItems = () => {
    return (
        <>
            <div className='flex mx-auto'>
                <ul className='text-black p-4 md:p-0 items-center flex gap-5'>
                    <Link
                        to={"/productos"}
                        className="py-2 pl-3 pr-4 md:p-0 text-sm md:text-base font-extralight hover:shadow-sm transition-colors">
                        FRAGANCIAS
                    </Link>
                    <Link
                        to={"/:category"}
                        className="py-2 pl-3 pr-4 md:p-0 text-sm md:text-base font-extralight hover:shadow-sm transition-colors">
                        CATEGORIAS
                    </Link>
                </ul>
            </div>
        </>
    )
}

export default NavItems