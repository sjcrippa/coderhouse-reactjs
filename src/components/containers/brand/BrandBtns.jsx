import React from 'react'
import { Link } from 'react-router-dom'

const BrandBtns = () => {
    return (
        <>
            <div className='mt-10 flex justify-center gap-5 text-sm'>
                    <button
                    className='bg-white p-3 px-16 items-center rounded-md shadow-lg shadow-black/60 hover:bg-indigo-600 hover:text-white'>
                        <Link to={"/productos"}>PRODUCTO</Link> 
                    </button>
                    <button
                    className='bg-white p-3 px-16 items-center rounded-md shadow-lg shadow-black/60 hover:bg-indigo-600 hover:text-white'>
                        <Link to={"/productos"}>PRODUCTO</Link> 
                    </button>
                    
            </div>
        </>
    )
}

export default BrandBtns