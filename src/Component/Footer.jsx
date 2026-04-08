import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#006d6d] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Column 1: Logo & Info */}
        <div className="col-span-1 md:col-span-1">
          <h3 className="text-2xl font-bold mb-6">CourseSpace</h3>
          <p className="text-gray-200 leading-relaxed">
            Set the way of learning according to your wishes with some of the benefits that you get us.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="font-bold text-xl mb-6">Services</h4>
          <ul className="space-y-4 text-gray-200">
            <li className="hover:text-yellow-400 cursor-pointer transition-all">UI/UX Design</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all">Mobile Development</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all">Web Development</li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h4 className="font-bold text-xl mb-6">Company</h4>
          <ul className="space-y-4 text-gray-200">
            <li className="hover:text-yellow-400 cursor-pointer transition-all">About Us</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all">Contact</li>
            <li className="hover:text-yellow-400 cursor-pointer transition-all">FAQ</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-bold text-xl mb-6">Contact</h4>
          <p className="text-gray-200 mb-2">shahnaz.dev@example.com</p>
          <p className="text-gray-200">+92 300 0000000</p>
        </div>

      </div>

      {/* Bottom Copyright Line */}
      <div className="max-w-7xl mx-auto px-6 border-t border-teal-500 mt-16 pt-8 text-center text-sm text-gray-300">
        <p>© 2026 CourseSpace. All Rights Reserved. Built by Shahnaz Shakir</p>
      </div>
    </footer>
  );
};

export default Footer;