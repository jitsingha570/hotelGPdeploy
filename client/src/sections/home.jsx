import React, { useState, useEffect } from "react";
import Imghome1 from "../assets/pictures/Imghome1.jpg";
import Imghome2 from "../assets/webpPhoto/about1.webp";
import {Link} from "react-router-dom";

const images = [Imghome1, Imghome2];
const fullText = "Picture your next amazing stay";

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  const [guestCount, setGuestCount] = useState(0);
  const [roomCount, setRoomCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);

  // Background image slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCharIndex(0);
      setTypedText("");
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Typing effect
  useEffect(() => {
    if (charIndex < fullText.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev + fullText[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(typingTimeout);
    }
  }, [charIndex]);

  // Guest Count animation
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 1200) {
        count += 20;
        setGuestCount(count);
      } else {
        setGuestCount(1200);
        clearInterval(interval);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Room Count animation
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 50) {
        count += 2;
        setRoomCount(count);
      } else {
        setRoomCount(50);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  // Event Count animation
  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 25) {
        count += 1;
        setEventCount(count);
      } else {
        setEventCount(25);
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center overflow-hidden md:pb-20">
      {/* Background image slider */}
      <img
        src={images[currentImageIndex]}
        alt="Slider"
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 opacity-90"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full  z-10" />

      {/* Right side stats */}
      <div className="absolute right-10 top-[50%]  translate-y-[-50%] z-30 text-white space-y-6 text-right bg-black/20">
        <div >
          <h2 className="text-5xl font-bold ">{guestCount}+</h2>
          <p className="text-sm">Guests Satisfied</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold">{roomCount}+</h2>
          <p className="text-sm">Rooms Available</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold">{eventCount}+</h2>
          <p className="text-sm">Events Hosted</p>
        </div>
      </div>

      {/* Main content */}
      <div className="z-20 flex flex-col items-center justify-center text-center text-white px-4 mt-[500px]">
        <div className="bg-transparent backdrop-blur-md p-6 rounded-md shadow-md max-w-2xl w-full mb-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        <p className="max-w-lg text-sm leading-5 font-light mb-4">
          Escape to Impression Isla Mujeres by Secrets, named “The Most
          Instagrammable Hotel in the World” by Luxury Travel Advisor. Make it
          a memorable stay while enjoying your Best. Year. Yet. with savings of
          up to 40% on your room rate. Terms apply.
        </p>
        <Link to="/Gallery">
        <button className="w-48 h-10 mt-2 px-4 border border-white text-white  bg-black hover:bg-white hover:text-black transition-all duration-300">
          EXPLORE
        </button>
        </Link>
        
      </div>
    </div>
  );
}

export default Home;
