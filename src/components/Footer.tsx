export const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0B0F19] text-gray-400" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10 text-left">
        {/* Brand */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">
           {import.meta.env.VITE_COMPANY_NAME}
          </h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Empowering students with practical skills, real-world projects, and
            career-focused training to succeed in the tech industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-medium mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#courses" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#why" className="hover:text-white">
                Why Us
              </a>
            </li>
            <li>
              <a href="#batch" className="hover:text-white">
                Batch
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-medium mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Email: coderise@email.com</li>
            <li>Phone: +91 {import.meta.env.VITE_COMPANY_MOBILE_NO}</li>
            <li>Location: Tamil Nadu, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="text-center text-xs text-gray-500 border-t border-white/10 py-4">
        © 2026 {import.meta.env.VITE_COMPANY_NAME}. All rights reserved.
      </div>
    </footer>
  );
};
