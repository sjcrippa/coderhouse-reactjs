import React, {useState} from 'react';

import Counter from './Counter';

const BtnForCounter = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show)
    };

    return (
        <>
            <button
            className='grid mx-auto p-2 text-slate-900 bg-red-500 font-[Verdana] font-bold text-lg mt-10 rounded-xl shadow-xl  hover:bg-slate-700 hover:text-slate-50 hover:scale-105 duration-75 border-slate-400 border-[1px]'
            onClick={handleShow}
            >{show ? 'Click for hide Counter!' : 'Click for use Counter!' }
            </button>
            {show && <Counter />}
        </>
    )
};

export default BtnForCounter