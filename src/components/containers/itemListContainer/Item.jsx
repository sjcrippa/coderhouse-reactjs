import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <>
            <div className='text-center'>
                <div className='m-12 md:m-7 rounded-xl shadow-md shadow-black/50 border hover:scale-100 duration-150 xl:h-auto text-slate-900 bg-white'>
                    <Link to={`/item/${producto.id}`}>
                        <img
                            className='mx-auto rounded-t-xl'
                            src={producto.image}
                            alt={producto.name}
                        />
                    </Link>
                    <p className='p-2 uppercase text-start'>{producto.name}</p>
                </div>
            </div>
        </>
    )
}

export default Item;