import React from 'react'

const Contact = () => {
    return (
        <>
            <div className='grid mx-auto justify-center text-lg font-[Verdana] font-bold mb-10'>
                <div className='grid grid-cols-1 bg-red-500'>
                    <input type='text' placeholder='Type your name' />
                    <input type='email' placeholder='Type your email' />
                    <input type='password' placeholder='Type your password.' />
                </div>
            </div>
        </>
    )
}

export default Contact