import React from 'react';

import ItemListContainer from './containers/ItemListContainer';
import BtnForCounter from './containers/BtnForCounter';
import { pacoDesktop } from './assets';
const Main = () => {

    return (
        <>
            <img
            className='' 
            src={pacoDesktop} 
            alt="Desktop" />
            <ItemListContainer />
            <BtnForCounter />
        </>
    )
}

export default Main