import React from 'react';

import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import BrandTitle from './containers/brand/BrandTitle';
const Main = () => {

    return (
        <>
            <BrandTitle />
            <div className='mt-72'>
                <ItemListContainer />
            </div>
        </>
    )
}

export default Main