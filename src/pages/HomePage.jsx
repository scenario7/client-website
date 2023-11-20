import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'
import CustomFooter from '../components/CustomFooter'

const HomePage = () => {
  return (
    <div className='flex flex-col overscroll-none'>
      <NavBar/>
      <HeroSection></HeroSection>
      <WhatWeDo/>
      <Testimonials/>
      <CustomFooter/>
    </div>
  )
}

export default HomePage