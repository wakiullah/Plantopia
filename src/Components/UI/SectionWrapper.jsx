import React from 'react'

export default function SectionWrapper({ tittle, children }) {
    return (<>
        <div className='text-center text-4xl font-semibold py-8'>
            <h2>{tittle}</h2>
        </div>
        {children}</>
    )
}
