import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div className='grid grid-cols-1 gap-2 w-72'>
                <input
                    className='pl-2 text-md rounded-xl shadow-xl hover:bg-slate-700 hover:text-white'
                    type='text'
                    placeholder='Type your name' />
                <input
                    className='pl-2 text-md rounded-xl shadow-xl hover:bg-slate-700 hover:text-white'
                    type='email'
                    placeholder='Type your email' />
                <input
                    className='pl-2 text-md rounded-xl shadow-xl hover:bg-slate-700 hover:text-white'
                    type='password'
                    placeholder='Type your password.' />
            </div>
        </>
    )
}

export default ContactForm