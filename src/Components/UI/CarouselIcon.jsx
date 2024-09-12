import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";



export const CarouselButton = ({ next, previous, goToSlide, ...rest }, any) => {
    const { carouselState: { currentSlide } } = rest;
    return (
        <div className="carousel-button-group gap-4 relative  justify-center -mt-[7] 
        items-center w-full">
            <div className=' justify-between flex -mt-64 '>
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