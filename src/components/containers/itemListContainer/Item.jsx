import React from 'react';

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
                    <button className='mt-5 p-2 px-10 text-center bg-red-500 rounded-xl'>
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}

export default Item;