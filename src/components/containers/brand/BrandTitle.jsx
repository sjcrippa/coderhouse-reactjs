import React from 'react';
import BrandBtns from './BrandBtns';


const BrandTitle = () => {
    return (
        <>
            <div className=' flex flex-col mx-auto text-center text-white cursor-default'>
                <h1 className='md:p-16 xl:p-12 mt-24 md:mt-10 xl:mt-16 text-6xl md:text-7xl lg:text-8xl xl:text-[10rem]'>
                    paco rabanne
                </h1>
                <h2 className='mt-64 md:mt-48 lg:mt-56 text-4xl md:text-5xl lg:text-6xl uppercase backdrop-blur-sm w-fit mx-auto'>
                    our new and iconic releases
                </h2>
{/*                 <BrandBtns />
 */}            </div>
        </>
    )
}

export default BrandTitle;