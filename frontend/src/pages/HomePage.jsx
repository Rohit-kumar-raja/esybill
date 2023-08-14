import React from "react"
import Navbar from "../components/homepage/Navbar.jsx"
import HeroSection from "../components/homepage/HeroSection.jsx"
import Features from "../components/homepage/Features.jsx"
import MainFeatures from "../components/homepage/MainFeatures.jsx"
import OfferSection from "../components/homepage/OfferSection.jsx"
import Testimonials from "../components/homepage/Testimonials.jsx"
import Contact from "../components/homepage/Contact.jsx"
import Footer from "../components/homepage/Footer.jsx"

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <Features/>
      <MainFeatures/>
      <OfferSection/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default HomePage