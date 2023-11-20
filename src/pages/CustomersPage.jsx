import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import CustomFooter from '../components/CustomFooter'
import CustomerCard from '../components/CustomerCard';
import client from '../client';
import { RotateLoader } from 'react-spinners';

const CustomersPage = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        client
          .fetch(
            `*[_type=="customer"] {
              _id,
              title,
              slug,
              mainImage {
                asset -> {
                  _id,
                  url
                },
                alt
              },
            } | order(title)`
          )
          .then((data) => setCustomers(data))
          .catch(console.error);
      }, []);    

  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <div>
        <NavBar/>
            <h1 className='font-serif text-white text-4xl lg:text-6xl py-10  '>Our Customers</h1>
            <div className={`${customers.length == 0 ? "flex flex-col items-center" : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4"} px-8 py-8 gap-5`}>

            {customers.length === 0 ? (
                <RotateLoader color='#ffffff' loading={true} speedMultiplier={1}/>
            ) : (
                customers.map((customer) => (
                    <CustomerCard image={customer.mainImage.asset.url} name={customer.title} key={customer._id}/>
                ))
            )}
            </div>
        </div>
        <CustomFooter className="sticky bottom-0"/>
    </div>
  )
}

export default CustomersPage