import React from 'react'

const Item = ({ producto }) => {
    return (
        <>
            <div className='mt-10 card container mx-auto text-center'>
                <div className='grid grid-cols-3 border-2 m-10 p-10 '>
                    <img
                        className='mx-auto'
                        src={producto.image}
                        alt={producto.name}
                    />
                    <h2>{producto.name}</h2>
                    <p>For {producto.gender}</p>
                    <p>$ {producto.price}</p>
                    <p>{producto.description}</p>
                </div>
            </div>
        </>
    )
}

export default Item