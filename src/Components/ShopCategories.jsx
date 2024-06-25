// import React from 'react';
// import About from './About';
// import { useNavigate } from 'react-router-dom';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { GrLinkNext , GrLinkPrevious } from "react-icons/gr";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <GrLinkNext className={className} style={{...style , display : "block" , fontSize:"100px"}} onClick={onClick}/>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <GrLinkPrevious className={className} style={{...style , display : "block" , fontSize:"100px"}} onClick={onClick}/>
//   );
// }

// export default function ShopCategories() {
//   const slides = [
//     {
//       img: "Images/product7.jpg",
//       title:"Indian Wear"
//     },
//     {
//       img: "Images/product2.jpg",
//       title:"Frok"
//     },
//     {
//       img: "Images/product3.jpg",
//       title:"Bridal"
//     },
//     {
//       img: "Images/product1.jpg",
//       title:"Festival"
//     }
//   ]  

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />
//   };
//   return (
//     <div className="slider-container w-3/4 m-auto mt-20">
//       <Slider {...settings}>
//          {slides.map((p)=>(
//             <div className='flex justify-center items-center'>
//               <img src={p.img} className='w-[10'/>
//           </div>
//          ))}
//       </Slider>
//     </div>
//   );
// }

import React from 'react';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrLinkNext className={className} style={{...style , display : "block" , fontSize:"100px"}} onClick={onClick}/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <GrLinkPrevious className={className} style={{...style , display : "block" , fontSize:"100px"}} onClick={onClick}/>
  );
}

function ShopCategories() {
  const navigate = useNavigate(); // To handle navigation on button click

  const slides = [
    {
      id: 1, // Add unique IDs for product identification
      img: "Images/product7.jpg",
      title: "Indian Wear",
      price: 19.99, // Add price information
    },
    {
      id: 2,
      img: "Images/product2.jpg",
      title: "Frock",
      price: 24.50,
    },
    {
      id: 3,
      img: "Images/product3.jpg",
      title: "Bridal",
      price: 99.99,
    },
    {
      id: 4,
      img: "Images/product1.jpg",
      title: "Festival",
      price: 39.95,
    },
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
        }
      }
    ]
    }

  // Function to handle "Add to Cart" button click (example logic)
  const handleAddToCart = (productId) => {
    console.log('Product with ID', productId, 'added to cart!'); // Replace with your cart implementation
    // You can potentially navigate to a cart page or display a success message here
  };

  return (
    <div>
      <h1 className='text-3xl font-thin text-center mt-28'>Design By Sayee</h1>
    <div className="slider-container lg:w-[80%] w-full m-auto my-9 mb-10">
      <Slider {...settings}>
        {slides.map((product) => (
          <div key={product.id}> {/* Use product.id for unique keys */}
            <div className="relative group mx-5">
              <img src={product.img} alt={product.title} className='lg:w-[350px] lg:h-[400px] w-[200px] h-[250px] object-cover'/>
              <div className="w-full h-full  absolute bg-black/30 -bottom-10 opacity-0 group-hover:opacity-100 group-hover:bottom-0 transition-all duration-500  flex flex-col justify-center items-center ">
                <p className='text-white font-bold'>{product.title}</p>
                <button className='text-white' onClick={() => navigate('/shop')}>See More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>
  );
}

export default ShopCategories;
