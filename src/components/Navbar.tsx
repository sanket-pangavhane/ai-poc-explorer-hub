
import { Menu } from "lucide-react";

const Navbar = () => (
  <nav className="w-full h-16 bg-[#1A1F2C] shadow flex items-center px-6 fixed top-0 left-0 z-50">
    <div className="flex items-center gap-3">
      <Menu className="text-white" size={28} />
      <span className="text-2xl font-bold text-white tracking-wide">PoC Explorer Hub</span>
    </div>
    <div className="ml-auto flex gap-6 items-center">
      {/* Placeholder links; add more as needed */}
      <a href="#" className="text-white text-base hover:text-[#9b87f5] transition">Home</a>
      <a href="#" className="text-white text-base hover:text-[#9b87f5] transition">About</a>
    </div>
  </nav>
);

export default Navbar;
