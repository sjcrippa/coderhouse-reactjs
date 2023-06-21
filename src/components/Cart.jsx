import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, totalAmount, handleClearCart } = useContext(CartContext);

    const handleClear = () => {
        handleClearCart()
    }
    return (
        <>
            <div className='cart-detail h-screen py-16 z-0'>
                <div className='item-box mx-5 md:mx-10 lg:mx-24 mt-10 bg-white h-[80vh] bg-opacity-50 backdrop-blur-sm rounded-md'>
                    <h1 className='p-2 text-start text-xl uppercase text-slate-900 '>Order Detail</h1>
                    {
                        cart.map((producto) => (
                            <div className='bg-black text-white' key={producto.id}>
                                <h2>{producto.name}</h2>
                                <p>Quantity:{producto.quantity}</p>
                                <p>Unit price: ${producto.price}</p>
                                <p>Total: ${producto.price * producto.quantity}</p>
                                <br />
                            </div>
                        ))
                    }
                    {
                        cart.length > 0 ?
                            <>
                                <h2>Total Amount: {totalAmount()} </h2>
                                <button onClick={handleClear}>Clear</button>
                            </> :
                            <h2 className='p-2 m-2 w-2/3 sm:w-1/2 rounded-lg bg-red-600 text-white text-sm text-center mx-auto'>Oh! You have not added any products.</h2>
                    }

                </div>
            </div>
        </>
    )
}

export default Cart;