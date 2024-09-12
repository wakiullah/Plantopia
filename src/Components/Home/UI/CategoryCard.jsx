import Container from '../../Container'
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BigImageCard from '../../UI/BigImageCard';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};




export default function CategoryCard() {
    let ab = [1, 2, 3, 4, 5, 6]
    return (
        <Container>
            <Carousel infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} className='' showDots={false} responsive={responsive}>
                {ab.map((icon, i) => {
                    return (
                        <BigImageCard key={i}>
                            <Link className='text-lime-700 text-sm hover:underline' to={'/'}>SHOP NOW</Link>
                        </BigImageCard>
                    )
                })}
            </Carousel>;
        </Container>
    )
}
