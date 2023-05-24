import React from 'react';
import Counter from '../counter/Counter';

const Item = ({ producto }) => {
    return (
        <>
            <div className='text-center'>
                <div className='m-5 rounded-xl shadow-lg bg-transparent shadow-black bg-white hover:scale-100 duration-150 hover:shadow-2xl hover:shadow-black h-80 xl:h-auto text-slate-900'>
                    <img
                        className='mx-auto rounded-xl'
                        src={producto.image}
                        alt={producto.name}
                    />
                    <div className='mt-3'>
{/*                         <h2>{producto.name}</h2>
 */}{/*                         <p>For {producto.gender}</p>
 */}                        <p>$ {producto.price}</p>
{/*                         <p>{producto.description}</p>
 */}                    </div>
                    
                    <Counter stock={10}/>
                
                </div>
            </div>
        </>
    )
}

export default Item;