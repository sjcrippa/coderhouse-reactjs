import React, { useEffect, useState } from 'react';

import data from '../../../data/products.json';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const pedirProductos = () => {
        return new Promise((resolve, reject) => {
            resolve(data)
        });
    };

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
    }, [])

    return (
        <>
            <div className='text-center'>
                Main container <br />
                {
                    productos.length > 0 &&
                    <div className='card flex mx-auto'>
                        <div className='flex-row mx-auto items-center p-5 rounded-md shadow-lg shadow-black  bg-red-500'>
                            <img
                                className='mx-auto'
                                src={productos[0].image}
                                alt={productos[0].name}
                            />
                            <h2>{productos[0].name}</h2>
                            <p>For {productos[0].gender}</p>
                            <p>$ {productos[0].price}</p>
                            <p>{productos[0].description}</p>
                        </div>
                    </div>
                }
                <ItemList />
            </div>
        </>
    );
};

export default ItemListContainer;