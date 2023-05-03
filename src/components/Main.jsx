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
            <div className='container '>
                <div className='grid justify-center bg-red-500 m-2 p-4 gap-5 max-w-sm rounded-xl text-center'>
                    <p className='font-mono font-bold text-xl'>Counter</p>
                    <div className='font-mono font-bold text-xl'>
                        {resultado}
                    </div>
                    <button
                        onClick={sumar}
                        className='bg-red-300 rounded-xl w-20 hover:bg-slate-700 hover:text-white'
                    >
                        +1
                    </button>
                    <button
                        onClick={restar}
                        className='bg-red-300 rounded-xl w-20 hover:bg-slate-700 hover:text-white'
                    >
                        -1
                    </button>
                </div>
            </div>
        </>
    )
}

export default Main