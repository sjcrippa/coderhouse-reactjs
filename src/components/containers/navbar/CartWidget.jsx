import React, { useContext } from 'react'

import { cart } from '../../../assets'
import { Link } from 'react-router-dom'
/* import { CartContext } from '../../../context/CartContext'
 */
const CartWidget = () => {
/*     const { cartAmount } = useContext(CartContext);
 */
    return (
        <>
            <Link to={"/cart"}>
                <button className='text-center text-black hover:scale-110 duration-200 mt-2'>
                    <img
                        className='w-6 h-6'
                        src={cart}
                        alt="cart" />
                    <div className='text-sm'></div>
                </button>
            </Link>
        </>
    )
}

export default CartWidget