import React from 'react';
import Counter from '../counter/Counter';

const Item = ({ producto }) => {
    return (
        <>
            <div className='mt-10 card container mx-auto text-center px-36 xl:px-[30rem]'>
                <div className='border-2 p-5'>
                    <img
                        className='mx-auto'
                        src={producto.image}
                        alt={producto.name}
                    />
                    <h2>{producto.name}</h2>
                    <p>For {producto.gender}</p>
                    <p>$ {producto.price}</p>
                    <p>{producto.description}</p>
                    <Counter />
                </div>
            </div>
        </>
    )
}

export default Item;