import React from 'react';
import studentImg from './images/feature-img.webp';

const FeatureSection = () => {
  const features = [
    {
      title: "Easy Accessable",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      icon: "📚",
    },
    {
      title: "More Affordable Cost",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      icon: "💰",
    },
    {
      title: "Flexible Study Time",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      icon: "⏰",
    },
    {
      title: "Consultation With Mentor",
      desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
      icon: "👥",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
      
      {/* LEFT SIDE: Image Section */}
      <div className="w-full md:w-1/2 relative">
        <div className="bg-[#f9d392] rounded-t-full rounded-bl-full overflow-hidden">
          <img 
            src={studentImg} 
            alt="Student" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-10 -right-4 bg-white p-5 shadow-2xl rounded-2xl border border-gray-50 w-64 hidden lg:block">
    <h5 className="font-bold text-gray-800 mb-4">Lorem ipsum dolor</h5>
    
    {/* UI/UX Design Progress */}
    <div className="mb-3">
      <div className="flex justify-between text-[10px] font-bold mb-1 text-gray-500">
        <span>UI/UX Design</span>
      </div>
      <div className="w-full bg-gray-100 h-1.5 rounded-full">
        <div className="bg-pink-500 h-1.5 rounded-full w-[80%]"></div>
      </div>
    </div>

    {/* Mobile Development */}
    <div className="mb-3">
      <div className="flex justify-between text-[10px] font-bold mb-1 text-gray-500">
        <span>Mobile Development</span>
      </div>
      <div className="w-full bg-gray-100 h-1.5 rounded-full">
        <div className="bg-teal-400 h-1.5 rounded-full w-[60%]"></div>
      </div>
    </div>

    {/* Web Development */}
    <div>
      <div className="flex justify-between text-[10px] font-bold mb-1 text-gray-500">
        <span>Web Development</span>
      </div>
      <div className="w-full bg-gray-100 h-1.5 rounded-full">
        <div className="bg-blue-600 h-1.5 rounded-full w-[90%]"></div>
      </div>
    </div>
  </div>

  {/* 2. LOWER FLOATING CARD (Percentage Circle) */}
  <div className="absolute bottom-10 left-0 bg-white p-4 shadow-2xl rounded-2xl border border-gray-50 flex flex-col items-center w-36">
    <div className="text-left w-full mb-2">
        <p className="font-bold text-gray-800 text-sm">Lorem ipsum</p>
        <p className="text-[10px] text-gray-400">Lorem ipsum</p>
    </div>
    
    {/* Percentage Circle using Tailwind Ring */}
    <div className="relative flex items-center justify-center w-16 h-16">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          className="text-gray-100"
          strokeDasharray="100, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="text-teal-500"
          strokeDasharray="75, 100"
          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute text-teal-500 font-bold text-sm">75%</span>
    </div>
  </div>

</div>
        
        {/* Floating Badges (Optional - As seen in your image) */}
        <div className="absolute top-10 right-0 bg-white p-4 shadow-xl rounded-xl border border-gray-100 hidden sm:block">
          <p className="text-xs font-bold text-gray-400 uppercase">Lorem ipsum</p>
          <div className="h-1 w-20 bg-pink-500 mt-1"></div>
          <div className="h-1 w-16 bg-blue-500 mt-2"></div>
        </div>
      {/* </div> */}

      {/* RIGHT SIDE: Content Section */}
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Make your <span className="text-[#006d6d] relative">
            Learning
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="#f1c40f" strokeWidth="2" fill="transparent" />
            </svg>
          </span> Enjoyable
        </h1>

        <p className="text-gray-500 mt-8 text-lg leading-relaxed">
          Set the way of learning according to your wishes with some of the 
          benefits that you get us, so you on enjoy the lessons that we provide.
        </p>

        {/* 4 Categories Grid (2 Upper, 2 Lower) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          {features.map((item, index) => (
            <div key={index} className="flex gap-4">
              {/* Icon Box */}
              <div className="w-12 h-12 shrink-0 bg-[#006d6d] flex items-center justify-center rounded-lg text-white shadow-lg">
                <span className="text-xl">{item.icon}</span>
              </div>
              
              {/* Text Area */}
              <div>
                <h4 className="font-bold text-[#e67e22] text-lg">{item.title}</h4>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FeatureSection;