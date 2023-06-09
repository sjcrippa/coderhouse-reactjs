import React from 'react';
import { Link } from 'react-router-dom';

const BrandBtns = () => {

    return (
        <>
            <div className='mt-12 flex justify-center text-base'>
                <div className='flex flex-col md:flex md:flex-row gap-7'>
                    <button
                        className='bg-white p-3 px-16 items-center rounded-md shadow-lg shadow-black/60 hover:bg-slate-950 hover:text-white'>
                        <Link to={`/item/12`}>Phantom</Link>
                    </button>
                    <button
                        className='bg-white p-3 px-16 items-center rounded-md shadow-lg shadow-black/60 hover:bg-slate-950 hover:text-white'>
                        <Link to={"/item/11"}>Lady Millon Empire</Link>
                    </button>

                </div>
            </div>
        </>
    )
}

export default BrandBtns;