import React, {useState} from 'react'

import { menu } from '../assets';
import NavItems from '../navbar/NavItems';

const MenuHamb = () => {
    const [showNav, setShowNav] = useState(false);

    const handleNav = () => {
        setShowNav(!showNav);
    }

    return (
        <div className='flex justify-items-end'>
            <button
                className='md:hidden'
                onClick={handleNav}
            >
                <img
                    className='h-10 w-10'
                    src={menu}
                    alt="menu" />
                {showNav && <NavItems />}
            </button>
        </div>
    )
}

export default MenuHamb