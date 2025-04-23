
import React from "react";

const Footer = () => (
  <footer className="bm-footer w-full pt-16 pb-7 px-0 text-white mt-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {/* Services */}
        <div>
          <h3 className="text-gray-400 font-normal text-base mb-4">Services</h3>
          <ul className="space-y-2 font-poppins text-lg">
            <li>Generative AI</li>
            <li>Machine Learning</li>
            <li>Software Architectural Assessment</li>
            <li>UX Design</li>
            <li>Software Product Engineering</li>
            <li>Test Automation</li>
            <li>Performance Engineering</li>
            <li>DevOps</li>
          </ul>
        </div>
        {/* Industries */}
        <div>
          <h3 className="text-gray-400 font-normal text-base mb-4">Industries</h3>
          <ul className="space-y-2 font-poppins text-lg">
            <li>Insurance</li>
            <li>Martech</li>
            <li>Healthcare</li>
            <li>Banking and Finance</li>
          </ul>
        </div>
        {/* Explore */}
        <div>
          <h3 className="text-gray-400 font-normal text-base mb-4">Explore</h3>
          <ul className="space-y-2 font-poppins text-lg">
            <li>Home</li>
            <li>About Benchmark</li>
            <li>Life At Benchmark</li>
            <li>Careers</li>
            <li>Case Studies</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
            <li>Security Policy</li>
            <li>Sub Processors</li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h3 className="text-gray-400 font-normal text-base mb-4">Contact</h3>
          <div className="mb-3 flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M2.5 5.833A2.5 2.5 0 0 1 5 3.333h10A2.5 2.5 0 0 1 17.5 5.833v8.334a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5V5.833Z" stroke="#FFD700" strokeWidth="1.5" /><path d="M2.5 6.666 9.057 11.11a2.083 2.083 0 0 0 2.223 0L17.5 6.666" stroke="#FFD700" strokeWidth="1.5" /></svg>
            <span className="ml-1 text-base">info@benchmarkit.solutions</span>
          </div>
          <span className="block text-gray-400 mb-2 mt-4 text-sm">Our offices</span>
          <div className="flex gap-2 items-start mb-2">
            <svg width="19" height="19" viewBox="0 0 20 20" fill="none"><path d="M10 17.5s6.25-5 6.25-9.375A6.25 6.25 0 0 0 3.75 8.125C3.75 12.5 10 17.5 10 17.5Zm0 0V11.25" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="8.125" r="1.041" fill="#FFD700"/></svg>
            <div>
              <div className="text-base">651, Holiday Dr, Foster Plaza 5, Suit 400, Pittsburgh PA 15220</div>
              <div className="text-gray-400 text-sm">+1 407-878-3960</div>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <svg width="19" height="19" viewBox="0 0 20 20" fill="none"><path d="M10 17.5s6.25-5 6.25-9.375A6.25 6.25 0 0 0 3.75 8.125C3.75 12.5 10 17.5 10 17.5Zm0 0V11.25" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><circle cx="10" cy="8.125" r="1.041" fill="#FFD700"/></svg>
            <div>
              <div className="text-base">B-1403, Amar Business Zone, Baner, Pune, Maharashtra 411045</div>
              <div className="text-gray-400 text-sm">+91 87999 62270</div>
            </div>
          </div>
        </div>
      </div>
      {/* Socials and copyright */}
      <div className="mt-16 mb-3 border-t border-gray-500/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-5 text-gray-200">
          <span className="text-base">Follow us:</span>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-800 transition"><img src="/lovable-uploads/b47c49f4-0784-4762-affe-a073da6f89b3.png" alt="Instagram" className="w-5" /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-800 transition"><img src="/lovable-uploads/44b4795b-68fc-484c-91c6-dd223d90ecf4.png" alt="LinkedIn" className="w-5" /></a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-800 transition"><img src="/lovable-uploads/79bdd530-2059-4b21-8d7b-69db3ea5e335.png" alt="YouTube" className="w-5" /></a>
        </div>
        <div className="text-gray-400 text-sm text-center md:text-right">
          © 2025 Benchmark IT Solutions LLC. All Rights Reserved.
        </div>
      </div>
    </div>
    {/* Scroll to Top circular button */}
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full flex items-center justify-center bg-gray-300 text-gray-700 shadow-lg hover:bg-yellow-400 transition"
    >
      <svg width="22" height="22" fill="none"><path d="M11 16.5V5.5M11 5.5l-5.5 5.5M11 5.5l5.5 5.5" stroke="#393040" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
  </footer>
);

export default Footer;
