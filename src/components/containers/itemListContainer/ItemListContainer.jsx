import React, { useEffect, useState } from 'react';

import ItemList from './ItemList';
import pedirProductos from '../../../functions/pedirProductos';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
            })
            .catch((err) => {
                // logic for catching the error goes here.
            })
    }, [])

    return (
        <>
            <div className='bg-slate-900'>
                <ItemList productos={productos}/>
            </div>
        </>
    );
};

export default ItemListContainer;