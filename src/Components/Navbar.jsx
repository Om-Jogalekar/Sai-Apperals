import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { useState } from 'react' 
import { useNavigate } from 'react-router-dom';
import { IoMdHeartEmpty } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();
  return (
    <div className=''>
            
        <div className='lg:mx-40 px-5 flex justify-between items-center'>
            <IoIosSearch className='text-2xl'/>
            <img src="Images/mainLogo.png" alt="" width={150}/>
            <div className='flex gap-2'>
            <CiShoppingCart className='text-2xl'/>
            <IoMdHeartEmpty className='text-2xl'/>
            </div>
        </div>
        <div>
            <div className='bg-slate-100 p-2 relative inline-block  flex justify-center items-center gap-10'>
                <h1 className=' hover:underline underline-offset-4 ' onClick={()=>{navigate("/")}}>Home</h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <h1 className='inline-flex hover:underline underline-offset-4'>Catalog</h1>
                  </button>
                  {isOpen && (
       <div className="absolute z-10 top-3 mt-10 w-56 rounded-md shadow-lg bg-white">
         <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
           <a href="/account-settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Account settings</a>
           <a href="/documentation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Documentation</a>
           <span className="block px-4 py-2 text-sm text-gray-700 opacity-50" role="menuitem">Invite a friend (coming soon!)</span>
         </div>
       </div>
     )}
                <h1 className=' hover:underline underline-offset-4 cursor-pointer' onClick={()=>{navigate("/contactus")}}>Contact Us</h1>
            </div>
        </div>
        
    </div>
  )
}
