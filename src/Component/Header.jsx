export default function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-2.5">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        {/* Logo Section */}
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-bold whitespace-nowrap text-black-600">
            CourseSpace
          </span>
        </a>

        {/* Links - Desktop */}
        <div className="hidden md:flex items-center space-x-8 font-medium">
          <a href="#" className="text-black-600 hover:text-green-600 hover:underline hover:decoration-yellow-600 hover:decoration-wavy decoration-2">Home</a>
          <a href="#" className="hover:text-green-600 hover:underline hover:decoration-yellow-600 hover:decoration-wavy decoration-2">Course</a>
          <a href="#" className="text-black-700hover:text-green-600 hover:underline hover:decoration-yellow-600 hover:decoration-wavy decoration-2">Testimonial</a>
          <a href="#" className="text-black-700 hover:text-green-600 hover:underline hover:decoration-yellow-600 hover:decoration-wavy decoration-2">Mentor</a>
        </div>

        {/* Button Section */}
        <div className="flex items-center gap-4">
         <button className="text-green-600 bg-transparent border-2 border-green-600 hover:bg-green-600 hover:text-white font-medium rounded-full text-sm px-5 py-2.5 focus:outline-none shadow-sm transition duration-300">
  Sign In
</button>
          <button className="text-White bg-green-600 hover:bg-transparent  border-2 border-green-600 font-medium rounded-full text-sm px-5 py-2.5 focus:outline-none shadow-sm transition">
            singout
          </button>
        </div>
      </div>
    </nav>
  );
}