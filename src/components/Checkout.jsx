import React, { useContext, useState } from 'react'

import { CartContext } from '../context/CartContext';

import '../App.css'
const Checkout = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const { cart, totalAmount } = useContext(CartContext);


    return (
        <>
            <div className='container mx-auto p-5 z-0'>
                <div className='w-full h-screen text-center z-0'>
                    <div className='relative top-24 grid grid-cols-1 md:grid-cols-2 gap-3'>
                        <div>

                            <h1 className='text-2xl'>Checkout</h1>
                            <form className='mt-5'>
                                <div className='flex flex-col gap-3'>
                                    <label className='text-start' htmlFor="">First and last name</label>
                                    <input className='z-0' type="text" placeholder='name' />

                                    <label className='text-start' htmlFor="">Email</label>
                                    <input type="email" placeholder='email' />

                                    <label className='text-start' htmlFor="">Phone number</label>
                                    <input type="tel" placeholder='phone' />
                                </div>
                                <button className='mt-5 flex justify-start p-2 bg-indigo-700 text-white border rounded' type='submit'>Submit</button>
                            </form>
                        </div>
                        <div className='border rounded  overflow-auto'>
                            <h2 className='text-center text-2xl'>Render de productos</h2>
                            <div className='p-5'>
                                {
                                    cart.map((item) => (
                                        <div className='bg-black text-white w-full rounded shadow-md shadow-black/50' key={item.id}>
                                            <div className='flex items-center gap-24 border-b border-white'>
                                                <div className='flex w-full justify-between items-center'>
                                                    <img src={item.image} alt="img" width={100} />
                                                    <h2>{item.name}</h2>
                                                    <p>{item.quantity} x {item.price}</p>
                                                </div>
                                                <p className='flex flex-shrink-0'>Total: ${item.price * item.quantity}</p>
                                                <br />
                                            </div>
                                        </div>
                                    ))
                                }
                                <h2 className='text-end p-5'>total ${totalAmount()}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout;