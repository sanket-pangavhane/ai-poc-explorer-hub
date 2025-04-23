
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
  <nav className="w-full h-28 bg-[#1e2040] flex flex-col items-center px-8 shadow z-50 fixed top-0 left-0 transition-colors duration-300">
    {/* Logo above the Benchmark name */}
    <div className="flex flex-col items-center mt-2">
      <img
        src="/lovable-uploads/8b259f13-a00b-4332-9a05-ea009bd4c8eb.png"
        alt="Benchmark Logo"
        className="h-9 w-auto mb-1"
        draggable={false}
        style={{ marginBottom: "2px" }}
      />
      <span className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: "inherit" }}>Benchmark</span>
    </div>
    {/* Right-side navigation */}
    <div className="absolute right-8 top-[22px] flex items-center gap-2 lg:gap-7">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className="px-3 py-2 text-white text-base font-medium hover:text-yellow-200 transition-colors cursor-pointer"
        >
          {item.label}
        </a>
      ))}
      {/* Contact Button stylized */}
      <a
        href="#contact"
        className="flex items-center gap-2 px-6 py-2 rounded-full bg-white hover:bg-yellow-400 border-2 border-yellow-400 transition-colors duration-300 ml-6 shadow-md"
        style={{
          minWidth: 130,
          fontFamily: "inherit",
          fontWeight: 600,
          fontSize: 17,
          color: "#1e2040",
        }}
      >
        <span>Contact us</span>
        <span
          className="inline-flex items-center justify-center rounded-full"
          style={{
            backgroundColor: "#fde047",
            width: 32,
            height: 32,
            marginLeft: 4,
            boxShadow: "0 1px 4px 0 rgba(30,32,64,0.11)",
            border: "2.2px solid #1e2040",
            display: "flex"
          }}
        >
          <ArrowRight
            size={18}
            color="#1e2040"
            strokeWidth={2.5}
            className="rounded-full"
            style={{
              background: "#1e2040",
              borderRadius: "9999px",
              padding: 2.5,
              display: "inline-block"
            }}
          />
        </span>
      </a>
    </div>
  </nav>
);

export default Navbar;
