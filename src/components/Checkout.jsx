import React from 'react'

import '../App.css'
const Checkout = () => {
    return (
        <>
            <div className='container mx-auto p-5'>
                <div className='w-full h-screen text-center'>
                    <div className='relative top-24'>
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
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout