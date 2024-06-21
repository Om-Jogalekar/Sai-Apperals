import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import ShopCategories from '../Components/ShopCategories'
import Footer from '../Components/Footer'
import Products from '../Components/Products'
export default function Home() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <ShopCategories/>
      <Products/>
      <Footer/>
    </>
  )
}
