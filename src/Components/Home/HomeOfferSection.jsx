import React from 'react'
import Container from '../Container'
import HomeofferItem from './UI/HomeofferItem'
import { Grid2 } from '@mui/material'

export default function HomeOfferSection() {
    return (
        <Container>
            <div className='mt-24'>

                <Grid2 container spacing={5} columns={16}>
                    <Grid2 size={8}>
                        <HomeofferItem />
                    </Grid2>
                    <Grid2 size={8}>
                        <HomeofferItem />
                    </Grid2>

                </Grid2>
            </div>
        </Container>
    )
}
