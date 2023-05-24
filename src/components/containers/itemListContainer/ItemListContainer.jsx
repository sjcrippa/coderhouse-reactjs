import React, { useEffect, useState } from 'react';

import ItemList from './ItemList';
import pedirProductos from '../../../functions/pedirProductos';
import Loader from '../../Loader';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [showLoader, setShowLoader] = useState(false)

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
            <Loader />
            <div className='bg-slate-900'>
                <ItemList productos={productos}/>
            </div>
        </>
    );
};

export default ItemListContainer;