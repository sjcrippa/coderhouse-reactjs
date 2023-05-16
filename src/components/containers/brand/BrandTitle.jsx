import React from 'react'

import BrandBtns from './BrandBtns'

const BrandTitle = () => {
    return (
        <>
            <div className='flex flex-col mx-auto mt-9 text-center text-white cursor-default'>
                <h1 className='text-6xl md:text-8xl xl:text-[10rem]'>paco rabanne</h1>
                <h2 className='mt-72 xl:mt-60 text-4xl md:text-5xl '>
                    NUESTROS NUEVOS E ICONICOS LANZAMIENTOS
                </h2>
            </div>
            <BrandBtns />
        </>
    )
}

export default BrandTitle