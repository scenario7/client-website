// ProjectCard.js
import React from 'react';

const ProjectCard = ({ image, title, publishedAt, body }) => {
  return (
    <div className='bg-stone-800 min-w-full flex lg:flex-row flex-col justify-center lg:justify-start items-center lg:items-start px-5 py-5'>
      <img src={image} alt={title} className='h-32 w-32 object-contain' />
      <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start lg:pl-5 w-full'>
        <div className='flex lg:flex-row flex-col justify-center lg:justify-between w-full'>
          <h1 className='font-sans text-2xl pb-4 text-white font-semibold'>{title}</h1>
          <h1 className='font-sans text-lg text-gray-500 font-semibold'>{publishedAt}</h1>
        </div>
        <h1 className='font-sans text-lg lg:text-left text-gray-300'>{body}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
