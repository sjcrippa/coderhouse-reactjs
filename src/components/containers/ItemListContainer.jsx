import React, { useState } from 'react';

const ItemListContainer = () => {

    const [greetings, setGreetings] = useState('Click for Greetings!');
    const Saludando = () => {
        setGreetings('Welcome!');
    };

    return (
        <>
            <div className='flex shrink mx-auto justify-center mt-10'>
                <p className='text-lg font-bold font-[Verdana] text-slate-900 border-slate-400 border-[1px] rounded-xl'>
                    <button
                        className='w-40 bg-red-500 shadow-2xl rounded-xl p-1 hover:border-2 hover: border-none hover:bg-slate-700 hover:text-slate-50 hover:scale-105 duration-75'
                        onClick={() => {
                            Saludando()
                        }}>
                        {greetings}
                    </button>
                </p>
            </div>
        </>
    );
};

export default ItemListContainer;