import React from 'react'

export default function About() {
  return (
    <div>
      <div className='lg:flex mt-20 lg:p-10 p-5 flex-wrap'>
        <div className='lg:w-1/2 mt-20'>
          <div className='relative flex justify-center items-center'>
            <img className='lg:w-[400px] p-4 w-[300px]' src="Images/aboutImg.jpg" alt="" />
            <img className='absolute lg:bottom-0 lg:right-11 -bottom-5 -right-1 lg:w-[200px] p-5 w-[150px] object-cover' src="Images/img3.jpg" alt="" />
            <img className='absolute lg:-top-14 lg:left-20 -left-4 -top-16 lg:w-[150px] p-5 w-[130px] object-cover' src="Images/img2.jpg" alt="" />
          </div>
        </div>
        <div className='lg:w-1/2 p-3'>
          <h2 className='text-2xl text-center font-bold'>About Us</h2>
          <p className=''>


            <p>Welcome to <span className=' font-bold'>Sayee Apperals</span> , where innovation meets elegance in every stitch. Founded by the talented fashion designer Sanika Adhav, our brand is dedicated to creating unique, high-quality fashion pieces that make a statement.<br/></p>

           <h1 className='m-2 font-bold'> Our Founder: Sanika Adhav</h1>
            Sanika Adhav, a distinguished graduate with a BSc in Fashion Designing, has carved her niche in the fashion industry with her exceptional skills and creative vision. Her journey in fashion began with her debut at the prestigious India Design Week in Mumbai in April 2019, followed by a captivating showcase at the Kalakaar Factory in Nashik in February 2020. These experiences have honed her ability to craft designs that resonate with contemporary trends while maintaining timeless appeal.

            <h1 className='m-2 font-bold'>Our Philosophy</h1>
            At Sayee Apperals, we believe in the power of customization and the importance of staying ahead of fashion trends. Sanika's innovative ideas in stitching, sketching, and drawing ensure that every piece we create is a work of art. We pride ourselves on our meticulous attention to detail and uncompromising commitment to quality, ensuring that each garment not only meets but exceeds your expectations.<br />

            <h1 className='m-2 font-bold'> Why Choose Us?<br /></h1>
            - Trendsetting Designs:We stay at the forefront of fashion trends, offering you the latest and most stylish options.<br />
            - Custom Creations:Our custom designs allow you to express your individuality and personal style.<br />
            - Unmatched Quality:We never compromise on quality, ensuring that every piece is made with the finest materials and craftsmanship.<br />

            Join us on this fashion journey and experience the perfect blend of creativity, innovation, and quality with Sayee Apperals. Whether you're looking for a bespoke creation or the latest trendsetting piece, we're here to make your fashion dreams a reality.
          </p>
        </div>
      </div>
    </div>
  )
}
