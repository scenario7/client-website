import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import CustomFooter from '../components/CustomFooter';
import * as animationData from '../lottie/Animation - 1700739710573';
import Lottie from 'lottie-web';
import DocumentMeta from 'react-document-meta';
import { Helmet } from 'react-helmet';

const ContactPage = () => {

  const meta = {
    title : 'LT IT Solutions Contact',
    description : "Connect with us to arrange a callback to assist you",
    meta : {
        charset : 'utf-8',
        name : {
            keywords : 'it solutions, lt it, av solutions, hospitality management, 3d graphic design'
        }
    }
}

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    }

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
    setSubmitted(true);
  };

  return (
    <div className='min-h-screen bg-stone-900 flex flex-col justify-between'>
      <NavBar />
      <DocumentMeta {...meta}/>
      <Helmet>
        <meta charSet='utf-8'/>
        <title>T IT Solutions Contact</title>
        <desc>Connect with us to arrange a callback to assist you</desc>
        
      </Helmet>
      <div className="flex flex-col items-center">
        {
          submitted === false ? (
            <form onSubmit={handleSubmit} className="flex flex-col items-center min-w-full py-5 px-5 md:py-10 md:px-10">
              <h1 className='font-serif text-white text-4xl lg:text-6xl pb-5 md:pb-10'>Contact Us</h1>
              <div className="flex flex-col space-y-3 md:space-y-6">
                <div className="flex flex-col items-start">
                  <label className='text-white text-md md:text-lg lg:text-xl py-2'>Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='bg-stone-700 text-white p-2 rounded mb-2 md:mb-4'
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
                    className='bg-stone-700 text-white p-2 rounded mb-2 md:mb-4'
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
                  className='bg-stone-700 text-white w-full p-2 rounded mb-2 md:mb-4'
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
            <div>
              <h1 className='font-serif text-white text-4xl lg:text-6xl pb-5 md:pb-10'>Thank you</h1>
              <h1 className='text-xl font-sans text-white'>Your query has been submitted!</h1>
            </div>
          )
        }
      </div>
      <CustomFooter />
    </div>
  );
};

export default ContactPage;
