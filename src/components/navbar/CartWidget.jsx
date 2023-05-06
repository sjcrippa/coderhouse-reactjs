import React from 'react'

import { cart } from '../assets'

const CartWidget = () => {

    return (
        <>
            <button className='text-center hover:text-white hover:scale-110 duration-200'>
                <img
                    className='w-8 h-8'
                    src={cart}
                    alt="cart" />
                    <div className='text-sm font-[Verdana]'>1</div>
            </button>
        </>
    )
}

export default CartWidget