import React from 'react';

import Item from './Item';
import { toCapital } from '../../../functions/toCapital';
import { logoDos } from '../../../assets';

const ItemList = ({ productos, title }) => {
    return (
        <>
            <div className='Parent'>
                <div className='container mx-auto'>
                    <h1 className='text-black text-center text-2xl'>{toCapital(title)}</h1>
{/*                     <img 
                    className='w-32'
                    src={logoDos} 
                    alt="logo" /> */}
                </div>
                <div className='container mx-auto'>
                    <div className='grid mx-16 md:mx-14 xl:mx-20 md:grid-cols-2 lg:grid-cols-3 gap-1'>
                        {
                            productos.map((producto) => {
                                return (
                                    <Item key={producto.id} producto={producto} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemList