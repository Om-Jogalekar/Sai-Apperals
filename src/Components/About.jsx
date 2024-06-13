import React from 'react'

export default function About() {
  return (
    <div>
      <div className='lg:flex mt-20 lg:p-10 p-5 flex-wrap'>
        <div className='lg:w-1/2'>
            <div className='relative flex justify-center items-center'>
                <img className='lg:w-[400px] p-5 w-[300px]' src="Images/aboutImg.jpg" alt="" />
                <img className='absolute lg:bottom-0 lg:right-11 -bottom-5 -right-1 lg:w-[200px] p-5 w-[150px] object-cover' src="Images/img3.jpg" alt="" />
                <img className='absolute lg:-top-14 lg:left-20 -left-4 -top-16 lg:w-[150px] p-5 w-[130px] object-cover' src="Images/img2.jpg" alt="" />
            </div>
        </div>
        <div className='lg:w-1/2 mt-5'>
            <h2 className='title text-xl text-center font-bold'>About Us</h2>
            <p className='title text-lg text-center italic p-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, id. Ipsa, tempora assumenda modi tenetur quia vero quos consectetur laborum obcaecati quas tempore iste, cumque ad velit? Voluptatem, quibusdam quas.
            </p>
        </div>
      </div>
    </div>
  )
}
