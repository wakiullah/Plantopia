import React from 'react'
import Container from '../Container'
import SectionWrapper from '../UI/SectionWrapper'
import { Grid2 } from '@mui/material'
import BigImageCard from '../UI/BigImageCard'

export default function LatestNews() {
    const news = [1, 2, 3]
    return (
        <Container >
            <div className='mt-60'>

                <SectionWrapper tittle={'Our Latest News'}>
                    <Grid2 container columns={18}>
                        {news.map((n, i) => {
                            return (
                                <Grid2 key={i} size={6}>
                                    <BigImageCard>
                                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    </BigImageCard>
                                </Grid2>
                            )
                        })}
                    </Grid2>
                </SectionWrapper>
            </div>

        </Container>
    )
}
