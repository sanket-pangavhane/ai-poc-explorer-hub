import { ArrowRight } from "lucide-react";

const mockPocs = [{
  name: "Riteway Scheduling Bot",
  description: "AI-powered scheduling assistant for streamlined appointments.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://riteway_scheduling_bot.aiusecase.benchmarkit.solutions"
}, {
  name: "RC Report",
  description: "Automated reporting platform for risk and compliance.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://rc-report.aiusecase.benchmarkit.solutions"
}, {
  name: "RC Recommended System",
  description: "Recommendation system for smarter business decisions.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://rc-recommended-system.aiusecase.benchmarkit.solutions"
}, {
  name: "Grafana",
  description: "Intuitive dashboards for monitoring and analytics.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://grafana.aiusecase.benchmarkit.solutions"
}, {
  name: "BTR GenAI",
  description: "Generative AI tools for business transformation.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://btr-genai.aiusecase.benchmarkit.solutions"
}, {
  name: "BTR ML",
  description: "Machine learning solutions for advanced analytics.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://btr-ml.aiusecase.benchmarkit.solutions"
}, {
  name: "Smart Analyzer",
  description: "Real-time data and document analyzer with AI insights.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://smart_analyzer.aiusecase.benchmarkit.solutions"
}, {
  name: "LinkedIn Intelligence",
  description: "Social network data enhancer for business opportunities.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://linkdin.aiusecase.benchmarkit.solutions"
}, {
  name: "Filta",
  description: "Data filtering and enrichment at enterprise scale.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://filta.aiusecase.benchmarkit.solutions"
}, {
  name: "CRM Automation",
  description: "Customer relationship management with AI-powered features.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://crm.aiusecase.benchmarkit.solutions"
}, {
  name: "RC APT",
  description: "Automated Policy Testing for Risk & Compliance.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://rc-apt.aiusecase.benchmarkit.solutions"
}, {
  name: "AWS Textract",
  description: "Cloud-based document extraction using AWS Textract.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://aws_textract.aiusecase.benchmarkit.solutions"
}, {
  name: "Easy OCR (New)",
  description: "Fast accurate document OCR with the latest easyOCR pipeline.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://easy_ocr-new.aiusecase.benchmarkit.solutions"
}, {
  name: "Google Doc AI (New)",
  description: "Document processing via Google DocAI platform.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://google_doc_ai-new.aiusecase.benchmarkit.solutions"
}, {
  name: "PyTesseract OCR (New)",
  description: "OCR engine based on PyTesseract for image extraction.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://pytesseract_ocr-new.aiusecase.benchmarkit.solutions"
}, {
  name: "RC AI Assistance",
  description: "AI-driven assistance for real-time compliance queries.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://rc-ai-assistance.aiusecase.benchmarkit.solutions"
}, {
  name: "Engage AI",
  description: "AI engagement platform to optimize customer interaction.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://engage_ai.aiusecase.benchmarkit.solutions"
}, {
  name: "ComplIAI",
  description: "AI compliance companion for businesses.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://compliai.aiusecase.benchmarkit.solutions"
}, {
  name: "Text Highlight",
  description: "AI system for key phrase highlighting and data extraction.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://text-highlight.aiusecase.benchmarkit.solutions/"
}, {
  name: "Loan Underwriting Agent",
  description: "Automated loan agent for smarter underwriting.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://loan_underwriting.aiusecase.benchmarkit.solutions/"
}, {
  name: "Oil Quality and Dimension",
  description: "AI solution for oil sample quality and measurement.",
  img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
  link: "https://oil-qulity.aiusecase.benchmarkit.solutions/"
}];

const PocList = () => <main className="w-full min-h-screen pt-36 pb-16 bg-transparent">
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
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 px-4 md:px-10 lg:px-24 mx-auto max-w-7xl">
      {mockPocs.map((poc, idx) => <div key={poc.name} style={{
      minHeight: 320,
      borderRadius: 28,
      backgroundColor: 'rgba(243, 252, 255, 1)'
    }} className="flex flex-col items-center bg-white rounded-3xl shadow-[0_6px_32px_0_rgba(243, 252, 255, 1)] px-6 py-10 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-transform duration-300">
          <div className="mb-5 flex items-center justify-center">
            <img src={poc.img} alt="POC Icon" className="h-20 w-20 object-contain" draggable={false} />
          </div>
          <div className="text-lg md:text-xl font-bold text-[#1e2040] text-center mb-1 font-playfair">
            {poc.name}
          </div>
          <div className="text-md text-center text-[#333344] mb-6 font-inter max-w-xs">
            {poc.description}
          </div>
          <a href={poc.link} target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-2 px-7 py-2 rounded-full font-bold font-inter bg-gradient-to-br from-yellow-300 to-yellow-400 hover:from-yellow-400 hover:to-yellow-300 shadow-lg border-none active:scale-95 
                        transition-all duration-200 text-[#1e2040] text-base outline-none focus-visible:ring-2 focus-visible:ring-yellow-400" style={{
        minWidth: 122,
        letterSpacing: 0.02
      }}>
            <span className="relative z-10 font-semibold flex items-center">
              Visit
              <ArrowRight size={19} className="ml-1 transition-transform group-hover:translate-x-0.5" color="#1e2040" strokeWidth={2.3} />
            </span>
          </a>
        </div>)}
    </div>
  </main>;

export default PocList;
