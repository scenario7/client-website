import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import auditorium from '../images/auditorium.png';
import classroom from '../images/classroom.png';
import projector from '../images/projector.png';

const images = [
  auditorium,
  classroom,
  projector
];

const titles = [
  "AV Solutions",
  "3D Graphic Design",
  "Business Management"
]

const colors = [
  '#ffff00',
  '#800080',
  '#ff0000'
]

const textColors = [
  '#fbec5d',
  '#e4a0f7',
  '#fa8072'
]

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3500); // Increased auto-transition time to 3.5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  return (
    <div className='relative lg:h-[32rem] md:h-[32rem] h-96 flex justify-center items-center flex-col'>
          <div className='absolute bg-blue-600 top-0 left-0 right-0 bottom-0' style={{ opacity: 0.4 , backgroundColor : colors[currentImage]}}></div>
      <div
        className='bg-no-repeat absolute top-0 left-0 right-0 bottom-0'
        style={{
          backgroundImage: `url('${images[currentImage]}')`,
          backgroundSize: 'cover',
          mixBlendMode: 'multiply',
          transition: 'background-image 0.5s ease-in-out', // Smooth transition
        }}
      ></div>
      <div className='relative z-10 space-y-5'>
        {/*
        <TypeAnimation
          sequence={[
            'Creativity.',
            1500,
            'Innovation.',
            1500,
            'Passion.',
            1500,
          ]}
          className='font-serif text-8xl text-white italic pb-3'
          repeat={Infinity}
        />
        */}
        <h1 className='font-sans lg:text-8xl md:text-8xl text-6xl drop-shadow-sm font-bold pb-3 opacity-90' style={{transition: '0.5s ease-in-out', color: textColors[currentImage]}}>{titles[currentImage]}.</h1>
        <h1 className='font-sans lg:text-xl md:text-xl text-md text-white'>The technology for the next generation.</h1>
      </div>

      <div className="relative bottom-4 flex justify-between  items-center w-full px-10 opacity-0 lg:opacity-100 md:opacity-100">
        <button onClick={goToPrevious} className="px-4 py-2 bg-stone-800 rounded-full text-white transition hover:bg-white hover:text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </button>
        <button onClick={goToNext} className="px-4 py-2 bg-stone-800 rounded-full transition text-white hover:bg-white hover:text-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        </button>
      </div>

    </div>
  );
};

export default HeroSection;
