import React from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="bg-black/90 text-gray-300">
      <h1 className='p-4 md:text-[30px] text-2xl md:p-10'>Style is always in fashion...</h1>
      <hr/>
      <div className='grid grid-cols-1 gap-4 p-6 lg:grid-cols-4 lg:p-5 lg:ml-14'>
        <div className='flex justify-center items-center lg:justify-start'>
          <ul className='text-2xl space-y-4 flex lg:flex-col'>
            <li className='mx-2 pt-4'><FaInstagram /></li>
            <li className='mx-2'><FaFacebook /></li>
            <li className='mx-2'><IoLogoWhatsapp /></li>
          </ul>
        </div>
        <div className='flex justify-center lg:justify-start'>
          <ul className='space-y-2 lg:space-y-4'>
            <li>Shop</li>
            <li>About</li>
            <li>Journal</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className='flex justify-center text-center lg:justify-start'>
          <ul className='space-y-2 lg:space-y-4'>
            <li>FAQ</li>
            <li>Shipping & Returns</li>
            <li>Store Policy</li>
            <li>Payments</li>
          </ul>
        </div>
        <div className='flex flex-col items-center lg:items-start'>
          <h2 className='text-center lg:text-left'>Contact us & stay here</h2>
          <input className='p-2 rounded-lg my-3 text-black md:me-4' type="text" placeholder='Enter your Email'/>
        </div>
      </div>
    </div>
  )
}
