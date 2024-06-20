// import React from 'react'
// import Slider from "react-slick";


// export default function ContactUs() {

//   const slides = [
//     {
//       img: "https://asinboutique.com/cdn/shop/files/6EA1F930-9313-47F0-9702-90CD0F43ADF9.jpg?v=1718518079",
//       title:"Indian Wear"
//     },
//     {
//       img: "https://asinboutique.com/cdn/shop/files/6EA1F930-9313-47F0-9702-90CD0F43ADF9.jpg?v=1718518079",
//       title:"Frok"
//     },
//     {
//       img: "https://asinboutique.com/cdn/shop/files/6EA1F930-9313-47F0-9702-90CD0F43ADF9.jpg?v=1718518079",
//       title:"Bridal"
//     },
//     {
//       img: "https://asinboutique.com/cdn/shop/files/6EA1F930-9313-47F0-9702-90CD0F43ADF9.jpg?v=1718518079",
//       title:"Festival"
//     }
//   ]

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 3
//   };
//   return (
//     <div>
//       <div className="w-3/4 m-auto">
//       <Slider {...settings}>
//           {slides.map((slide)=>(
//             <div>
//               <img key={slide} src={slide.img}/>
//             </div>
//           ))}
//           </Slider>r
//         </div>  
//     </div>
//   )
// }


import React, { Component } from "react";
import Slider from "react-slick";

export default class ContactUs extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
