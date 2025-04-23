
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
  <main className="w-full min-h-screen pt-36 pb-16 bg-transparent">
    {/* Headings */}
    <div className="flex flex-col items-center mb-10">
      <span className="text-[#1e2040] text-sm font-semibold mb-2 tracking-widest uppercase font-inter">
        Our Complete Suite of Generative AI Solutions
      </span>
      <h2 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-3 text-center font-playfair">
        Our complete suite of Generative AI solutions
      </h2>
      <div className="text-lg md:text-xl font-normal text-[#212338] text-center max-w-2xl font-inter">
        Our Generative AI services cover every phase of development,
        <br className="hidden sm:block" />
        ensuring seamless integration and meaningful results for your business.
      </div>
    </div>
    {/* Cards Grid: 3 columns, 4 rows */}
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 px-4 md:px-10 lg:px-24 mx-auto max-w-7xl">
      {mockPocs.map((poc, idx) => (
        <div
          key={poc.name}
          className="flex flex-col items-center bg-white rounded-3xl shadow-[0_6px_32px_0_rgba(80,90,180,0.07)] px-6 py-10 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300"
          style={{
            minHeight: 320,
            borderRadius: 28,
          }}
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
          <div className="text-lg md:text-xl font-bold text-[#1e2040] text-center mb-1 font-playfair">
            {poc.name}
          </div>
          {/* Description */}
          <div className="text-md text-center text-[#333344] mb-6 font-inter max-w-xs">
            {poc.description}
          </div>
          {/* Visit Button (modern style) */}
          <button
            type="button"
            className="group relative flex items-center gap-2 px-7 py-2 rounded-full font-bold font-inter bg-gradient-to-br from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 shadow-lg border-none active:scale-95 
                        transition-all duration-200 text-[#1e2040] text-base outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
            style={{
              minWidth: 122,
              letterSpacing: 0.02,
            }}
          >
            <span className="relative z-10 font-semibold flex items-center">
              Visit
              <ArrowRight size={19} className="ml-1 transition-transform group-hover:translate-x-0.5" color="#1e2040" strokeWidth={2.3} />
            </span>
          </button>
        </div>
      ))}
    </div>
  </main>
);

export default PocList;
