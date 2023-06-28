import React from 'react';
import { Link } from 'react-router-dom';

const Discover = () => {
  return (
    <>
      <div className='mt-32'>
        <button className='bg-slate-950 px-16 md:px-28 py-4 rounded'>
          <span className='text-white text-sm tracking-widest uppercase'>
            <Link to={'/productos'}>discover</Link>
          </span>
        </button>
      </div>
    </>
  )
}

export default Discover;