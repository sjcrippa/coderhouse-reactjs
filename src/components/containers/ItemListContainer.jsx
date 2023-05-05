import React, { useState } from 'react';

const ItemListContainer = () => {

    const [saludar, setSaludar] = useState('Click for Greetings!');
    const Saludando = () => {
        setSaludar('Welcome!');
    };

    return (
        <>
            <div className='flex mx-auto justify-center mt-10'>
                <p className='text-lg font-bold font-[Verdana] text-slate-900'>
                    <button
                        className='bg-red-500 shadow-2xl border-gray-900'
                        onClick={() => {
                            Saludando()
                        }}>
                        {saludar}
                    </button>
                </p>
            </div>
        </>
    );
};

export default ItemListContainer;