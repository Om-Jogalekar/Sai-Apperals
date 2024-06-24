import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';
import { useMediaQuery } from 'react-responsive';
import { VscSettings } from "react-icons/vsc";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
export default function Shop() {
  const isLGScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const [accordionPrice, setAccordionPrice] = useState(false);
  const [accordionProductType, setAccordionProductType] = useState(false);
  const [accordionSize, setAccordionSize] = useState(false);
  const [toggleFilter, setToggleFilter] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch('/product.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error("Error fetching data ", error));
  })
  return (
    <div>
      <Navbar />
      {isLGScreen ? (
        <div className='lg:w-[80%] lg:ml-44  mt-5'>
          <h1 className='text-4xl font-thin flex justify-center p-5'>Design By Sayee </h1>
          <div className='flex'>
            <div className='w-[20%] shadow-lg'>
              <div>
                {/* Filters */}
                <span className='text-lg text-gray-500 flex items-center gap-2 p-2'><VscSettings className=' text-black' /> Filter</span>
                {/* Price */}
                <div className='p-2'>
                  <button className='w-full text-lg p-2 flex justify-between items-center' onClick={() => setAccordionPrice(!accordionPrice)}>Price
                    {accordionPrice ? <FiMinus /> : <IoIosAdd />}
                  </button>
                  <div className={`grid overflow-hidden  transition-all duration-500 ease-in-out text-slate-600
                ${accordionPrice ? ' grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} `}>
                    <div className='overflow-hidden'>
                      <p>500 - 1000</p>
                      <p>1000 - 2000</p>
                      <p>2000 - 5000</p>
                    </div>
                  </div>
                </div>
                {/* product type */}
                <div className='p-2'>
                  <button className='w-full text-lg p-2 flex justify-between items-center' onClick={() => setAccordionProductType(!accordionProductType)}>Product Type
                    {accordionProductType ? <FiMinus /> : <IoIosAdd />}
                  </button>
                  <div className={`grid overflow-hidden  transition-all duration-500 ease-in-out text-slate-600
                ${accordionProductType ? ' grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} `}>
                    <div className='overflow-hidden'>
                      <p>500 - 1000</p>
                      <p>1000 - 2000</p>
                      <p>2000 - 5000</p>
                    </div>
                  </div>
                </div>
                {/* Size */}
                <div className='p-2'>
                  <button className='w-full text-lg p-2 flex justify-between items-center' onClick={() => setAccordionSize(!accordionSize)}>Size
                    {accordionSize ? <FiMinus /> : <IoIosAdd />}
                  </button>
                  <div className={`grid overflow-hidden  transition-all duration-500 ease-in-out text-slate-600
                ${accordionSize ? ' grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} `}>
                    <div className='overflow-hidden'>
                      <p>500 - 1000</p>
                      <p>1000 - 2000</p>
                      <p>2000 - 5000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[80%]">
              <div className='mx-10 p-5 flex flex-wrap gap-28'>
                {data.map((p) => (
                  <div >
                    <img src={p.image} className=' w-80 h-[400px] object-cover' />
                    <div className='w-80'>
                      <button className=' font-semibold text-center text-lg' onClick={()=>navigate('/productdetails')}>{p.title}</button>
                      <p className='text-center'>{p.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        ) : (
        <div>
          {/* sreachBar */}
          <div>
            <input className='text-xl w-[80%] m-14 p-5 border-b-2 border-gray-500' type="text" placeholder="Search" />
          </div>
          {/* Label */}
          <div className='flex justify-center items-center'>
            <h1 className='text-4xl font-thin'>Design By Sayee</h1>
          </div>
          {/* filter bar */}
          <div className={`border relative border-black mt-10 w-3/4 ml-10`}>
            <button className='flex items-center gap-2 p-5 text-2xl' onClick={() => setToggleFilter(!toggleFilter)}>
              <VscSettings />
              <span>Filters</span>
            </button>
          </div>

          {toggleFilter ? (<button className='text-4xl text-white fixed top-5 right-5 z-10' onClick={() => setToggleFilter(!toggleFilter)}>x</button>) : (<></>)}
          <div className={`top-0 right-0 fixed bg-black/50 h-full w-[50%] ${toggleFilter ? "translate-x-0" : "translate-x-full"}   ease-in-out duration-300 `}>
            <div className='mt-16'>
              <div className='p-2 text-white '>
                <button className='w-full text-lg p-2 flex justify-between items-center' onClick={() => setAccordionPrice(!accordionPrice)}>Price
                  {accordionPrice ? <FiMinus /> : <IoIosAdd />}
                </button>
                <div className={`grid overflow-hidden  transition-all duration-500 ease-in-out text-slate-600
                ${accordionPrice ? ' grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} `}>
                  <div className='overflow-hidden text-white ml-2'>
                    <p>500 - 1000</p>
                    <p>1000 - 2000</p>
                    <p>2000 - 5000</p>
                  </div>
                </div>
              </div>
              <div className='p-2 text-white'>
                  <button className='w-full text-lg p-2 flex justify-between items-center' onClick={() => setAccordionProductType(!accordionProductType)}>Product Type
                    {accordionProductType ? <FiMinus /> : <IoIosAdd />}
                  </button>
                  <div className={`grid overflow-hidden  transition-all duration-500 ease-in-out text-slate-600
                ${accordionProductType ? ' grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} `}>
                    <div className='overflow-hidden text-white ml-2'>
                      <p>500 - 1000</p>
                      <p>1000 - 2000</p>
                      <p>2000 - 5000</p>
                    </div>
                  </div>
                </div>
                <div className='p-2 text-white'>
                  <button className='w-full text-lg p-2 flex justify-between items-center' onClick={() => setAccordionSize(!accordionSize)}>Size
                    {accordionSize ? <FiMinus /> : <IoIosAdd />}
                  </button>
                  <div className={`grid overflow-hidden  transition-all duration-500 ease-in-out text-slate-600
                ${accordionSize ? ' grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'} `}>
                    <div className='overflow-hidden text-white ml-2'>
                      <p>500 - 1000</p>
                      <p>1000 - 2000</p>
                      <p>2000 - 5000</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          {/* productCards */}
          <div className='p-3 flex flex-wrap gap-5  mt-10 ml-1'>
            {data.map((p) => (
              <div>
                <img src={p.image} className=' w-40 h-35 items-center' />
                <div className='w-40'>
                  <button className=' font-semibold text-lg hover:text-blue-500' onClick={()=>navigate('/productdetails')}>{p.title}</button>
                  <h2>₹{p.price}</h2>
                </div>
              </div>
            ))}
          </div>      
        </div>
      )
      } 
      <Footer/>  
    </div>
  )
}
