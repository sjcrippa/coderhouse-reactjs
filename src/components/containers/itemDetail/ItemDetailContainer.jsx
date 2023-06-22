import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { doc, getDoc } from "firebase/firestore";

import ItemDetail from './ItemDetail';
import { db } from '../../../firebase/config';

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, 'productos', id);
        getDoc(docRef)
            .then((resp) => {
                setItem(
                    { ...resp.data(), id: resp.id }
                )
            })
    }, [id])

    return (
        <div className='item-detail'>
            {item && <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;