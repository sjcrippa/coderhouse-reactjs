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

                    productos.map((producto) => {
                        return (
                            <div className='card flex flex-grow mx-auto'>
                                <div className='flex flex-col mx-auto items-center p-5 rounded-md shadow-lg shadow-black  bg-red-500'>
                                    <img
                                        className='mx-auto'
                                        src={productos.image}
                                        alt={productos.name}
                                    />
                                    <h2>{productos.name}</h2>
                                    <p>For {productos.gender}</p>
                                    <p>$ {productos.price}</p>
                                    <p>{productos.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <ItemList />
            </div>
        </>
    );
};

export default ItemListContainer;