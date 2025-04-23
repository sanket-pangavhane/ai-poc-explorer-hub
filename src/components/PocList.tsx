
import { ArrowRight } from "lucide-react";

const mockPocs = [
  { name: "Document Classification" },
  { name: "AI Fraud Detector" },
  { name: "Smart Image Tagging" },
  { name: "Sentiment Analyzer" },
  { name: "Voice-to-Text Transcriber" },
];

const PocList = () => (
  <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg mt-8 border-0">
    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#1A1F2C]">Proofs of Concept</h2>
    <ul className="divide-y divide-gray-100">
      {mockPocs.map((poc, idx) => (
        <li
          key={poc.name}
          className="flex items-center justify-between py-4 px-2 rounded-lg transition-colors duration-200 group hover:bg-[#f1f0fb]"
        >
          <span className="text-lg text-gray-900 font-medium">{poc.name}</span>
          <button
            className="relative flex items-center gap-2 px-5 py-2 rounded-lg font-semibold bg-[#9b87f5] text-white overflow-hidden transition-colors duration-500 focus:outline-none
            before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:bg-gradient-to-r before:from-[#7E69AB] before:to-[#9b87f5] before:z-0 before:transition-all before:duration-500 hover:before:w-full
            "
            type="button"
          >
            <span className="relative z-10">Visit</span>
            <span className="relative z-10 flex items-center justify-center">
              <span
                className="flex items-center justify-center rounded-full bg-[#1e2040] p-1"
                style={{
                  boxShadow: "0 1px 4px 0 rgba(30,32,64,0.11)",
                  backgroundColor: "#1e2040",
                }}
              >
                <ArrowRight
                  size={16}
                  className="rounded-full"
                  color="#fde047"
                  strokeWidth={2.5}
                  style={{
                    background: "#fde047",
                    borderRadius: "9999px",
                    padding: 2,
                    boxShadow: "0px 0px 0px 3px #fde047",
                    display: "inline-block",
                  }}
                />
              </span>
            </span>
            {/* Fancy background transition layer */}
            <span className="absolute left-0 top-0 w-full h-full rounded-lg z-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, rgba(126,105,171,1) 0%, rgba(155,135,245,1) 100%)",
                    opacity: 0,
                    transition: "opacity 0.5s",
                  }}
                  aria-hidden="true"
            />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default PocList;
