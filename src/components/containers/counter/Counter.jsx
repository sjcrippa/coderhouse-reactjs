import React, { useState } from 'react';

const Counter = ({ stock }) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const add = () => {
        if (items < itemStock) {
            setItems(items + 1)
        }
    };

    const substract = () => {
        setItems(items - 1)
    };

    return (
        <>
            <div className='mt-3 flex justify-center'>
                <div className='p-2 items-center px-8 md:-my-3 md:h-12 xl:px-8 flex gap-5 text-slate-900'>
                    <button onClick={substract}>-</button>
                    <p>{items}</p>
                    <button onClick={add}>+</button>
                    <button className='p-2 px-5 rounded-lg h-5 flex items-center text-sm font-sans font-semibold text-white bg-slate-800 hover:bg-white hover:text-slate-800 hover:font-bold hover:text-lg duration-150'>Add </button>
                </div>
            </div>
        </>
    );
};

export default Counter;