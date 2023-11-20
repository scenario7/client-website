import React from 'react'

const WhatWeDo = () => {
  return (
    <div className='bg-stone-900 lg:px-3 lg:py-20 px-10 lg:space-x-20 lg:items-start flex flex-col-reverse items-center justify-center lg:flex-row md:flex-row'>
        <div className='flex flex-col items-center justify-center space-y-10 pt-10 pb-10'>
        <div className='bg-stone-950 flex flex-col lg:flex-row md:flex-row px-3 lg:px-5  py-3 pt-3 pb-3 justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-12 lg:h-12 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
            </svg>
        <div className='flex flex-col items-center lg:items-start md:items-start md:justify-start lg:justify-start w-80 md:pl-3 lg:pl-3 '>
            <h1 className='font-sans text-md text-white text-left font-bold'>Digital Marketing</h1>
            <p className='font-sans text-xs lg:text-sm text-gray-400 text-center md:text-left lg:text-left'>We drive growth through strategic digital marketing campaigns. With expertise in SEO, social media, and online advertising, we ensure your brand gets noticed and your message resonates.</p>
        </div>
</div>

<div className='bg-stone-950 flex flex-col lg:flex-row md:flex-row px-3 py-3 lg:px-5  pt-3 pb-3 justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-12 lg:h-12 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>

    <div className='flex flex-col items-center lg:items-start md:items-start md:justify-start lg:justify-start w-80 md:pl-3 lg:pl-3 '>
        <h1 className='font-sans text-md text-white text-left font-bold'>Web Development</h1>
        <p className='font-sans text-xs lg:text-sm text-gray-400 text-center md:text-left lg:text-left'>Crafting interactive and responsive web solutions tailored to your needs. From front-end development to back-end infrastructure, we deliver seamless digital experiences.</p>
    </div>
</div>

<div className='bg-stone-950 flex flex-col lg:flex-row md:flex-row px-3 py-3 lg:px-5  pt-3 pb-3 justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 lg:w-12 lg:h-12 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>

    <div className='flex flex-col items-center lg:items-start md:items-start md:justify-start lg:justify-start w-80 md:pl-3 lg:pl-3 '>
        <h1 className='font-sans text-md text-white text-left font-bold'>Graphic Design</h1>
        <p className='font-sans text-xs lg:text-sm text-gray-400 text-center md:text-left lg:text-left'>Elevate your brand with captivating visuals. Our graphic design team creates stunning imagery and branding materials that leave a lasting impression on your audience.</p>
    </div>
</div>

            
        </div>
        <div className='flex flex-col lg:w-1/4 space-y-5 lg:space-y-10 items-center'>
            <h1 className='tracking-widest text-white text-8xl'>...</h1>
            <h1 className='text-white text-4xl font-serif'>What We Do</h1>
            <h1 className='text-white text-md font-sans'>Transforming Ideas into Engaging Media Experiences, Enhancing Your Brand's Digital Footprint</h1>
            <a href="/projects">
                <button className='bg-blue-600 w-40 hover:bg-white  text-white hover:text-blue-600 transition'>
                    <h1 className='font-serif text-xl py-3'>Projects</h1>
                </button>
            </a>
        </div>
    </div>
  )
}

export default WhatWeDo