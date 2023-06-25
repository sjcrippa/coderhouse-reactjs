import React from 'react'
import { Link } from 'react-router-dom'

const SeeCart = () => {
    return (
        <>
            <div className='flex justify-center '>
                <button className='p-1 px-6 rounded-lg flex items-center text-sm font-sans font-semibold text-white bg-indigo-800 hover:bg-indigo-600 shadow-lg shadow-black/60 duration-150'>
                    <Link to={'/cart'}>Go to Cart</Link>
                </button>
            </div>
        </>
    )
}

export default SeeCart