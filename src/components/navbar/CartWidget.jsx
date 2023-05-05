import React, { useState } from 'react'
import { cart } from '../assets'

const CartWidget = () => {

    return (
        <div className=''>
            <a href="/">
                <img 
                className='w-8 h-8 hover:scale-110 duration-200'
                src={cart} 
                alt="cart" />
            </a>
        </div>
    )
}

export default CartWidget