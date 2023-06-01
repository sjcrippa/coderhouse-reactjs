import React from 'react'

import { cart } from '../../../assets'
import { Link } from 'react-router-dom'

const CartWidget = () => {

    return (
        <>
            <Link to={"/cart"}>
                <button className='text-center text-black hover:scale-110 duration-200 mt-2'>
                    <img
                        className='w-6 h-6'
                        src={cart}
                        alt="cart" />
                    <div className='text-sm'>1</div>
                </button>
            </Link>
        </>
    )
}

export default CartWidget