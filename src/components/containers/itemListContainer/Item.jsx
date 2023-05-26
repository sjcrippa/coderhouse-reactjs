import React from 'react';
import { Link } from 'react-router-dom';

import ViewMore from '../buttons/ViewMore';

const Item = ({ producto }) => {
    return (
        <>
            <div className='text-center'>
                <div className='m-16 md:m-7 rounded-xl shadow-lg bg-transparent shadow-black bg-white hover:scale-100 duration-150 hover:shadow-2xl hover:shadow-black/60 xl:h-auto text-slate-900'>
                    <Link to={`/item/${producto.id}`}>
                        <img
                            className='mx-auto rounded-t-xl'
                            src={producto.image}
                            alt={producto.name}
                        />
                    </Link>
                    {/* <div className='mt-3'>
                        <h2>{producto.name}</h2>
                        <p>For {producto.gender}</p>
                        <p>$ {producto.price}</p>
                        <p>{producto.description}</p>
                    </div> */}
                    <ViewMore producto={producto}/>

                </div>
            </div>
        </>
    )
}

export default Item;