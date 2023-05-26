import React, { useEffect, useState } from 'react';

import { pedirProdsPorId } from '../../../functions/pedirProdsPorId';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ itemId }) => {
    const [item, setItem] = useState(null);

    useEffect(() => {
        pedirProdsPorId(itemId)
            .then((res) => {
                setItem(res)
            })
    }, [])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
}

export default ItemDetailContainer;