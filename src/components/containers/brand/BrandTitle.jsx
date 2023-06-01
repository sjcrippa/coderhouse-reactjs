import React from 'react';

import BrandBtns from './BrandBtns';

const BrandTitle = () => {
    return (
        <>
            <div className=' flex flex-col mx-auto text-center text-white cursor-default'>
                <h1 className='md:p-16 xl:p-12 mt-24 md:mt-5 text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]'>
                    paco rabanne
                </h1>
                <h2 className='mt-40 md:mt-24 text-4xl md:text-5xl lg:text-6xl uppercase'>
                    nuestros nuevos e icónicos lanzamientos
                </h2>
            </div>
            <BrandBtns />
        </>
    )
}

export default BrandTitle;