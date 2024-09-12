import React from 'react'
import Container from '../Container'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import ProductItem from '../UI/ProductItem';
import Grid from '@mui/material/Grid2';
import SectionWrapper from '../UI/SectionWrapper';

export default function TrandingProducts() {
    const ab = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <Container>
            <SectionWrapper tittle={'Trending Products'}>

                <div className=''>
                    <Grid spacing={4} container columns={16}>

                        {ab.map((icon, i) => {
                            return (
                                <Grid key={i} size={4}>
                                    <ProductItem />
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </SectionWrapper>
        </Container>
    )
}
