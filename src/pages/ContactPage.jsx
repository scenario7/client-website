import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import CustomFooter from '../components/CustomFooter';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert("Your response has been recorded")
    setSubmitted(true);
  };

  return (
    <div className='min-h-screen bg-stone-900 flex flex-col justify-between'>
      <NavBar />
      <div className="flex flex-col items-center">
        <h1 className='font-serif text-white text-4xl lg:text-6xl pb-5 md:pb-10'>Contact Us</h1>
        {
          submitted === false ? (
            <form onSubmit={handleSubmit} className="flex flex-col items-center min-w-full py-5 px-5 md:py-10 md:px-10">
              <div className="flex flex-col space-y-3 md:space-y-6">
                <div className="flex flex-col items-start">
                  <label className='text-white text-md md:text-lg lg:text-xl py-2'>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='bg-gray-300 p-2 rounded mb-2 md:mb-4'
                    required
                  />
                </div>

                <div className="flex flex-col items-start">
                  <label className='text-white text-md md:text-lg lg:text-xl py-2'>Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='bg-gray-300 p-2 rounded mb-2 md:mb-4'
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col items-start">
                <label className='text-white text-md md:text-lg lg:text-xl py-2'>Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='bg-gray-300 w-full p-2 rounded mb-2 md:mb-4'
                  required
                />
              </div>

              <button
                type="submit"
                className='bg-blue-600 text-white p-2 rounded hover:bg-blue-700'
              >
                Submit
              </button>
            </form>
          ) : (
            <h1 className='text-xl font-sans text-white'>Submitted!</h1>
          )
        }
      </div>
      <CustomFooter />
    </div>
  );
};

export default ContactPage;
