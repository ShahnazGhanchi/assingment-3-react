import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const courses = [
  {
    id: 1,
    title: "Modern React with MUI & Redux",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400",
    rating: 4,
    reviews: 32,
    price: "$35",
  },
  {
    id: 2,
    title: "Ethical Hacking Bootcamp Zero to Mastery",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
    rating: 5,
    reviews: 14,
    price: "$35",
  },
  {
    id: 3,
    title: "Adobe Lightroom For Beginners: Complete Photo",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400",
    rating: 4,
    reviews: 6,
    price: "$25",
  },
  // Aap mazeed courses yahan add kar sakte hain
];

const PopularCourses = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-10 items-center">
      
      {/* Left Side: Heading */}
      <div className="lg:w-1/4">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          Most <br /> Popular <br /> Courses
        </h2>
      </div>

      {/* Right Side: Slider */}
      <div className="lg:w-3/4 w-full relative">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-16"
        >
          {courses.map((course) => (
            <SwiperSlide key={course.id}>
              <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                />
                <h3 className="font-bold text-gray-800 text-lg leading-snug h-14 overflow-hidden">
                  {course.title}
                </h3>
                
                {/* Stars and Rating */}
                <div className="flex items-center gap-1 mt-2 text-yellow-400">
                  {"★".repeat(course.rating)}
                  {"☆".repeat(5 - course.rating)}
                  <span className="text-gray-400 text-sm ml-1">({course.reviews})</span>
                </div>

                {/* Price and Arrow */}
                <div className="flex justify-between items-center mt-6">
                  <p className="text-[#13644F] font-bold text-xl">
                    {course.price}<span className="text-gray-400 text-sm font-normal">/ course</span>
                  </p>
                  <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-[#13644F] hover:text-white transition-colors group">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons (Bottom Right) */}
        <div className="absolute bottom-0 right-0 flex gap-4 z-10">
          <button className="prev-btn w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
            ←
          </button>
          <button className="next-btn w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;



