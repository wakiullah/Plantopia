import React from 'react'

export default function Container({ children }) {
    return (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
            {children}
        </section>
    )
}
