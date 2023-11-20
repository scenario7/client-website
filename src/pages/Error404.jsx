import React from 'react'
import NavBar from '../components/NavBar'
import CustomFooter from '../components/CustomFooter'

const Error404 = () => {
  return (
    <div className='bg-stone-950 flex flex-col justify-between min-h-screen'>
        <NavBar/>
        <div className='space-y-10 px-5'>
            <h1 className='text-8xl text-white font-serif'>
                404
            </h1>
            <h1 className='text-xl text-white font-sans pb-5'>The page you were looking for can't be found!</h1>
            <a href="/">
                <button className='bg-blue-600 px-3 py-3 text-white font-sans hover:text-blue-600 hover:bg-white'>
                    Home Page
                </button>
            </a>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default Error404