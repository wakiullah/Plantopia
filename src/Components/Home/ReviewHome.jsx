import React from 'react'
import Container from '../Container'
import Carousel from 'react-multi-carousel'
import ReviewHomeItem from './UI/ReviewHomeItem'
import 'react-multi-carousel/lib/styles.css';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/outline';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const ButtonGroup = ({ next, previous, goToSlide, ...rest }, any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group gap-4 relative  justify-center -mt-[7] 
        items-center w-full">
            <div className='absolute bottom-0 gap-4 left-1/2 flex -translate-y-1/2  -translate-x-1/2 '>
                <button className='block w-8 h-8 relative bg-primary hover:bg-white group rounded-full' onClick={() =>
                    previous()}>
                    <ArrowLeftCircleIcon aria-hidden="true" className="h-6 w-6 top-1/2 left-1/2 group-hover:text-primary  -translate-x-1/2 -translate-y-1/2  absolute   text-white " />
                </button>
                <button onClick={() => next()}><span className='block w-8 h-8 relative bg-primary group hover:bg-white hover:text-primary rounded-full ' >
                    <ArrowRightCircleIcon aria-hidden="true" className=" top-1/2 left-1/2 group-hover:text-primary -translate-x-1/2 -translate-y-1/2  absolute  text-white h-6 w-6" /></span>
                </button>
            </div>
        </div>

    );
};

export default function ReviewHome() {
    const ab = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <div style={{
            backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvqAxjNLcRheJkxA3BZ6rwVGipXkNNfNRRpQ&s')`

        }} className="bg-cover bg-center bg-fixed">
            <div className='w-full h-full bg-black bg-opacity-50'>

                <Container>
                    <Carousel arrows={true} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} infinite={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} className='' showDots={false} responsive={responsive}>
                        {
                            ab.map((item, i) => {
                                return (
                                    <ReviewHomeItem key={i} />
                                )
                            })
                        }
                    </Carousel >
                </Container >
            </div >
        </div >
    )
}
