import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({ to, text }) {
    return (
        <Link to={to} className='inline-block leading-6 text-yellow-50 rounded-xl text-md uppercase font-medium cursor-pointer px-10 py-3 bg-primary'>
            {text}
        </Link>
    )
}
