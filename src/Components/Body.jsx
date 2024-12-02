import React from 'react';
import Client1 from '../assets/client-1.svg';
import Client2 from '../assets/client-2.svg';
import Client3 from '../assets/client-3.svg';
import Client4 from '../assets/client-4.svg';
import rightPic from '../assets/image-hero-desktop.png';
import '../index.css';

const Body = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-20 py-8">
     
      <div className="w-full md:w-1/2 text-center md:text-left">
        <div className="heading my-6 md:my-10 text-4xl md:text-5xl lg:text-6xl font-bold">
          <h1>Make</h1>
          <h1>Remote Work</h1>
        </div>
        <div className="para mx-auto md:mx-0 w-full md:w-3/4 lg:w-1/2 text-gray-500 mb-6 md:mb-10">
          <p>
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity
            soar.
          </p>
        </div>
        <div className="btn mb-8 md:mb-12">
          <button className="bg-black text-white py-2 px-6 rounded-xl font-semibold hover:bg-white hover:font-bold hover:text-black hover:border-2 hover:border-black transition-all duration-300">
            Learn More
          </button>
        </div>
        <div className="clients flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 mb-8 md:mb-0">
          <img src={Client2} alt="Client 2" className="w-16 md:w-24 h-auto" />
          <img src={Client1} alt="Client 1" className="w-16 md:w-24 h-auto" />
          <img src={Client4} alt="Client 4" className="w-16 md:w-24 h-auto" />
          <img src={Client3} alt="Client 3" className="w-16 md:w-24 h-auto" />
        </div>
      </div>


      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-end">
        <img className="w-full max-w-sm md:max-w-md lg:max-w-sm h-auto" src={rightPic} alt="Hero" />
      </div>
    </div>
  );
};

export default Body;
