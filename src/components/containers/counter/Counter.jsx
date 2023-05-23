import React, { useState } from 'react';

const Counter = ({ stock }) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const add = () => {
        setItems(items + 1)
    };

    const substract = () => {
        setItems(items - 1)
    };

    return (
        <>
            <div className='mt-3 flex justify-center items-center text-center'>
                <div className='p-2 items-center md:-my-3 md:h-12 xl:px-8 bg-red-500 rounded-lg shadow-lg shadow-black/60 flex gap-4'>
                    <button onClick={substract}>-</button>
                    <p>{items}</p>
                    <button onClick={add}>+</button>
                    <button className=' font-sans font-semibold hover:text-white hover:scale-110 duration-100'>Add to cart</button>
                </div>
            </div>
        </>
    );
};

export default Counter;