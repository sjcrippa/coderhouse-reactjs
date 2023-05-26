import React from 'react';

const ItemDetail = ({ item }) => {
    return (
        <>
            <div className='container'>
                <div className='producto-detalle'>
                    <img src={item.image} alt="" />
                    <div>
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail   