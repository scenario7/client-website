import React from 'react'

const CustomFooter = () => {
  return (
    <div className="flex flex-col">
    <div className='bg-blue-600 flex px-5 py-10 justify-between items-center'>
        <div className='flex flex-col justify-start items-start'>
            <h1 className='font-etb tracking-tighter text-left lg:text-3xl md:text-3xl text-xl text-white'>Company Name Here</h1>
            <h1 className='font-sans lg:text-lg md:text-lg text-md text-white'>Bengaluru, KA</h1>
        </div>
        <div>
            <h1 className='font-sans text-white lg:text-lg md:text-lg text-md'>+91 12345 67890</h1>
        </div>
    </div>
    <div className="bg-blue-950 text-white py-3">
        Designed and Developed by <span className=''>Kevin Thomas</span> © 
    </div>
    </div>
  )
}

export default CustomFooter