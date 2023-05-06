import React, {useState} from 'react'

const Counter = () => {

    const [resultado, setResultado] = useState(0);

    const sumar = () => {
        setResultado(resultado + 1);
    };
    const restar = () => {
        setResultado(resultado - 1);
    };

    return (
        <>
            <div className='container flex shrink justify-center mx-auto mt-5 mb-5 p-10'>
                <div className='grid grid-cols-1 gap-3 bg-red-500 rounded-xl text-center w-96 p-3 shadow-2xl text-slate-900'>
                    <p className='font-[Verdana] font-bold text-xl cursor-default'>Counter</p>
                    <div className='font-[Verdana] font-bold text-2xl'>
                        {resultado}
                    </div>
                    <div className='flex mb-3'>
                        <button
                            onClick={sumar}
                            className='mx-auto font-[Verdana] font-bold text-lg text-slate-900 font bg-red-300 rounded-xl w-20 shadow-xl hover:bg-slate-700 hover:text-white'
                        >
                            +1
                        </button>
                        <button
                            onClick={restar}
                            className='mx-auto font-[Verdana] font-bold text-lg text-slate-900 font bg-red-300 rounded-xl w-20 shadow-xl hover:bg-slate-700 hover:text-white'
                        >
                            -1
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter