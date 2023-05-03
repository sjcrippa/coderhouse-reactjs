import React from 'react';
import { useState } from 'react';

import '../App.css';
const Main = () => {

    let resultado = 0;

    return (
        <>
            <div className='grid justify-center align-middle bg-red-500 m-2 p-4 gap-5 max-w-sm rounded-xl text-center'>
                <p className='font-mono font-bold text-xl'>Counter</p>
                <div className='font-mono font-bold text-xl'>
                    {resultado}
                </div>
                <button 
                className='bg-red-300 rounded-xl w-20 hover:bg-slate-700 hover:text-white'
                >
                    +1
                </button>
                <button 
                className='bg-red-300 rounded-xl w-20 hover:bg-slate-700 hover:text-white'
                >
                    -1
                </button>
            </div>
        </>
    )
}

export default Main