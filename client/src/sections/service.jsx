import React from 'react';
import Logoservice1 from '../assets/logo/service1.png';
import Logoservice2 from '../assets/logo/service2.png';
import Logoservice3 from '../assets/logo/service3.png';
import Logoservice4 from '../assets/logo/service4.png';
import Logoservice5 from '../assets/logo/service5.png';
import Logoservice6 from '../assets/logo/service6.png';
import Imgservice from '../assets/dining1.jpg';

function Service() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-220  md:h-150 bg-[rgba(183,206,197,0.5)]">
      <h1 className="text-4xl mb-6 text-[rgb(10,62,76)] text-5xl text-bold relative  right-120">AMENITIES</h1>
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        {/* Left Card */}
        <div className="flex flex-col justify-center items-center w-70">
          <div className="flex justify-center items-center w-full h-20 text-base font-thin gap-12">
            <h2 className='text-bold'>Basic Facilities</h2>
            <img src={Logoservice1} alt="" className="w-12 h-12 mb-4" />
          </div>
          <div className="flex justify-center items-center w-full h-20 text-base font-thin gap-12">
            <h2>Basic Facilities</h2>
            <img src={Logoservice2} alt="" className="w-12 h-12 mb-4" />
          </div>
          <div className="flex justify-center items-center w-full h-20 text-base font-thin gap-12">
            <h2>Basic Facilities</h2>
            <img src={Logoservice3} alt="" className="w-12 h-12 mb-4" />
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center items-center w-[400px]">
          <img src={Imgservice} alt="" className="w-80 h-80 mb-6 rounded-full" />
        </div>

        {/* Right Card */}
        <div className="flex flex-col justify-center items-center w-70">
          <div className="flex justify-center items-center w-full h-20 text-base font-thin gap-12">
            <img src={Logoservice4} alt="" className="w-12 h-12 mb-4" />
            <h2>Basic Facilities</h2>
          </div>
          <div className="flex justify-center items-center w-full h-20 text-base font-thin gap-12">
            <img src={Logoservice5} alt="" className="w-12 h-12 mb-4" />
            <h2>Basic Facilities</h2>
          </div>
          <div className="flex justify-center items-center w-full h-20 text-base font-thin gap-12">
            <img src={Logoservice6} alt="" className="w-12 h-12 mb-4" />
            <h2>Basic Facilities</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;