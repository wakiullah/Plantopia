import React from 'react'
import Container from '../Container'
import SectionWrapper from '../UI/SectionWrapper'
import { TextField } from '@mui/material'
import Button from '../UI/Button'

export default function EmailSubcription() {
    return (
        <Container>
            <SectionWrapper tittle={'Get Your Email Update'}>
                <div className='text-center'>
                    <p className='text-gray-500'>Subscribe to our latest newsletter to get news about special discounts.</p>
                    <div className='flex gap-2 justify-center mt-5'>
                        <TextField id="outlined-basic" label="Email " variant="outlined" type='Email' />
                        <Button text={"Subscribe"} />
                    </div>
                </div>
            </SectionWrapper>
        </Container>
    )
}
