import React from 'react'
import { useLocation } from 'react-router-dom'

const NavBar = () => {

    const location = useLocation()

  return (
    <div className='bg-stone-900 px-8 py-3 flex flex-col items-center'>
        <div className="flex items-center justify-between w-full">
        <a href="/">
            <h1 className='font-serif text-white text-3xl py-5 text-left'>LT IT Solutions</h1>
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
        <div className='flex items-start w-full justify-start pb-3'>
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
  )
}

export default NavBar