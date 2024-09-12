import React from 'react'
import Button from '../../UI/Button'

export default function HomeofferItem() {
    return (
        <div className='bg-cover py-8 bg-center' style={{ backgroundImage: `url('https://soilplant-codezeel.myshopify.com/cdn/shop/files/cms-banner-2.jpg?v=1668776330')` }}>
            <div className='w-2/5 ml-auto'>
                <h4 className='text-lg '>Flat 40% Discount</h4>
                <h1 className='text-3xl font-bold my-6 '>Different House Plant</h1>
                <Button text={'Shop now'} />
            </div>
        </div>
    )
}
