import React from 'react';

import Counter from '../counter/Counter'
const ItemDetail = ({ item }) => {

    return (
        <>
            <div className='mx-auto'>
                <div className='mt-5 ml-5 flex'>
                    <img className='mt-5 w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl shadow-lg shadow-black hover:shadow-2xl hover:shadow-black duration-150' src={item.image} alt="prod-img" />
                    <div className='m-5 mx-4 md:mx-8 text-white rounded-xl bg-indigo-600 p-5 h-1/2 shadow-lg shadow-black'>
                        <h3>{item.name}</h3>
                        <p>$ {item.price}</p>
                        <p>For {item.category}</p>
                        <p>{item.description}</p>
                        <Counter />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail   