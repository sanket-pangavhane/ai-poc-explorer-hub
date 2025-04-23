
import { ArrowRight } from "lucide-react";

const mockPocs = [
  {
    name: "Custom Model Utilization",
    description: "Tailored AI solutions for targeted outcomes.",
    img: "/public/lovable-uploads/21bbf1ff-bafc-4c69-9972-c5a20aaa5ddd.png",
  },
  {
    name: "AI Assistants and Chatbot Development",
    description: "Interactive AI for engaging customer experiences.",
    img: "/public/lovable-uploads/21bbf1ff-bafc-4c69-9972-c5a20aaa5ddd.png",
  },
  {
    name: "AI-Powered Automation",
    description: "Smart automation for streamlined operations.",
    img: "/public/lovable-uploads/21bbf1ff-bafc-4c69-9972-c5a20aaa5ddd.png",
  },
];

const PocList = () => (
  <main className="w-full min-h-screen pt-36 pb-12 bg-[#F6F6F7]">
    {/* Headings */}
    <div className="flex flex-col items-center mb-10">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1A1F2C] mb-4 text-center" style={{ fontFamily: "inherit" }}>
        Our complete suite of Generative AI solutions
      </h2>
      <div className="text-lg md:text-xl font-normal text-[#212338] mb-1 text-center max-w-2xl">
        Our Generative AI services cover every phase of development,
        <br className="hidden sm:block" />
        ensuring seamless integration and meaningful results for your business.
      </div>
    </div>
    {/* Cards */}
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-7 px-3 sm:px-10">
      {mockPocs.map((poc, idx) => (
        <div
          key={poc.name}
          className="flex flex-col items-center bg-[#F1F8FE] rounded-2xl shadow-sm px-6 py-10 md:py-12 border-0 transition-transform hover:shadow-lg hover:scale-[1.025] hover:bg-[#e7f4ff] duration-300"
          style={{ minHeight: 370 }}
        >
          {/* Icon/Image */}
          <div className="mb-5 flex items-center justify-center">
            <img
              src="/lovable-uploads/21bbf1ff-bafc-4c69-9972-c5a20aaa5ddd.png"
              alt="POC Icon"
              className="h-20 w-20 object-contain"
              draggable={false}
            />
          </div>
          {/* Name */}
          <div className="text-xl md:text-2xl font-semibold text-[#1e2040] text-center mb-4">
            {poc.name}
          </div>
          {/* Description */}
          <div className="text-md text-center text-[#333344] mb-7 font-normal max-w-xs">
            {poc.description}
          </div>
          {/* Visit Button Styled as Contact Us */}
          <button
            type="button"
            className="group relative flex items-center justify-center gap-2 px-7 py-2 rounded-full font-semibold bg-white text-[#1e2040] border-2 border-white shadow-md hover:bg-yellow-400 hover:text-[#1e2040] transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            style={{
              overflow: "hidden"
            }}
          >
            <span className="relative z-10 font-semibold transition-colors">Visit</span>
            <span className="relative z-10 flex items-center justify-center ml-1">
              <span
                className="flex items-center justify-center rounded-full border-2 border-yellow-400"
                style={{
                  backgroundColor: "#1e2040",
                  boxShadow: "0px 0px 0px 3px #fde047",
                  width: 32,
                  height: 32,
                }}
              >
                <ArrowRight
                  size={18}
                  color="#fde047"
                  strokeWidth={2.5}
                  className="rounded-full"
                />
              </span>
            </span>
            {/* Gradient overlay for button effect */}
            <span
              className="absolute left-0 top-0 w-full h-full rounded-full z-0 pointer-events-none"
              style={{
                background: "linear-gradient(90deg, #fde047 0%, #fff700 100%)",
                opacity: 0,
                transition: "opacity 0.5s"
              }}
            ></span>
          </button>
        </div>
      ))}
    </div>
  </main>
);

export default PocList;
