import React from 'react';

import '../App.css';
import { logo, pacoLogo } from '../assets';
import NavItems from './containers/navbar/NavItems';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <footer className='mt-8 mb-3 flex flex-col w-full mx-auto'>
                <div className='flex text-white'>
                    <Link to={'/'}>
                        <img className='w-32 ml-5 bg-white p-2 rounded-lg' src={pacoLogo} alt="logo" />
                    </Link>
                    <ul className='flex mx-auto items-center gap-5'>
                        <li>Github</li>
                        <li>Linkedin</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className='flex justify-center items-center mt-5'>
                    <p className='text-lg font-semibold cursor-default text-white font-serif'>
                    Developed by
                    </p>
                    <a href="https://github.com/sjcrippa" target='_blank'>
                        <img
                    className='inline w-20 h-20 ml-5 hover:scale-110 duration-200'
                    src={logo}
                    alt="logo" />
                    </a>
                </div>

            </footer>
        </>
    )
}

export default Footer