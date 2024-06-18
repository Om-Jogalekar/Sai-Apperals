import React from 'react';
import About from './About';
import { useNavigate } from 'react-router-dom';

export default function ShopCategories() {
  const slides = [
    {
      img: "Images/product7.jpg"
    },
    {
      img: "Images/product2.jpg"
    },
    {
      img: "Images/product3.jpg"
    },
    {
      img: "Images/product1.jpg"
    }
  ]

  const navigate = useNavigate();
  return (
    <div>
      <h1 className='font-bold mt-24 flex justify-center my-10 lg:text-3xl text-xl p-3 '>Collection By Sayee</h1>  
        <div className='flex flex-wrap lg:justify-between justify-center gap-3  lg:ml-44 lg:w-3/4'>
          {slides.map((i) => (
            <>
            <div className='group relative items-center justify-between overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow rounded-xl'>
              <div className='lg:h-96 lg:w-60 h-96 w-56'>
                <img className='h-full w-full object-cover group-hover:rotate-2 group-hover:scale-125 transition-transform duration-300' src={i.img} alt="" />
              </div>
              <div className=' absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70 duration-500'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[50%] group-hover:translate-y-0 transition-all duration-500'>
                <h1 className='text-white lg:text-3xl font-bold'>Beuty</h1>
                <p className=' text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores modi, odit culpa natus nemo. Nesciunt, aliquam</p>
                <button className=' rounded-full shadow shadow-black/60 bg-neutral-500 mt-4 py-2 px-3.5 text-sm capitalize text-white' onClick={()=>{navigate("/shop")}}>
                  see More
                </button>
              </div>
            </div>
              
            </>
          ))}
        </div>
      <div>
        <About/>
      </div>
    </div>
  )
}
