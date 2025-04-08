import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import api from '../utils/api'; // ⬅️ use the custom axios instance

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Imgroom1 from '../assets/pictures/imgroom1.jpg';
import Imgroom2 from '../assets/pictures/imgroom2.jpg';
import Imgroom3 from '../assets/pictures/imgroom3.jpg';
import Footer from '../sections/footer';

const Roomscreen = () => {
  const [rooms, setRooms] = useState([]);
  const [error, setError] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await api.get('/rooms'); // 👈 simplified path
        setRooms(res.data);
        setError(false);
      } catch (error) {
        console.error("Failed to fetch rooms", error);
        setError(true);
      }
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex flex-col items-center bg-blue-100 pt-20 min-h-screen">
      {error ? (
        <div className="text-red-600 text-xl font-semibold mt-10">⚠️ Failed to fetch rooms. Please try again later.</div>
      ) : (
        rooms.map((room, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg w-4/5 rounded-lg overflow-hidden mb-10 p-6">
            <div className="w-full md:w-1/2">
              <Slider {...settings}>
                <img src={Imgroom1} alt="Room 1" className="w-full h-64 object-cover" />
                <img src={Imgroom2} alt="Room 2" className="w-full h-64 object-cover" />
                <img src={Imgroom3} alt="Room 3" className="w-full h-64 object-cover" />
              </Slider>
            </div>

            <div className="w-full md:w-1/2 flex flex-col p-6 space-y-4">
              <h2 className="text-2xl font-semibold text-blue-600">{room.roomname}</h2>
              <p className="text-gray-700">{room.roomdescription}</p>
              <div className="border-b border-gray-300" />

              <div className="flex flex-col md:flex-row justify-between items-center">
                <ul className="text-gray-700 space-y-1">
                  <li className="font-semibold">TIMING</li>
                  <li>Check-in: 12 noon</li>
                  <li>Check-out: 11 am</li>
                </ul>
                <div className="text-center">
                  <p className="text-xl font-bold text-black line-through mr-2">Rs.{room.roomprice}/</p>
                  <p className="text-gray-500">per night</p>
                  <p className="text-gray-500">excluding taxes and fees</p>
                  <p className="text-green-600 font-semibold">Now Rs. {room.roomdiscount}</p>
                  <Link to="/booking" state={{ roomname: room.roomname }}>
                    <button className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition">
                      BOOK NOW
                    </button>
                  </Link>
                </div>
              </div>

              <div className="border-b border-gray-300" />
            </div>
          </div>
        ))
      )}
      <Footer />
    </div>
  );
};

export default Roomscreen;
