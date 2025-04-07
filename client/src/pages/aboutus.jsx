import React from "react";
import { Link } from "react-router-dom";

import Imgabout1 from "../assets/pictures/Imghome2.jpg";
import Footer from "../sections/footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iconbed from "../assets/logo/bedicon.png";
import Iconabout2 from "../assets/logo/comfort.png";
import Iconabout3 from "../assets/logo/night.png";
import Iconabout4 from "../assets/logo/stay.png";
import Imgabout2 from "../assets/pictures/about1.jpg";
import Imgabout3 from "../assets/pictures/about2.jpg";

function Aboutus() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="flex flex-col w-full h-auto">
      {/* About Us Section */}
      
      <div className="flex flex-col  justify-center items-center w-full  h-230 bg-red-900 pt-20 md:pt-0 pb-10 gap-6">
        <h1 className="text-white font-bold text-4xl">ABOUT US</h1>
        <div className="flex flex-col md:flex-row justify-center items-center w-full">
          <div className="flex justify-center items-center w-90 h-90 md:w-130 md:h-130 rounded-full bg-yellow-200">
            <img
              src={Imgabout1}
              alt="hotel"
              className="object-cover w-80 h-80 md:w-120 md:h-120 z-10 rounded-full"
            />
          </div>

          <div className="flex flex-col w-80 md:w-200 md:h-80  p-4 rounded-xl bg-yellow-200 relative bottom-30 md:relative md:top-0 md:right-20 pt-30 gap-4 text-center ">
            <p className="text-lg pl-10">
              "Our luxury hotel offers elegant rooms, fine dining, relaxing spa services, and exceptional hospitality for a truly unforgettable experience"
            </p>
            <p className="text-sm text-gray-700">
              LOCATION - Santragachi Station Rd, Santragachi, Howrah, West
              Bengal 711111 <br />
              E-MAIL - hotelgokulpalace.santragachi@gmail.com <br />
              PHONE - 7439226614
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="flex flex-col py-10 items-center w-full bg-orange-200">
        <h1 className="text-orange-700 text-4xl py-10 font-bold">GALLERY</h1>
        <div className="w-9/10 pb-10 max-w-2xl md:w-3/4 ">
          <Slider {...settings}>
            {[Imgabout1, Imgabout2, Imgabout3].map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt="hotel"
                  className="object-cover w-full h-50  md:h-100 rounded-xl"
                />
              </div>
            ))}
          </Slider>
        </div>
            <Link to="/gallery" className="flex justify-center items-center w-full">
            <button className="w-70 h-10 bg-orange-500 rounded-lg shadow-lg">MORE PHOTOS</button>
            </Link>
        

        <div className="flex flex-col  items-center  w-9/10 h-130  md:h-100 rounded-lg mt-10 bg-white">
         <h1 className="text-black font-bold text-xl  my-10">Take a rest at Hotel Gokul Place</h1>
         <div className="flex flex-col md:flex-row md:gap-40 py-4 gap-10">
          <div className="flex flex-col gap-10 md:gap-15">
            <div className="flex flex-row gap-4">
              <img src={Iconbed} alt="bed" className="w-10 h-10" />
            <h2>Luxury stay, unforgettable experience.</h2>
            </div>
             <div className="flex flex-row gap-4">
             <h2>Comfort redefined, luxury assured.</h2>
             <img src={Iconabout2} alt="bed" className="w-10 h-10" />
             </div>
          
          </div>
          <div className="flex flex-col gap-10 md:gap-15">
            <div className="flex flex-row gap-4">
              <img src={Iconabout3

              } alt="bed" className="w-10 h-10" />
            <h2>Luxury stay, unforgettable experience.</h2>
            </div>
             <div className="flex flex-row gap-4">
             <h2>Comfort redefined, luxury assured.</h2>
             <img src={Iconabout4} alt="bed" className="w-10 h-10" />
             </div>
          
          </div>
        
      
         </div>
         <button  className="w-70 h-10 mt-10 bg-orange-500 rounded-lg ">BOOK NOW</button>
     
        </div>

           </div>
      

    


      <Footer />
    </div>
  );
}

export default Aboutus;
