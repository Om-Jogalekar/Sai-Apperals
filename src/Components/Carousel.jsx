import React, { useState } from 'react'
import { IoIosArrowForward , IoIosArrowBack } from "react-icons/io";

export default function Carousel({children : slides}) {
  const [curr , setCurr] = useState(0);

  const prev = () => setCurr(curr === 0 ? slides.length - 1 :curr - 1)
  const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1)
  return (
    <div className=' overflow-hidden relative'>
    <div className='flex trasition-all ease-out duration-500' style={{transform:`translateX(-${curr * 100}%)`}}>
      {slides}
    </div>
    <div className=' absolute inset-0 bg-white/0 flex items-center justify-between'>
        <button onClick={prev} className=''>
            <IoIosArrowBack /> 
        </button>
        <button onClick={next}>
            <IoIosArrowForward/>
        </button>
    </div>
</div>
  )
}
