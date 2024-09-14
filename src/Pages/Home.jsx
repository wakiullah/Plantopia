import React from 'react'
import Hero from '../Components/Home/Hero'
import AboutCard from '../Components/Home/UI/AboutCard'
import HomeSmallAbout from '../Components/Home/HomeSmallAbout'
import CategoryCard from '../Components/Home/UI/CategoryCard'
import TrandingProducts from '../Components/Home/TrandingProducts'
import ReviewHome from '../Components/Home/ReviewHome'
import HomeOfferSection from '../Components/Home/HomeOfferSection'
import SpecialProducts from '../Components/Home/SpecialProducts'
import LatestNews from '../Components/Home/LatestNews'
import EmailSubcription from '../Components/Home/EmailSubcription'

export default function Home() {
    return (
        <div>
            <Hero />
            <AboutCard />
            <HomeSmallAbout />
            <CategoryCard />
            <TrandingProducts />
            <ReviewHome />
            <HomeOfferSection />
            <SpecialProducts />
            <LatestNews />
            <EmailSubcription />
        </div>
    )
}
