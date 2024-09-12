import { EyeIcon, HeartIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { Rating } from '@mui/material'
import React, { useState } from 'react'

export default function ProductItem() {

    const [img, setImg] = useState('https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1716491659-81qyD8r7nL.jpg?crop=0.756xw:0.756xh;0.0929xw,0.149xh&resize=980:*')

    const mouseOverHandler = () => {
        setImg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStJGYgO2Y299IY3f873MMtlSy6SSuO2yWSWQ&s')
    }
    const onMouseLeaveHandler = () => {
        setImg('https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1716491659-81qyD8r7nL.jpg?crop=0.756xw:0.756xh;0.0929xw,0.149xh&resize=980:*')
    }

    return (
        <div className='mb-4 transition-all      relative group' onMouseOver={mouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
            <div>
                <img className='object-cover w-full h-72 cursor-pointer transition' src={img} alt="" />
            </div>
            <div className='text-center'>
                <Rating name="read-only" className='mt-3' value={3} readOnly size='small' />
                <h3 className='mt-1 text-xl'>New Garden Flower</h3>
                <div className='flex justify-center mt-1'>
                    <p className='line-through mr-2 text-gray-500'>$300</p>
                    <p className='font-bold text-primary '>$245</p>
                </div>
            </div>
            <div className='tra transition hidden group-hover:flex flex-col gap-2 absolute top-5 right-5'>
                <div className='bg-primary p-1 cursor-pointer hover:bg-gray-700'>
                    <HeartIcon className='w-5 h-5   text-white' />
                </div>
                <div className='bg-primary p-1 cursor-pointer hover:bg-gray-700'>
                    <ShoppingBagIcon className='w-5 h-5  text-white' />
                </div>
                <div className='bg-primary p-1 cursor-pointer hover:bg-gray-700'>
                    <EyeIcon className='w-5 h-5  text-white' />
                </div>
                <div></div>
            </div>
        </div>
    )
}
