import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import PricingCart from '../components/PricingCart'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
       <Navbar />
       <Heroimg2 heading= "PROJECTS." text=" Some of my most recent works"/>
        <Work />
        <PricingCart />
      <Footer />
    </div>
  )
}

export default Project
