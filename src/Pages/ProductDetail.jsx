import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

export default function ProductDetail() {
    useEffect(() => {
        fetch('/product.json')
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.error("Error fetching data ", error));
      })
  return (
    <>
     <Navbar/>
     <div className='mb-[50vh]'>
        <div className='flex md:flex-row flex-col justify-center items-center'>
            <img className='w-6/12 md:w-44 md:h-50  p-5 border border-black mt-10' src="Images/product1.jpg" alt="" />
        <div className='p-5 md:w-[600px] md:mt-4'>
            <h2 className='font-semibold text-center'>
               Blue Plated Princess
            </h2>
            <h3 className='text-center font-semibold p-4 text-xl'>
                Price: ₹999  
            </h3>
            <h3 className='text-pretty px-8 md:px-9'>
            Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary
            </h3>
        <div className='flex gap-4 mt-5 md:justify-center md:mt-10'>
            <button className='bg-black w-40 text-white p-3 rounded-md hover:text-white'>Buy now</button>
            <button className='w-40 border border-black rounded-md'>Add to cart</button>
        </div>
        </div>
        </div>
    </div> 
    <Footer/>
    </>
  )
}
