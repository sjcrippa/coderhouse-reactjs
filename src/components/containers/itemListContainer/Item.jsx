import React from 'react';
import Counter from '../counter/Counter';

const Item = ({ producto }) => {
    return (
        <>
            <div className='text-center'>
                <div className='border-2 border-slate-800 p-5 m-10 rounded-xl shadow-lg shadow-black h-80 bg-white hover:scale-105 duration-150 hover:shadow-2xl hover:shadow-black'>
                    <img
                        className='mx-auto'
                        src={producto.image}
                        alt={producto.name}
                    />
                    <div className='mt-3'>
                        <h2>{producto.name}</h2>
                        <p>For {producto.gender}</p>
                        <p>$ {producto.price}</p>
                        <p>{producto.description}</p>
                    </div>
                    <Counter />
                </div>
            </div>
        </>
    )
}

export default Item;