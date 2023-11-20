import React from 'react'
import { useLocation } from 'react-router-dom'

const NavBar = () => {

    const location = useLocation()

  return (
    <div className='bg-stone-900 px-2 py-3 flex flex-col items-center'>
        <a href="/">
            <h1 className='font-etb text-white tracking-tighter text-3xl py-5'>Company Name Here.</h1>
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/967px-Emirates_logo.svg.png" alt="" className='object-contain h-32 py-5'/> */}
        </a>
        <div className='flex justify-center pb-3'>
            <a href="/">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/client-website" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 hover:font-semibold py-3`} href="/projects">
                Home
            </button>
            </a>
            <a href="/projects">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/client-website/projects" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 hover:font-semibold py-3`} href="/projects">
                Projects
            </button>
            </a>
            <a href="/customers">
            <button className={`font-sans text-gray-400 hover:text-white ${location.pathname === "/client-website/customers" ? 'text-white bg-stone-800' : 'text-gray-400 bg-transparent'} px-3 hover:font-semibold py-3`} href="/projects">
                Customers
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