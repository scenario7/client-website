import React from 'react'

const CustomerCard = ({image, name}) => {
  return (
    <div className='bg-stone-800 flex flex-col justify-start items-center px-5 py-5 space-y-8'>
        <img src={image} alt={name} className='h-24 w-24 bg-contain'/>
        <h1 className='text-white font-sans text-xl'>{name}</h1>
    </div>
  )
}

export default CustomerCard