import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { pedirProdsPorId } from '../../../functions/pedirProdsPorId';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);
    const id = useParams().id

    useEffect(() => {
        pedirProdsPorId(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])

    return (
        <div className='item-detail'>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;