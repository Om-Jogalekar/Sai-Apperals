import React from 'react'

export default function About() {
  return (
    <div>
      <div className='lg:flex mt-20 lg:p-10 p-5 flex-wrap'>
        <div className='lg:w-1/2 mt-20'>
          <div className='relative flex justify-center items-center'>
            <img className='lg:w-[400px] p-4 w-[300px]' src="Images/aboutImg.jpg" alt="" />
            <img className='absolute lg:bottom-0 lg:right-11 -bottom-5 -right-1 lg:w-[200px] p-5 w-[150px] object-cover' src="Images/img3.jpg" alt="" />
            <img className='absolute lg:-top-14 lg:left-20 -left-4 -top-16 lg:w-[180px] p-5 w-[135px] object-cover' src="Images/img1.jpg" alt="" />
          </div>
        </div>
        <div className='lg:w-1/2 p-5 text-balance mt-2'>
          <h2 className='text-2xl text-center font-bold'>About Us</h2>
          <p>
            Welcome to <span className='font-semibold'>Sayee Apperals</span>, founded by the talented Sanika Ganesh Adhav, <br/>A BSc Fashion Designing graduate with a flair for innovation and quality. Sanika's impressive portfolio includes showcases at India Design Week 2019 in Mumbai and Kalakaar Factory 2020 in Nashik. <br />

            Our brand embodies the perfect blend of creativity and craftsmanship. With a keen eye for fashion trends and a dedication to excellence, we offer unique, customized designs that stand out. Every piece is crafted with meticulous attention to detail, ensuring superior quality and style. <br />

            Choose <span className='font-semibold'>Sayee Apperals</span> for: <br />
            - <span className='font-semibold'>Innovative Designs:</span> Stay ahead with trendsetting fashion. <br />
            - <span className='font-semibold'>Custom Creations:</span>Express your individuality with bespoke pieces. <br />
            - <span className='font-semibold'>Uncompromised Quality:</span> Enjoy the finest materials and craftsmanship. <br />

            Join us and let your wardrobe reflect your unique style with Sayee Apperals.
          </p>
        </div>
      </div>
    </div>
  )
}
