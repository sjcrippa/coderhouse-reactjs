import React, { useContext } from 'react'

import { cart } from '../../../assets'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../context/CartContext'

const CartWidget = () => {
    const { quantityInCart } = useContext(CartContext);

    return (
        (quantityInCart() > 0) ?
        <>
            <Link to={"/cart"}>
                <button className='flex gap-1 text-center hover:scale-110 duration-200 mt-2'>
                    <img
                        className='w-8 h-8'
                        src={cart}
                        alt="cart" />
                    <span className='text-lg -translate-y-3 text-white bg-black rounded-full h-7 w-7'>{quantityInCart()}</span>
                </button>
            </Link>
        </>
        : ''
    )
}

export default CartWidget