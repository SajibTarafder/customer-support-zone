import React from 'react';
import vectorImg from "../../assets/vector1.png"
const Banner = ({ inProgressCount, resolvedCount }) => {
    return (
       <div className="lg:flex gap-4 mt-12 px-4 max-w-7xl mx-auto ">
   <div className=" relative w-full py-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] rounded-xl overflow-hidden">
   
<img
        src={vectorImg}
        className="absolute left-0 top-0 h-full  object-cover pointer-events-none"
        alt=""
      />

      {/* Right Wave Image (mirror of left) */}
      <img
        src={vectorImg}
        className="absolute right-0 top-0 h-full object-cover pointer-events-none scale-x-[-1]"
        alt=""
      />
   <div className='text-center items-center text-amber-100'>
 <h2 className='text-xl font-bold mb-4'>In Process</h2>
   <h1 className='font-bold text-6xl'>{inProgressCount}</h1>
    
   </div>
    
   
  </div>
  
    <div className=" relative w-full py-10 bg-gradient-to-r from-[#54CF68] to-[#00827A] rounded-xl overflow-hidden">

   
<img
        src={vectorImg}
        className="absolute left-0 top-0 h-full  object-cover pointer-events-none"
        alt=""
      />

      {/* Right Wave Image (mirror of left) */}
      <img
        src={vectorImg}
        className="absolute right-0 top-0 h-full object-cover pointer-events-none scale-x-[-1]"
        alt=""
      />
    <div className='text-center items-center text-amber-100'>
 <h2 className='text-xl font-bold mb-4'>Resolved</h2>
   <h1 className='font-bold text-6xl'>{resolvedCount}</h1>
    
   </div>
    
   
  </div>
 
</div>
    );
    
};

export default Banner;