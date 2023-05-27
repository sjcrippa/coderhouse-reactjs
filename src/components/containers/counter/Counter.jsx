import React, { useState } from 'react';

const Counter = ({ stock }) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const add = () => {
        setItems (items + 1)
    };

    const substract = () => {
        setItems(items - 1)
    };

    return (
        <>
            <div className='mt-3 flex justify-center'>
                <div className='p-2 items-center md:-my-3 md:h-12 xl:px-8 flex gap-5 text-slate-900'>
                    <button className='hover:text-white' onClick={substract}>-</button>
                    <p className='cursor-default'>{items}</p>
                    <button className='hover:text-white' onClick={add}>+</button>
                    <button className='p-1 px-5 rounded-lg flex items-center text-sm font-sans font-semibold text-white bg-indigo-800 hover:bg-white hover:text-indigo-950 shadow-lg shadow-black/60 duration-150'>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Counter;