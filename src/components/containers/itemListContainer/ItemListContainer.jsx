import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from './ItemList';
import pedirProductos from '../../../functions/pedirProductos';
import Loader from '../../Loader';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loader, setLoader] = useState(false);
    const [title, setTitle] = useState('Productos');
    const category = useParams().category;

    useEffect(() => {
        pedirProductos()
            .then((res) => {
                if (category){
                    setProductos(res.filter ((prod) => prod.category === category))
                    setTitle(category)
                } else {
                    setProductos(res)
                    setTitle('FRAGANCIAS PRINCIPALES')
                }
                setLoader(true)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [category]);

    return (
        <>
            <div className='mt-5'>
                {!loader ? <Loader /> : <ItemList productos={productos} title={title} />}
            </div>
        </>
    );
};

export default ItemListContainer;