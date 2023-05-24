import React from 'react';

import ViewMore from '../buttons/ViewMore';

const Item = ({ producto }) => {
    return (
        <>
            <div className='text-center'>
                <div className='m-16 md:m-5 lg:m-10 rounded-xl shadow-lg bg-transparent shadow-black bg-white hover:scale-100 duration-150 hover:shadow-2xl hover:shadow-black/60 xl:h-auto text-slate-900'>
                    <img
                        className='mx-auto rounded-t-xl'
                        src={producto.image}
                        alt={producto.name}
                    />
                    <div className='mt-3'>
{/*                         <h2>{producto.name}</h2>
 */}{/*                         <p>For {producto.gender}</p>
 */}                        <p>$ {producto.price}</p>
{/*                         <p>{producto.description}</p>
 */}                    </div>
                    
                    <ViewMore />
                
                </div>
            </div>
        </>
    )
}

export default Item;