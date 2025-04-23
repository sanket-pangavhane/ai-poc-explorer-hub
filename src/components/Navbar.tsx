
import { ArrowRight } from "lucide-react";

const NAV_ITEMS = [
  { label: "About Us", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Services", href: "#" },
  { label: "AI Lab", href: "#" },
  { label: "Insights", href: "#" },
  { label: "Careers", href: "#" },
];

const Navbar = () => (
  <nav className="w-full h-20 bg-[#1e2040] flex items-center px-8 shadow z-50 fixed top-0 left-0 transition-colors duration-300">
    {/* Logo */}
    <div className="flex items-center gap-2">
      <img src="/lovable-uploads/8b259f13-a00b-4332-9a05-ea009bd4c8eb.png" alt="Benchmark Logo" className="h-9 w-auto" />
      <span className="ml-3 text-2xl font-bold text-white tracking-wide hidden sm:inline">Benchmark</span>
    </div>
    {/* Navigation */}
    <div className="flex-grow flex items-center justify-center gap-1 lg:gap-6">
      {NAV_ITEMS.map((item) => (
        <a 
          key={item.label}
          href={item.href}
          className="mx-2 px-1 py-2 text-white text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer relative"
        >
          {item.label}
        </a>
      ))}
    </div>
    {/* Contact Button */}
    <a 
      href="#contact"
      className="flex items-center gap-2 px-6 py-2 rounded-full font-semibold bg-white text-[#1e2040] text-base drop-shadow-md border-2 border-white hover:bg-yellow-400 hover:text-[#1e2040] transition-colors duration-300 group"
    >
      <span>Contact us</span>
      <span className="inline-flex items-center justify-center rounded-full bg-yellow-400 p-1 ml-1" style={{
        boxShadow: "0 1px 4px 0 rgba(30,32,64,0.11)",
        backgroundColor: "#fde047"
      }}>
        <ArrowRight
          size={18}
          className="rounded-full"
          color="#1e2040"
          strokeWidth={2.5}
          style={{
            background: "#1e2040",
            borderRadius: "9999px",
            padding: 2,
            boxShadow: "0px 0px 0px 3px #fde047",
            display: "inline-block"
          }}
        />
      </span>
    </a>
  </nav>
);

export default Navbar;
