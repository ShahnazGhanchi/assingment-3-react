import React from 'react';

const Newsletter = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      {/* Orange Background Container */}
      <div className="bg-[#f39c12] rounded-[40px] py-16 px-6 text-center flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Subscribe to Our News Letter
        </h2>
        <p className="text-gray-800 text-lg mb-10">
          Subscribe to our newsletter to get information about our courses.
        </p>

        {/* Input Field and Button */}
        <div className="w-full max-w-2xl bg-white rounded-full p-2 flex items-center shadow-lg">
          <input 
            type="email" 
            placeholder="Enter your Email Address" 
            className="flex-grow bg-transparent px-6 py-3 outline-none text-gray-700"
          />
          <button className="bg-[#006d6d] text-white px-8 py-3 rounded-full font-bold hover:bg-[#005a5a] transition-all">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;