import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Banner() {
  const navigate  = useNavigate();

  return (
    <div className='relative flex justify-center'>
      <img className='mt-14 lg:w-[1239px] lg:h-[500px] object-cover shadow-lg shadow-inner' src="Images/Banner.png" alt=""/>
      <button className='absolute bottom-[-10vh] lg:bottom-10 lg:p-4 p-2 bg-white text-black border border-black' onClick={()=>{ navigate("/shop")}}>Shop Now</button>
    </div>
  )
}
