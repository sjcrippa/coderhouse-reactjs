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
            <div>
                <ItemList productos={productos}/>
            </div>
        </>
    );
};

export default ItemListContainer;