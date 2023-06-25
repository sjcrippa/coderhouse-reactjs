import React from 'react';
import { BarLoader } from 'react-spinners';

const Loader = () => {

    return (
        <>
            <div className='container mx-auto'>
                <div className='flex justify-center mt-72'>
                    <BarLoader color="#36d7b7" />
                </div>
            </div>
        </>
    )
}

export default Loader