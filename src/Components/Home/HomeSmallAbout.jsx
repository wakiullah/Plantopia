import React from 'react'
import Container from '../Container'
import Button from '../UI/Button'
import { MenuButton } from '@headlessui/react'

export default function HomeSmallAbout() {
    return (
        <Container>
            <div className='w-2/3 m-auto text-center py-10 mt-20'>
                <h1 className='text-3xl mb-8'>Plants Make Life Better</h1>
                <p className='mb-8 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non, atque, ipsam debitis aliquam necessitatibus quas perferendis est soluta voluptatum asperiores nisi at iure veritatis quam odit, quidem animi corporis a.</p>
                <Button text={'REad more'} />
            </div>
        </Container>
    )
}
