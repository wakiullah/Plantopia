import React from 'react'
import Container from '../Container'
import SectionWrapper from '../UI/SectionWrapper'
import ProductItem from '../UI/ProductItem'
import Carousel from 'react-multi-carousel'
import { CarouselButton } from '../UI/CarouselIcon'



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

export default function SpecialProducts() {
    const a = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <Container>
            <SectionWrapper tittle={'Special Products'}>
                <Carousel arrows={true} renderButtonGroupOutside={true} customButtonGroup={<CarouselButton />} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} className='' showDots={false} responsive={responsive}>
                    {a.map((item, i) => {
                        return (<div className='m-3' key={i} > <ProductItem /></div>)
                    })}
                </Carousel>
            </SectionWrapper>
        </Container>
    )
}
