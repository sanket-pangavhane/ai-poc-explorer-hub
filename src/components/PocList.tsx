
import { ArrowRight } from "lucide-react";

const mockPocs = [
  { name: "Document Classification" },
  { name: "AI Fraud Detector" },
  { name: "Smart Image Tagging" },
  { name: "Sentiment Analyzer" },
  { name: "Voice-to-Text Transcriber" }
];

const PocList = () => (
  <main className="w-full pt-32 max-w-5xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A1F2C] mb-12 text-left pl-3">Proofs of Concept</h2>
    <ul className="divide-y divide-gray-200 bg-transparent">
      {mockPocs.map((poc, idx) => (
        <li
          key={poc.name}
          className="flex flex-col sm:flex-row items-center justify-between py-7 px-2 sm:px-8 group"
        >
          <span className="text-xl sm:text-2xl font-medium text-[#212338] mb-2 sm:mb-0 tracking-tight transition-colors">
            {poc.name}
          </span>
          <button
            type="button"
            className="relative overflow-hidden flex items-center gap-4 px-7 py-3 rounded-full font-semibold bg-white text-[#1e2040] shadow-lg border-2 border-white group/button transition-colors duration-500 focus:outline-none before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:rounded-full before:bg-gradient-to-r before:from-yellow-400 before:to-yellow-400 before:z-0 before:transition-all before:duration-500 hover:before:w-full"
            style={{ minWidth: 150 }}
          >
            <span className="relative z-10 font-semibold group-hover/button:text-[#1e2040] transition-colors">Visit</span>
            <span className="relative z-10 flex items-center justify-center">
              <span className="flex items-center justify-center rounded-full bg-yellow-400 p-1 shadow" style={{
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
            </span>
            {/* Gradient overlay on hover */}
            <span
              className="absolute left-0 top-0 w-full h-full rounded-full z-0 pointer-events-none group-hover/button:opacity-100"
              style={{
                background: "linear-gradient(90deg, #fde047 0%, #fff700 100%)",
                opacity: 0,
                transition: "opacity 0.5s"
              }}
              aria-hidden="true"
            />
          </button>
        </li>
      ))}
    </ul>
  </main>
);

export default PocList;
