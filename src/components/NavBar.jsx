import React from 'react'
import { useLocation } from 'react-router-dom'

const NavBar = () => {

    const location = useLocation()

  return (
    <div className='bg-stone-900 px-2 py-3 flex flex-col items-center'>
        <a href="/">
            <h1 className='font-serif text-white text-3xl py-5'>LT IT Solutions</h1>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/967px-Emirates_logo.svg.png" alt="" className='object-contain h-32 py-5'/> */}
        </a>
        <div className='flex justify-center pb-3'>
            <a href="/">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 hover:font-semibold py-3`} href="/projects">
                Home
            </button>
            </a>
            <a href="/solutions">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/solutions" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 hover:font-semibold py-3`} href="/projects">
                Solutions
            </button>
            </a>
            <a href="/verticals">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/verticals" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 hover:font-semibold py-3`} href="/projects">
                Verticals
            </button>
            </a>
            <a href="/contact">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/contact" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 hover:font-semibold py-3`} href="/projects">
                Contact
            </button>
            </a>
        </div>
    </div>
  )
}

export default NavBar