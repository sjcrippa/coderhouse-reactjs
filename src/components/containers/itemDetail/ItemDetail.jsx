import React from 'react'

import Item from '../itemListContainer/Item'

const ItemDetail = ( {producto} ) => {
    return (
        <>
            <div>
                <Item producto={producto.id} />
            </div>
        </>
    )
}

export default ItemDetail   