import React from 'react'
import { Link } from 'react-router-dom'

const SeeCart = () => {
    return (
        <>
            <div className='flex justify-center '>
                <button className='p-2 px-16 text-black font-bold uppercase tracking-widest border shadow-sm rounded-3xl shadow-black/60 hover:text-white hover:bg-slate-900 transition-colors duration-200'>
                    <Link to={'/cart'}>Go to Cart</Link>
                </button>
            </div>
        </>
    )
}

export default SeeCart