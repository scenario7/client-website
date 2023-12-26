import React from 'react'
import { useLocation } from 'react-router-dom'
import companylogo2 from '../images/companylogo2.jpg'
const NavBar = () => {

    const location = useLocation()

  return (
    <div className=''>
      <div className='bg-white w-screen px-5 py-2 outline outline-blue-600 outline-4 flex items-center justify-center sticky top-0'>
        <img src='../images/companylogo2.jpg' alt="" className='h-12'/>
      </div>
    <div className='bg-stone-900 px-6 py-3 flex flex-col items-center'>
        <div className="flex items-center justify-between w-full">
        <a href="/">
            <h1 className='font-serif text-white text-2xl py-5 text-left'>LT IT Solutions</h1>
        </a>
        <div className='flex flex-col items-end'>
          <a href='tel:+971508263954'>
            <h1 className='font-sans text-white lg:text-lg md:text-lg text-xs'>+971 50 8263954</h1>
          </a>
          <a href='mailto:info@ltitsolutions.com'>
            <h1 className='font-sans text-white lg:text-lg md:text-lg text-xs'>info@ltitsolutions.com</h1>
          </a>
        </div>
        </div>
        <div className='flex items-center justify-center md:items-start lg:items-start w-full md:justify-start lg:justify-start pb-3 space-x-2'>
            <a href="/">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 py-2 rounded-full`} href="/projects">
                Home
            </button>
            </a>
            <a href="/solutions">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/solutions" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 py-2 rounded-full`} href="/projects">
                Solutions
            </button>
            </a>
            <a href="/verticals">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/verticals" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 py-2 rounded-full`} href="/projects">
                Verticals
            </button>
            </a>
            <a href="/contact">
            <button className='font-sans hover:bg-blue-600 hover:text-white transition ease-out bg-white text-blue-600 px-3 py-2 rounded-full' href="/projects">
                Contact
            </button>
            </a>
        </div>
    </div>
    </div>
  )
}

export default NavBar