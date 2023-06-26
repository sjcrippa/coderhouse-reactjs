import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import { github, linkedin, logosjc, logoDos, twitter } from '../assets';

const Footer = () => {
    return (
        <>
            <footer className='mt-10 flex flex-col w-full'>
                <div className='flex justify-between'>
                    <Link to={'/'}>
                        <img className='w-32 p-2 rounded-lg' src={logoDos} alt="logo" />
                    </Link>
                    <ul className='flex translate-x-10 items-center gap-5'>
                        <li><img src={github} alt="github" /><Link to="/"></Link></li>
                        <li><img src={twitter} alt="twitter" /><Link to="/"></Link></li>
                        <li><img src={linkedin} alt="linkedin" /><Link to="/"></Link></li>
                    </ul>
                    <div className='flex items-center mr-5'>
                        <p className='text-lg font-semibold cursor-default font-serif'>
                            Developed by
                        </p>
                        <a href="https://github.com/sjcrippa" target='_blank'>
                            <img
                                className='inline h-24 ml-5 hover:scale-110 duration-200'
                                src={logosjc}
                                alt="logo" />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer