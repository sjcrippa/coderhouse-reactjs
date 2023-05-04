import React from 'react';

import '../App.css';
import { logo } from '../components/assets';
const Footer = () => {
    return (
        <>
            <footer className='flex w-full wx-auto justify-center items-center'>
                <p className='font-mono text-lg font-semibold cursor-default hover:text-slate-100 duration-200'>
                    Developed by
                </p>
                <a href="/">
                    <img
                    className='inline w-20 h-20 ml-5 hover:scale-125 duration-200'
                    src={logo}
                    alt="logo" />
                </a>

            </footer>
        </>
    )
}

export default Footer