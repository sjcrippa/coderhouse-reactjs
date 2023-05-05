import React from 'react'
import ContactForm from './containers/ContactForm'

const Contact = () => {
    return (
        <>
            <div className='container grid shrink mx-auto justify-center rounded-xl p-5 max-w-fit w-96 shadow-2xl font-[Verdana] font-bold mb-10 bg-red-500'>
                <ContactForm />
                <div className='grid grid-cols-2 mt-2 pt-2'>
                    <button
                        className='mx-auto bg-red-300 rounded-xl w-20 shadow-xl hover:bg-slate-700 hover:text-white'
                        type='submit'
                    >
                        Login
                    </button>
                    <button
                        className='mx-auto bg-red-300 rounded-xl w-20 shadow-xl hover:bg-slate-700 hover:text-white'
                        type='reset'
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default Contact