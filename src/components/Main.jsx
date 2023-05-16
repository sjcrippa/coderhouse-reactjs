import React from 'react';

import ItemListContainer from './containers/itemListContainer/ItemListContainer';
import BtnForCounter from './containers/BtnForCounter';
import BrandTitle from './containers/BrandTitle';
const Main = () => {

    return (
        <>
            <BrandTitle />
            <div className='mt-[40rem]'>
                <ItemListContainer />
                <BtnForCounter />
            </div>
        </>
    )
}

export default Main