import React from 'react';

import { Link } from 'react-router-dom';

const ViewMore = () => {
    return (
        <>
            <div className='container mx-auto'>
                <div className='flex justify-center items-center'>
                    <button className='mt-2 p-1 px-10 rounded-lg mb-2 bg-indigo-700 text-white font-light text-md hover:bg-indigo-500'>
                        <Link to={"/productos"}>View more</Link>
                    </button>
                </div>
            </div>
        </>
    );
};

export default ViewMore;