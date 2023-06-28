import React from 'react'

import article from '../../../assets/article.jpg'
import Discover from '../buttons/Discover';
import '../../../App.css';

const Article = () => {
  return (
    <>
      <div className='w-full h-screen mb-64 md:mb-16 box-shadow'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <article>
            <img className='bg-local md:w-full art-image' src={article} alt="'fame'" />
          </article>
          <article>
            <div className='p-24 px-16 md:p-32 md:px-32 bg-rose-300 h-[80vh] md:h-[115vh]'>
              <h1 className='uppercase font-[Belanosima] text-3xl font-bold tracking-wider'>desvela tu amor con nuestro regalo exclusivo</h1>
              <p className='mt-16 text-xl font-[Belanosima]'>
                The new collector edition by paco Rabanne. Each order of a fragrance from the Fame range will come with a special gift.
              </p>
              <Discover />
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Article