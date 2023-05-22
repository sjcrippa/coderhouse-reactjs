import React from 'react';

import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <>
            <div className='Parent'>
                <h1 className='text-center text-5xl'>Productos</h1>
                <div className='container mx-auto'>
                    <div className='grid mx-20 xl:mx-auto md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
                        {
                            productos.length > 0 &&
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