import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { db } from "../../../firebase/config";
import { collection, getDocs, query, where, } from 'firebase/firestore';

import ItemList from './ItemList';
import Loader from '../../Loader';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loader, setLoader] = useState(false);
    const [title, setTitle] = useState('');
    const { category } = useParams();

    useEffect(() => {
        const prodsRef = collection(db, "productos");
        const q = category ? query(prodsRef, where('category', '==', category)) : prodsRef;

        getDocs(q)
            .then((resp) => {
                setProductos(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
                setLoader(true)

                if (category) {
                    setTitle(category)
                } else {
                    setTitle('Main Collection')
                }
            })

    }, [category])


    return (
        <>
            <div className='py-16'>
                {!loader ? <Loader /> : <ItemList productos={productos} title={title} />}
            </div>
        </>
    );
};

export default ItemListContainer;