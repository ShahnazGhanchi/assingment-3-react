import React from 'react';
import HeroImg from './images/hero-img.webp';


const Hero = () => {
  return (
    <>
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        
        {/* Content Side */}
        <div className="flex-1 text-center lg:text-left">
         <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
 
  <span className="relative inline-block text-green-800 z-0">
    Improve
    <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-500 z-[-1] "></span>
  </span> 
  {" "}your Skills <br />
  with Different ways
</h1>
          <p className="mt-6 text-lg text-gray-600 max-w-lg mx-auto lg:mx-0">
           Let's take an online course to improve your skills in  <br/> a different way, you can set your own study time <br /> according to your learning speed. So you san study comfortable and absorb tge material easily.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-8 py-4 bg-green-800 text-white font-bold rounded-full  transition">
              Get Started
            </button>
            <button className="px-8 py-4bg-transparent border-2 border-green-600 text-green-700 font-bold rounded-full transition">
              Watch video
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 relative flex justify-center">
          <img 
            src={HeroImg} 
            alt="Learning Illustration" 
            className="w-3/4 h-auto rounded-3xl shadow-xl"
          />
          <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-start gap-3 max-w-[220px]">
    {/* Icon */}
    <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>

    {/* Text Content */}
    <div>
      <h4 className="font-bold text-yellow-500 text-sm">Certificate</h4>
      <p className="text-xs text-black-500 mt-1 leading-tight">
        There are certificates for all courses.
      </p>
    </div>
        </div>
        </div>

      </div>
    </section>
<section className="bg-white py-10 px-6 lg:px-5 shadow-sm">
  <div className="max-w-4xl mx-auto">
    <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-center">
      
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-yellow-500">10K+</h2>
        <p className="mt-2 text-black-500 font-medium">Students</p>
      </div>

      
      <div className="hidden md:block h-12 w-px bg-gray-200"></div>

      
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-yellow-500">20+</h2>
        <p className="mt-2 text-black-500 font-medium">Quality Course</p>
      </div>
    <div className="hidden md:block h-12 w-px bg-gray-200"></div>
     <div className="flex flex-col items-center">
        <h2 className="text-4xl font-extrabold text-yellow-500">10+</h2>
        <p className="mt-2 text-black-500 font-medium">Experience Mentors</p>
      </div>

    </div>
  </div>

</section>
</>

  );
};

export default Hero;