import React from 'react'
import Intro from '../components/Intro'
import Offers from '../components/Offers'
import Footer from '../components/Footer'
import LandingHeader from '../components/LandingHeader'



export default function Landing() {
  return (
    <div>
    <LandingHeader />    
    <Intro/>
    <Offers/>
    <Footer/>
    </div>
  )
}
