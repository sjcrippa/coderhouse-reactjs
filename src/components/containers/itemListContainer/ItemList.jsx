import React from 'react';

import Item from './Item';
import { pacoLogo } from '../../../assets';

const ItemList = ({ productos }) => {
    return (
        <>
            <div className='Parent'>
                <div className='container mx-auto'>
{/*                     <img className='w-36 h-16' src={pacoLogo} alt="logo" />
 */}                    <h1 className='text-indigo-600 text-center text-5xl'>Principales Fragancias</h1>
                </div>
                <div className='container mx-auto'>
                    <div className='grid mx-20 xl:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10'>
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