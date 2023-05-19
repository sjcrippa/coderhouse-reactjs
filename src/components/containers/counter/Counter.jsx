import React, { useState } from 'react';

const Counter = ({ stock }) => {
    const [items, setItems] = useState(0);
    const [itemStock, setItemStock] = useState(stock);

    const add = () => {
        setItems(items + 1)
    };

    const substract = () => {
        setItems(items - 1)
    };

    return (


        <>
            <div className='mt-10 flex justify-center items-center text-center'>
                <div className='p-2 px-8 bg-red-500 rounded-lg shadow-lg shadow-black/60 flex gap-4'>
                    <button onClick={substract}>-</button>
                    <p>{items}</p>
                    <button onClick={add}>+</button>
                    <button className='font-serif pl-5'>Add to cart</button>
                </div>
            </div>
        </>
    )
}

export default Counter