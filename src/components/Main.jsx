import React from 'react';

import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import BrandTitle from './containers/BrandTitle';
const Main = () => {

    return (
        <>
            <BrandTitle />
            <div className='mt-[40rem]'>
                <ItemListContainer />
            </div>
        </>
    )
}

export default Main