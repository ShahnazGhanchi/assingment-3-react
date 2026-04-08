import React, { useState } from 'react';
import TestimonialBoy from './images/boy-testimonial.webp';

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      heading: "Detailed learning materials",
      text: "Classes that provide very detailed material in term of making UI UX Design starting team making low and hight quality, system designs, using data layout and make prototypes and testing.",
      name: "Ashley Graham",
      role: "Back-End Developer",
      image: "https://randomuser.me/api/portraits/women/44.jpg" 
    },
     {
      id: 2,
      heading: "Interactive Frontend Labs",
      text: "The Frontend development journey here is incredible. Learning React and Tailwind CSS was so much fun with the interactive detailed learning materials provided.",
      name: "James Wilson",
      role: "Front-End Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
     {
      id: 3,
      heading: "Scalable Backend Architecture",
      text: "As a Backend developer, I was looking for a course that explains database architecture clearly. This program exceeded my expectations with its step-by-step approach.",
      name: "Michael Chen",
      role: "Node.js Expert",
      image: "https://randomuser.me/api/portraits/men/46.jpg"
    },
     {
      id: 4,
    heading: "Mastering Animations",
     text: "Building responsive layouts and working with GSAP animations was the best part. The project-based learning is what makes this platform stand out from others.",
      name: "Sarah Jenkins",
      role: "Full-Stack Developer",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
  ];
  // 2. Next aur Previous functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-16 font-sans">
      
      {/* LEFT SIDE: Content */}
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <h1 className="text-[#006d6d] font-bold text-5xl mb-2"> Testimonial</h1>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          What our <span className="text-[#006d6d] relative">
            Students
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-[#f1c40f] rounded-full"></span>
          </span> Say
        </h2>

        <div className="mt-12">
          <h5 className="font-bold text-xl text-gray-800 mb-4">{testimonials[currentIndex].heading}</h5>
          <p className="text-gray-500 leading-relaxed text-lg mb-8">
            
            {testimonials[currentIndex].text}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={testimonials[currentIndex].image} 
                className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" 
                alt="User"
              />
              <div>
                <h6 className="font-bold text-gray-900">{testimonials[currentIndex].name}</h6>
                <p className="text-sm text-gray-400">{testimonials[currentIndex].role}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <button onClick={prevSlide}  className="w-12 h-12 rounded-full border border-teal-600 flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all">
                ←
              </button>
              <button onClick={nextSlide} className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white hover:bg-teal-700 shadow-lg transition-all">
                →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: Image Section */}
      <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center relative">
        <div className="bg-[#f9d392] rounded-full w-[85%] aspect-square absolute top-10 -z-10 opacity-70"></div>
        
        <div className="rounded-t-full rounded-bl-full overflow-hidden w-[80%] aspect-[4/5] bg-gray-100">
           <img 
        
            src={TestimonialBoy} 
            alt="Student Testimonial" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;