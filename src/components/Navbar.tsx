const Navbar = () => {
  return (
    <div className="sticky top-0 bg-[#0B0F19]/70 backdrop-blur-xl border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <p className="text-lg font-semibold">CodeRise</p>

        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          <a href="#courses" className="hover:text-white">
            Courses
          </a>
          <a href="#why" className="hover:text-white">
            Why Us
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </div>

        <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 rounded-md text-sm font-medium hover:opacity-90">
          Enroll
        </button>
      </div>
    </div>
  );
};

export default Navbar;
