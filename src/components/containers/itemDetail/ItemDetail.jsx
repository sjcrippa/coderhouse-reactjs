import React, { useState } from 'react';

import Counter from '../counter/Counter'
const ItemDetail = ({ item }) => {
    const [stock, setStock] = useState(1);
    const [details, setDetails] = useState(false);

    const handleAdd = () => {
        stock < item.stock && setStock(stock + 1)
    };

    const handleRemove = () => {
        stock > 1 && setStock(stock - 1)
    };

    const handleCart = () => {
        console.log({ ...item, stock });
    }

    const handleDetails = () => {
        details && setDetails(true)
        console.log('estoy cliqueando el boton');
    }

    return (
        <>
            <div className='py-16 mx-auto '>
                <div className='block sm:flex'>
                    <div className='card mx-auto mt-10 w-4/6 md:w-3/6 sm:bg-red-500 xl:w-1/5 rounded-xl shadow-lg bg-white shadow-black hover:shadow-2xl hover:shadow-black duration-150'>
                        <h3 className='py-1 -mb-2 ml-2 uppercase text-lg'>{item.name}</h3>
                        <img className='p-1 rounded-t-xl' src={item.image} alt="prod-img" />
                        <div className='p-2 mb-2 text-sm lg:text-base text-center font-serif font-semibold'>
                            <section className='border-t-2 border-black'></section>
                            <button className='mt-2'>{!details ? 'Click to see details' : handleDetails()}</button>
                            <div className='dropdown'>
                                <p className='mt-2 text-start'>$ {item.price}</p>
                                <p className='text-start'>For {item.category}</p>
                                <p className='text-start'>{item.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 m-5 mx-16 md:mx-8 rounded-xl bg-white p-3 shadow-lg shadow-black'>
                        <h2 className='text-center text-xl'>ORDER IT  NOW!</h2>
                        <p>VISA</p>
                        <p>MASTERCARD</p>
                        <p>HOME DELIVER</p>
                        <Counter stock={stock} handleAdd={handleAdd} handleRemove={handleRemove} handleCart={handleCart} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail   