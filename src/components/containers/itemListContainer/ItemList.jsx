import React from 'react';

import Item from './Item';

const ItemList = ({ productos, title }) => {
    return (
        <>
            <div className='Parent'>
                <div className='container mx-auto'>
                    <h1 className='text-white text-center text-2xl'>{title}</h1>
                </div>
                <div className='container mx-auto'>
                    <div className='grid mx-20 md:mx-14 xl:mx-auto md:grid-cols-2 lg:grid-cols-3 gap-10'>
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