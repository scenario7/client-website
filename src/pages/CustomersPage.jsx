import React, { useState, useEffect } from 'react';
import NavBar from '../components/NavBar'
import CustomFooter from '../components/CustomFooter'
import CustomerCard from '../components/CustomerCard';
import client from '../client';
import { RotateLoader } from 'react-spinners';
import DocumentMeta from 'react-document-meta';

const CustomersPage = () => {

    const [customers, setCustomers] = useState([]);

    const meta = {
      title : 'LT IT Solutions Verticals',
      description : "Explore the industries in which LT IT Solutions is wokring with.",
      meta : {
          charset : 'utf-8',
          name : {
              keywords : 'it solutions, lt it, av solutions, hospitality management, 3d graphic design'
          }
      }
  }

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
              body
            } | order(title)`
          )
          .then((data) => setCustomers(data))
          .catch(console.error);
      }, []);    

  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <div>
        <NavBar/>
        <DocumentMeta {...meta}/>
            <h1 className='font-serif text-white text-4xl lg:text-6xl py-10  '>Verticals</h1>
            <div className={`${customers.length == 0 ? "flex flex-col items-center" : "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3"} px-8 py-8 gap-5`}>

            {customers.length === 0 ? (
                <RotateLoader color='#ffffff' loading={true} speedMultiplier={1}/>
            ) : (
                customers.map((customer) => (
                    <CustomerCard image={customer.mainImage.asset.url} name={customer.title} key={customer._id} body={customer.body}/>
                ))
            )}
            </div>
        </div>
        <CustomFooter className="sticky bottom-0"/>
    </div>
  )
}

export default CustomersPage