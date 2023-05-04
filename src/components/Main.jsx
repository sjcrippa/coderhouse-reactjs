import React, { useState } from 'react';

import '../App.css';

const Main = () => {

    const [resultado, setResultado] = useState(0);

    const sumar = () => {
        setResultado(resultado + 1);
    }
    const restar = () => {
        setResultado(resultado - 1);
    }

    return (
        <>
            <div className='container flex shrink justify-center mx-auto mt-5 mb-5 p-10'>
                <div className='grid grid-cols-1 gap-3 bg-red-500 rounded-xl text-center w-96 p-3'>
                    <p className='font-mono font-bold text-xl'>Counter</p>
                    <div className='font-mono font-bold text-xl'>
                        {resultado}
                    </div>
                    <button
                        onClick={sumar}
                        className='mx-auto bg-red-300 rounded-xl w-20 hover:bg-slate-700 hover:text-white'
                    >
                        +1
                    </button>
                    <button
                        onClick={restar}
                        className='mx-auto bg-red-300 rounded-xl w-20 hover:bg-slate-700 hover:text-white'
                    >
                        -1
                    </button>
                </div>
            </div>
        </>
    )
}

export default Main