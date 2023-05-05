import React from 'react'

import { cart } from '../assets'

const CartWidget = () => {

    return (
        <>
            <div className='items-center'>
                <a
                    href="/">
                    <img
                        className='w-8 h-8 hover:scale-110 duration-200'
                        src={cart}
                        alt="cart" />
                <p className='text-center hover:text-white hover:scale-110 duration-200'>1</p>
                </a>
            </div>
        </>
    )
}

export default CartWidget