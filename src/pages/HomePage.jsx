import React from 'react'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import WhatWeDo from '../components/WhatWeDo'
import Testimonials from '../components/Testimonials'
import CustomFooter from '../components/CustomFooter'
import { Lines } from 'react-preloaders'

const HomePage = () => {
  const meta = {
    title : 'LT IT Solutions Home',
    description : "Welcome to LT IT solutions. We are pioneers of technology for the next generation",
    meta : {
        charset : 'utf-8',
        name : {
            keywords : 'it solutions, lt it, av solutions, hospitality management, 3d graphic design'
        }
    }
}

  return (
    
    <div className='flex flex-col overscroll-none'>
      <NavBar/>
      <HeroSection></HeroSection>
      <WhatWeDo/>
      <CustomFooter/>
    </div>
  )
}

export default HomePage