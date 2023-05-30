import React from 'react';

const Counter = ({ stock, handleRemove, handleAdd, handleCart }) => {

    return (
        <>
            <div className='mt-3 flex justify-center'>
                <div className='p-2 items-center md:-my-3 md:h-12 xl:px-8 flex flex-col gap-5 text-black'>
                    <div className='flex gap-5 text-lg'>
                        <button className='font-semibold hover:scale-150 duration-100' onClick={handleRemove}>-</button>
                        <p className='cursor-default'>{stock}</p>
                        <button className='font-semibold hover:scale-150 duration-100' onClick={handleAdd}>+</button>
                    </div>
                    <button 
                    onClick={handleCart}
                    className='p-1 px-5 rounded-lg flex items-center text-sm font-sans font-semibold text-white bg-indigo-800 hover:bg-indigo-600 shadow-lg shadow-black/60 duration-150'>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Counter;