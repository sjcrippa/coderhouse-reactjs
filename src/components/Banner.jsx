import React from 'react';

import banner from '../assets/banner.jpg';

const Banner = () => {
    return (
        <>
            <div className="wrapper">
                <header className='header'>
                    <img src={banner} alt="banner" className="background" />
                    <h1>PACO RABANNE BANNER</h1>
                </header>
            </div>
        </>
    )
}

export default Banner