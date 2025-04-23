
import { ArrowRight } from "lucide-react";

const mockPocs = [
  { name: "Document Classification" },
  { name: "AI Fraud Detector" },
  { name: "Smart Image Tagging" },
  { name: "Sentiment Analyzer" },
  { name: "Voice-to-Text Transcriber" },
];

const PocList = () => (
  <div className="w-full max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-lg mt-8">
    <h2 className="text-xl md:text-2xl font-semibold mb-6 text-[#1A1F2C]">Proofs of Concept</h2>
    <ul className="divide-y divide-gray-200">
      {mockPocs.map((poc, idx) => (
        <li key={poc.name} className="flex items-center justify-between py-3 group">
          <span className="text-lg text-gray-800">{poc.name}</span>
          <button
            className="flex items-center gap-1 bg-[#9b87f5] text-white px-4 py-1.5 rounded-lg font-medium hover:bg-[#7E69AB] transition shadow-md"
            // Add onClick to navigate when Visit is functional
            type="button"
          >
            Visit
            <ArrowRight className="ml-1" size={18} />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default PocList;
