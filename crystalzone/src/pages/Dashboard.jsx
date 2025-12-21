import React from 'react'
import Header from '../layouts/Header'
import Slider from '../Components/Slider'
import Footer from '../layouts/Footer'
import InfoCard from '../Components/InfoCard'
import ContactUs from './ContactUs'
import ProductCards from '../Components/ProductCards'
import Offers from '../Components/Offers'

const Dashboard = () => {
    return (
        <>
            <Header />
            <Slider />
            <InfoCard />
            <Offers />
            <ProductCards />
            <Footer />
        </>
    )
}

export default Dashboard