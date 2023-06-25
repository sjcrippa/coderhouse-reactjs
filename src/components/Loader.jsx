import React from 'react';
import { GridLoader } from 'react-spinners';

const Loader = () => {

    return (
        <>
            <div className='container mx-auto'>
                <div className='flex justify-center mt-72'>
                    <GridLoader
                        color="#3C3CE5"
                        size={25}
                    />
                </div>
            </div>
        </>
    )
}

export default Loader