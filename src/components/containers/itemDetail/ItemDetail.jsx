import React, {useState} from 'react';

import Counter from '../counter/Counter'
const ItemDetail = ({ item }) => {
    const [stock, setStock] = useState(1);

    const handleAdd = () => {
        stock < item.stock && setStock(stock + 1)
    };

    const handleRemove = () => {
        stock > 1 && setStock(stock - 1)
    };

    const handleCart = () => {
        console.log({...item, stock});
    }
    return (
        <>
            <div className='py-16 mx-auto '>
                <div className='ml-8 block sm:flex'>
                    <div className='card mt-10 w-4/6 mx-auto sm:w-1/6 xl:w-1/5 rounded-xl shadow-lg bg-white shadow-black hover:shadow-2xl hover:shadow-black duration-150'>
                        <img className='p-1 rounded-t-xl' src={item.image} alt="prod-img" />
                        <div className='p-1 mb-1 text-sm lg:text-base text-center font-serif font-semibold'>
                            <h3 className='uppercase text-lg border-b-2 border-black'>{item.name}</h3>
                            <p className='mt-2 text-start ml-2'>$ {item.price}</p>
                            <p className='text-start ml-2'>For {item.category}</p>
                            <p className='text-start ml-2'>{item.description}</p>
                        </div>
                    </div>

                    <div className='mt-10 m-5 mx-16 md:mx-8 rounded-xl bg-white p-3 shadow-lg shadow-black'>
                        <h2>ORDER IT  NOW!</h2>
                        <p>VISA</p>
                        <p>MASTERCARD</p>
                        <p>HOME DELIVER</p>
                        <Counter stock={stock} handleAdd={handleAdd} handleRemove={handleRemove} handleCart={handleCart}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail   