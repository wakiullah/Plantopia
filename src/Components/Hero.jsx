// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Container from './Container';
import { Link } from 'react-router-dom';
import Button from './UI/Button';
import AboutCard from './UI/AboutCard';

export default function Hero() {
    return (
        <>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Container>
                        <div className='md:grid md:grid-cols-2 lg:flex mx-10 lg:mx-0   justify-between py-5 lg:py-20'>
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-8'>
                                    <h2 className=' text-xl lg:text-4xl font-bold'>Plants make a
                                        positive impact on
                                        your environment.
                                    </h2>
                                    <p className='text-slate-500'>Provide your house & office space with the right plants and
                                        let our plant care team keep them flourishing.</p>
                                    <div><Button to={'/'} text={'Explore'} /></div>
                                </div>
                            </div>
                            <img className='object-contain  md:block lg:object-fill' src="https://i.ibb.co.com/vwxJys7/Plants-make-a-positive-impact-on-your-environment-2.png" alt="" />
                        </div>
                    </Container>
                </SwiperSlide>
                <SwiperSlide>
                    <Container>
                        <div className='md:grid md:grid-cols-2 lg:flex mx-10 lg:mx-0   justify-between py-5 lg:py-20'>
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-8'>
                                    <h2 className=' text-xl lg:text-4xl font-bold'>Plants make a
                                        positive impact on
                                        your environment.
                                    </h2>
                                    <p className='text-slate-500'>Provide your house & office space with the right plants and
                                        let our plant care team keep them flourishing.</p>
                                    <div><Button to={'/'} text={'Explore'} /></div>
                                </div>
                            </div>
                            <img className='object-contain  md:block lg:object-fill' src="https://i.ibb.co.com/8xdjy3z/Plants-make-a-positive-impact-on-your-environment-5.png" alt="" />
                        </div>
                    </Container>
                </SwiperSlide>

                <SwiperSlide>
                    <Container>
                        <div className='md:grid md:grid-cols-2 lg:flex mx-10 lg:mx-0   justify-between py-5 lg:py-20'>
                            <div className='flex items-center'>
                                <div className='flex flex-col gap-8'>
                                    <h2 className=' text-xl lg:text-4xl font-bold'>Plants make a
                                        positive impact on
                                        your environment.
                                    </h2>
                                    <p className='text-slate-500'>Provide your house & office space with the right plants and
                                        let our plant care team keep them flourishing.</p>
                                    <div><Button to={'/'} text={'Explore'} /></div>
                                </div>
                            </div>
                            <img className='object-contain  md:block lg:object-fill' src="https://i.ibb.co.com/KLF7HgS/Plants-make-a-positive-impact-on-your-environment-6.png" alt="" />
                        </div>
                    </Container>
                </SwiperSlide>

            </Swiper>
        </>
    );
}

