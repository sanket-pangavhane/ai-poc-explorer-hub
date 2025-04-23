
import { ArrowRight } from "lucide-react";

const mockPocs = [
  {
    name: "Prompt Engineering",
    description: "Fine-tuning AI interactions for optimal results and efficiency.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "Gen AI Consulting",
    description: "Catalyzing AI innovation and strategic growth.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "Custom Model Utilization",
    description: "Tailored AI solutions for targeted outcomes.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "AI Assistants",
    description: "Interactive AI for engaging customer experiences.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "AI-Powered Automation",
    description: "Smart automation for streamlined operations.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "GenAI for Marketing",
    description: "Unleash Generative AI to supercharge marketing campaigns.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "Document Intelligence",
    description: "AI-driven insights from documents at scale.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "Vision AI Solutions",
    description: "Image and video analysis powered by cutting-edge AI.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "Natural Language Processing",
    description: "Extract actionable intelligence from unstructured data.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "Generative Search",
    description: "Next-level search experiences using generative AI.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "Voice AI",
    description: "Natural conversations and automation through voice.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
  {
    name: "Predictive Analytics",
    description: "Future-ready business intelligence and predictions.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  },
];

const PocList = () => (
  <main className="w-full min-h-screen pt-36 pb-16 bg-[#F6F6F7]">
    {/* Headings */}
    <div className="flex flex-col items-center mb-12">
      <span className="text-[#1e2040] text-base font-semibold mb-2 tracking-wide" style={{ letterSpacing: 1.5 }}>
        OUR COMPLETE SUITE OF GENERATIVE AI SOLUTIONS
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-4 text-center" style={{ fontFamily: "inherit", letterSpacing: ".5px" }}>
        Our complete suite of Generative AI solutions
      </h2>
      <div className="text-lg md:text-xl font-normal text-[#212338] text-center max-w-2xl">
        Our Generative AI services cover every phase of development,
        <br className="hidden sm:block" />
        ensuring seamless integration and meaningful results for your business.
      </div>
    </div>
    {/* Cards Grid */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 px-2 md:px-16 mx-auto">
      {mockPocs.map((poc, idx) => (
        <div
          key={poc.name}
          className="flex flex-col items-center bg-[#f5fbff] rounded-2xl shadow-[0_3px_24px_0_rgba(80,90,180,0.07)] px-7 py-12 border border-transparent hover:shadow-lg transition-transform hover:scale-[1.025] duration-300"
          style={{ minHeight: 340, borderRadius: 24 }}
        >
          {/* Icon/Image */}
          <div className="mb-5 flex items-center justify-center">
            <img
              src={poc.img}
              alt="POC Icon"
              className="h-20 w-20 object-contain"
              draggable={false}
            />
          </div>
          {/* Name */}
          <div className="text-xl md:text-2xl font-bold text-[#1e2040] text-center mb-2" style={{ fontFamily: "inherit" }}>
            {poc.name}
          </div>
          {/* Description */}
          <div className="text-md text-center text-[#333344] mb-7 font-normal max-w-xs">
            {poc.description}
          </div>
          {/* Visit Button (styled like contact us) */}
          <button
            type="button"
            className="group flex items-center gap-2 px-7 py-2 rounded-full bg-white hover:bg-yellow-400 border-2 border-yellow-400 transition-colors duration-400 outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 shadow"
            style={{
              fontWeight: 600,
              fontFamily: "inherit",
              fontSize: 16,
              color: "#1e2040",
              minWidth: 110,
              transition: "background 0.5s linear"
            }}
          >
            <span className="relative z-10 font-semibold transition-colors">Visit</span>
            <span className="relative z-10 flex items-center justify-center ml-1">
              <span
                className="flex items-center justify-center rounded-full"
                style={{
                  backgroundColor: "#fde047",
                  border: "2.2px solid #1e2040",
                  boxShadow: "0px 0px 0px 3px #fde047",
                  width: 30,
                  height: 30,
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
                  }}
                />
              </span>
            </span>
          </button>
        </div>
      ))}
    </div>
  </main>
);

export default PocList;
