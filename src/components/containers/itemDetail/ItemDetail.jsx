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
        if (!details) {
            setDetails(true)
        } else {
            setDetails(false)
        }
    }

    return (
        <>
            <div className='py-16 mx-auto'>
                <div className='block sm:flex'>
                    <div className='card mx-auto lg:mx-16 mt-10 w-4/6 md:w-3/6 xl:w-1/4 rounded-xl shadow-lg bg-white shadow-black hover:shadow-2xl hover:shadow-black duration-150'>
                        <h3 className='py-1 -mb-2 ml-2 uppercase text-lg'>{item.name}</h3>
                        <img className='p-1 rounded-t-xl' src={item.image} alt="prod-img" />
                        <div className='p-2 mb-2 text-sm lg:text-base text-center font-serif font-semibold'>
                            <section className='border-t-2 border-slate-900'></section>
                            <button
                                onClick={handleDetails}
                                className='mt-2 text-lg uppercase font-[verdana] text-slate-900'>{!details ? 'Click for details' :
                                    <div className='dropdown'>
                                        <p className='mt-2 mb-2 text-center'>For {item.category}</p>
                                        <p className='text-start'>$ {item.price}</p>
                                        <p className='text-start'>{item.description}</p>
                                    </div>}
                            </button>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='mt-10 m-5 mx-16 md:mx-8 rounded-xl bg-white p-3 shadow-lg shadow-black text-slate-900'>
                            <h2 className='text-center text-xl'>ORDER IT  NOW!</h2>
                            <p className='mt-2'>VISA</p>
                            <p>MASTERCARD</p>
                            <p>HOME DELIVER</p>
                            <Counter stock={stock} handleAdd={handleAdd} handleRemove={handleRemove} handleCart={handleCart} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail   