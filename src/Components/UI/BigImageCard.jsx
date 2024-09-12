import React from 'react'

export default function BigImageCard({ children }) {
    return (
        <div className='text-center group relative flex justify-center m-2'>
            <div className={`h-[500px] w-[380px] group-hover:bg-120 hover:transition bg-cover bg-[url('https://i.ibb.co.com/WfDSFvz/category-img-2-380x424.webp')]`}>
            </div>
            <div className='absolute w-4/5 bg-slate-100 bottom-8 px-2 py-2'>
                <h2 className='text-2xl font-bold'>Indoor House Plant</h2>
                {children}
            </div>
        </div>
    )
}
