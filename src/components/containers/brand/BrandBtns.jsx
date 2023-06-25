import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { doc, getDoc } from "firebase/firestore";

import { db } from '../../../firebase/config';

const BrandBtns = () => {
/*     const [prod, setProd] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, 'productos', id).get('2FEn7FgMh5dPSjs9RhiBce');
        getDoc(docRef)
            
    }, [id]); */

    return (
        <>
            <div className='mt-12 flex justify-center text-base'>
                <div className='flex flex-col md:flex md:flex-row gap-7'>

                    <button
                        className='bg-white p-3 px-16 items-center rounded-md shadow-lg shadow-black/60 hover:bg-slate-950 hover:text-white'>
                        {/* <Link to={`/item/${id}`}>Phantom</Link> */}
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