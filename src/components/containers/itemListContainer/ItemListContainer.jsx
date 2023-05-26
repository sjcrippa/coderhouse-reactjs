import React, { useEffect, useState } from 'react';

import ItemList from './ItemList';
import pedirProductos from '../../../functions/pedirProductos';
import Loader from '../../Loader';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                setProductos(res)
                setLoader(true)
            })
            .catch((err) => {
                // logic for catching the error goes here.
            })
    }, [])


    return (
        <>
            <div className='mt-5 bg-slate-950'>
                {!loader ? <Loader /> : <ItemList productos={productos}/>}

            </div>
        </>
    );
};

export default ItemListContainer;