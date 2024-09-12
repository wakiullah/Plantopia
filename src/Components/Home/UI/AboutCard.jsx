import Container from '../../Container'
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

import { ScissorsIcon, ShieldExclamationIcon, SwatchIcon, TrophyIcon } from '@heroicons/react/24/outline'

import "react-multi-carousel/lib/styles.css";
import { useState } from 'react';
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




export default function AboutCard() {
    const [allIcons, setIcons] = useState([ScissorsIcon, ShieldExclamationIcon, SwatchIcon, TrophyIcon])
    return (
        <Container>
            <Carousel infinite={true} removeArrowOnDeviceType={["tablet", "mobile", "desktop"]} className='' showDots={false} responsive={responsive}>

                {allIcons.map((icon, i) => {
                    return <div key={i} className='bg-gray-100 group p-9 cursor-pointer text-center m-2'>
                        <div className='inline-block bg-gray-300 transition-colors group-hover:bg-primary p-6 bg-opacity-50 mb-5 rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="group-hover:text-white size-16">
                                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h2 className='font-semibold text-xl mb-5 '> Green Plants</h2>
                        <p className='text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita!</p>
                    </div>
                })}
            </Carousel>;
        </Container>
    )
}
