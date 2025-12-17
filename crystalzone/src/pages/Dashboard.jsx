import React from 'react'
import Header from '../layouts/Header'
import Slider from '../Components/Slider'
import Footer from '../layouts/Footer'
import InfoCard from '../Components/InfoCard'
import ContactUs from './ContactUs'

const Dashboard = () => {
    return (
        <>
            <Header />
            <Slider />
            <InfoCard />
            <Footer />
        </>
    )
}

export default Dashboard