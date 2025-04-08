import React from 'react'
import {Link} from 'react-router-dom'
import Imgevent1 from"../assets/pictures/event2.jpg";
import Imgevent2 from"../assets/pictures/event1.jpg";

import Imgevent3 from"../assets/pictures/event3.jpg";

import Imgevent4 from"../assets/pictures/event4.jpg";
import Footrt from '../sections/footer';

function Events() {
  return (
  <>
    <div className='flex flex-col items-center  w-full h-180 md:h-200 bg-red-900 pt-10 '>
      
      <img src={Imgevent1} alt="event img" className=' flex w-9/10 h-120  md:h-150  mt-10  rounded-md' />
      
       <div className='flex  flex-col items-center justify-center px-4 w-4/6 h-50 
       md:h-60 bg-white relative bottom-25 md:bottom-15'>
         <h2 className=' flex text-black text-2xl md:text-4xl font-bold pb-4'>WEDDING HALL MEETING & EVENTS</h2>
         <p className=' flex  text-sm md:text-lg text-blue-700'>Discover and compare venues for your next event. Use your best estimate for attendees and any guest rooms needed.</p>
       </div>
    </div>  





       <div className='flex flex-col w-full h-480 bg-orange-200 items-center   '>
          <div className='flex flex-col md:flex-row   items-center w-5/6 h-150  bg-white mt-10 shadow-lg'>
           
           <img src={Imgevent2} alt="wedding events img" className='w-9/10 h-50 md:w-200 md:h-100 md:ml-10 md:my-10 pt-2' />
            <div className='flex flex-col   items-center w-5/6 h-50 bg-white md:px-8 mt-4'>
             <h2 className='text-black font-bold text-xl pt-4 mb-4'>WEDDING HALL</h2>
              <p >"Our elegant wedding hall offers a luxurious setting for your special day, with beautiful décor, spacious seating, and customizable arrangements. Perfect for grand celebrations or intimate ceremonies, we ensure a memorable experience with dedicated service and attention to detail."</p>
              <Link to='/booking' state={{roomname:" Wedding hall" }}><button className='bg-transparent text-red-700 shadow-md hover:bg-red-500 hover:text-white transition-all border border-red-700 w-60 mt-10'> GET A CUSTOME PRICE</button>
              </Link>
              
              <button className='bg-transparent text-red-700 shadow-md hover:bg-red-500 hover:text-white transition-all border border-red-700 w-60 mt-4'> EXPLORE</button>
             </div>
           





          </div>
          <div className='flex flex-col md:flex-row   items-center w-5/6 h-160  bg-white mt-10 shadow-lg'>
           
           <img src={Imgevent3} alt="wedding events img" className='flex w-9/10 h-50 md:w-200 md:h-100 md:ml-10 md:my-10 pt-2' />
            <div className='flex flex-col   items-center w-5/6 h-50 bg-white md:px-8 mt-4'>
             <h2 className='text-black font-bold text-xl pt-4 mb-4'>WEDDING HALL</h2>
              <p >"Our hotel offers a state-of-the-art conference hall equipped with modern AV technology, comfortable seating, and customizable layouts. Ideal for business meetings, seminars, and events, we provide professional support to ensure a seamless and productive experience for all attendees."</p>
              <Link to='/booking' state={{roomname:"conference hall" }}><button className='bg-transparent text-red-700 shadow-md hover:bg-red-500 hover:text-white transition-all border border-red-700 w-60 mt-10'> GET A CUSTOME PRICE</button>
              </Link>
             
              <button className='bg-transparent text-red-700 shadow-md hover:bg-red-500 hover:text-white transition-all border border-red-700 w-60 mt-4'> EXPLORE</button>
             </div>
           
          </div>
        





          




        <div className='flex flex-col md:flex-row items-center md:justify-center w-5/6 h-140  bg-transparent mt-10'>
            <div className='flex  w-80 h-80 md:w-120  md:h-120 items-center justify-center rounded-full  mt-8 bg-red-900 z'>  
            <img src={Imgevent4} alt=""  className='flex w-70 h-70 md:w-110 md:h-110 rounded-full  shadow-md-white z-10'/>
          </div>
          <div className='flex flex-col items-center w-60 h-50 md:w-150 md:h-70 bg-red-900 relative bottom-20 md:right-20 md:top-5 shadow-lg rounded-4xl'>
            <p className='text-white text-xs md:text-lg pt-18 px-4 md:pl-40'>"When World of Hyatt members host their wedding at a participating , they can earn Bonus Points that can be used for complimentary stays at any Hyatt property around the globe."</p>
          </div>
        </div>
          
       </div>
        <Footrt/>
  </>
  )
}

export default Events