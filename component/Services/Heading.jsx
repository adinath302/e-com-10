import React from 'react'

const Heading = ({ title, subtitle }) => {
    return (
        <div className='text-center mb-10 max-w-[600px] mx-auto space-y-2'>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </div>
    )
}

export default Heading