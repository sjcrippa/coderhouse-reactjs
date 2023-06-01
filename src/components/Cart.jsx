import React from 'react';

const Cart = () => {
    return (
        <>
            <div className='cart-detail h-screen py-16 z-0'>
                <div className='item-box mx-5 md:mx-10 lg:mx-24 mt-10 bg-white h-[80vh] bg-opacity-50 backdrop-blur-sm rounded-md'>
                    <h2 className='p-2 text-start text-xl uppercase text-slate-900 '>Order Detail</h2>
                    <h3 className='p-2 m-2 w-2/3 sm:w-1/2 rounded-lg bg-red-600 text-white text-sm text-center mx-auto'>Oh! You have not added any products.</h3>
                </div>
            </div>
        </>
    )
}

export default Cart;