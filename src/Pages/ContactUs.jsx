import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function ContactUs() {
  return (
    <>
      <Navbar/>
      <div className='mb-[100vh]'>
        <div>
          <h1 className='text-center p-10 text-[40px] font-thin'>Contact Us</h1>
          <div className='flex flex-col justify-center items-center shadow-xl shadow-gray-300 rounded-lg p-9 md:w-[500px] w-3/4 m-auto space-y-5'>
            <div>
              <input className='border border-black p-3 rounded-md md:w-96' type="text" placeholder='Name'/>
            </div>
            <div>
            <input className='border border-black p-3 rounded-md md:w-96' type="email" placeholder='Email'/>
            </div>
            <div>
            <input className='border border-black p-3 rounded-md md:w-96' type="text" placeholder='Phone number'/>
            </div>
            <div>
              <textarea className='border border-black p-3 rounded-md md:w-96' name="Comments" placeholder='Comments' cols="24" rows="5"></textarea>
            </div>
            <div>
              <button className=' bg-black text-white p-3 rounded-md md:w-96'>Submit</button>
            </div>
          </div>
          <div className='p-5 flex flex-col justify-center items-center'>
            <h1 className='p-5 text-3xl underline underline-offset-[10px]'>Let's connect with us!</h1>
            <h1 className='px-5 p-2 text-xl'>Email:<span className=' font-semibold underline underline-offset-2'> sayeeapperals@gmail.com</span></h1>
            <h1 className='px-5 p-3 text-xl'>Phone No.: <span className=' font-semibold '> +91 9999999999</span></h1>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
