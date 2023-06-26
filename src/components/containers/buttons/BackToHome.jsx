import React from 'react'
import { Link } from 'react-router-dom'

const BackToHome = () => {
    return (
        <>
            <div className='text-start mt-5 m-2'>
                <button className='p-2 text-white uppercase tracking-widest border shadow-sm rounded-3xl shadow-black/60 hover:bg-slate-900 transition-colors duration-200'>
                    <Link to={'/home'}>Go back to Home</Link>
                </button>
            </div>
        </>
    )
}

export default BackToHome