import React from 'react';

import '../App.css';
import { logo } from '../components/assets';
const Footer = () => {
    return (
        <>
            <footer>
                <p className='text-center'>
                    Developed by 
                    <img 
                    className='inline w-20 h-20 ml-5'
                    src={logo} 
                    alt="logo" />
                </p>
                
            </footer>
        </>
    )
}

export default Footer