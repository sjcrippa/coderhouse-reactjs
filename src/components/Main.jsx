import React from 'react';

import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import BrandTitle from './containers/brand/BrandTitle';
const Main = () => {

    return (
        <>
            <BrandTitle />
            <div className='mt-[30rem]'>
                <ItemListContainer />
            </div>
        </>
    )
}

export default Main