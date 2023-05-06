import React from 'react'

import ContactForm from './containers/ContactForm'

const Contact = () => {
    return (
        <>
            <div className='container flex shrink justify-center mx-auto mt-5 p-10 font-[Verdana] font-bold mb-10'>
                <div className='grid grid-cols-1 gap-3 rounded-xl text-center w-96 p-3 shadow-2xl bg-red-500'>
                <p className='text-xl text-slate-900'>Contact Us</p>
                    <ContactForm />
                    <div className='grid grid-cols-2 mt-2 pt-2 text-slate-900'>
                        <button
                            className='mx-auto font-[Verdana] font-bold text-lg text-slate-900 font bg-red-300 rounded-xl w-20 shadow-xl hover:bg-slate-700 hover:text-white'
                            type='submit'
                        >
                            Login
                        </button>
                        <button
                            className='mx-auto font-[Verdana] font-bold text-lg text-slate-900 font bg-red-300 rounded-xl w-20 shadow-xl hover:bg-slate-700 hover:text-white'
                            type='reset'
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact