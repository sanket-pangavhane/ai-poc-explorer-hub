
import { ArrowRight } from "lucide-react";

const mockPocs = [
  {
    name: "riteway_scheduling_bot",
    description: "AI-powered scheduling assistant for streamlined appointments.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://riteway_scheduling_bot.aiusecase.benchmarkit.solutions"
  },
  {
    name: "rc-report",
    description: "Automated reporting platform for risk and compliance.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://rc-report.aiusecase.benchmarkit.solutions"
  },
  {
    name: "rc-recommended-system",
    description: "Recommendation system for smarter business decisions.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://rc-recommended-system.aiusecase.benchmarkit.solutions"
  },
  {
    name: "grafana",
    description: "Intuitive dashboards for monitoring and analytics.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://grafana.aiusecase.benchmarkit.solutions"
  },
  {
    name: "btr-genai",
    description: "Generative AI tools for business transformation.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://btr-genai.aiusecase.benchmarkit.solutions"
  },
  {
    name: "btr-ml",
    description: "Machine learning solutions for advanced analytics.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://btr-ml.aiusecase.benchmarkit.solutions"
  },
  {
    name: "smart_analyzer",
    description: "Real-time data and document analyzer with AI insights.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://smart_analyzer.aiusecase.benchmarkit.solutions"
  },
  {
    name: "linkdin",
    description: "Social network data enhancer for business opportunities.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://linkdin.aiusecase.benchmarkit.solutions"
  },
  {
    name: "filta",
    description: "Data filtering and enrichment at enterprise scale.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://filta.aiusecase.benchmarkit.solutions"
  },
  {
    name: "crm",
    description: "Customer relationship management with AI-powered features.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://crm.aiusecase.benchmarkit.solutions"
  },
  {
    name: "rc-apt",
    description: "Automated Policy Testing for Risk & Compliance.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://rc-apt.aiusecase.benchmarkit.solutions"
  },
  {
    name: "aws_textract",
    description: "Cloud-based document extraction using AWS Textract.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://aws_textract.aiusecase.benchmarkit.solutions"
  },
  {
    name: "easy_ocr-new",
    description: "Fast accurate document OCR with the latest easyOCR pipeline.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://easy_ocr-new.aiusecase.benchmarkit.solutions"
  },
  {
    name: "google_doc_ai-new",
    description: "Document processing via Google DocAI platform.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://google_doc_ai-new.aiusecase.benchmarkit.solutions"
  },
  {
    name: "pytesseract_ocr-new",
    description: "OCR engine based on PyTesseract for image extraction.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://pytesseract_ocr-new.aiusecase.benchmarkit.solutions"
  },
  {
    name: "rc-ai-assistance",
    description: "AI-driven assistance for real-time compliance queries.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://rc-ai-assistance.aiusecase.benchmarkit.solutions"
  },
  {
    name: "engage_ai",
    description: "AI engagement platform to optimize customer interaction.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://engage_ai.aiusecase.benchmarkit.solutions"
  },
  {
    name: "compliai",
    description: "AI compliance companion for businesses.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://compliai.aiusecase.benchmarkit.solutions"
  },
  {
    name: "Text Highlight",
    description: "AI system for key phrase highlighting and data extraction.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://text-highlight.aiusecase.benchmarkit.solutions/"
  },
  {
    name: "Loan Underwriting Agent",
    description: "Automated loan agent for smarter underwriting.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://loan_underwriting.aiusecase.benchmarkit.solutions/"
  },
  {
    name: "Oil Quality and Dimension",
    description: "AI solution for oil sample quality and measurement.",
    img: "/lovable-uploads/3e1a77e5-8243-4f54-9bb1-61287a7e3cea.png",
    link: "https://oil-qulity.aiusecase.benchmarkit.solutions/"
  }
];

const PocList = () => (
  <main
    className="w-full min-h-screen pt-36 pb-16"
    style={{ backgroundColor: "#fff", fontFamily: "var(--archivo), Inter, sans-serif" }}
  >
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
      {mockPocs.map((poc) => (
        <div
          key={poc.name}
          style={{
            minHeight: 340,
            borderRadius: 32,
            background: "rgba(243, 252, 255, 1)"
          }}
          className="flex flex-col items-center shadow-[0_6px_32px_0_rgba(192,210,255,0.16)] px-8 py-9 border border-[#f2f6f9] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
        >
          <div className="mb-5 flex items-center justify-center">
            <img
              src={poc.img}
              alt="POC Icon"
              className="h-20 w-20 object-contain rounded-xl shadow"
              draggable={false}
              style={{ background: "#eafdff" }}
            />
          </div>
          <div
            className="text-lg md:text-xl font-bold text-[#1e2040] text-center mb-1"
            style={{
              fontFamily: "var(--archivo), Inter, sans-serif",
              letterSpacing: "0.01em"
            }}
          >
            {poc.name}
          </div>
          <div
            className="text-md text-center text-[#3d3d56] mb-8 font-inter max-w-xs"
            style={{
              fontFamily: "var(--archivo), Inter, sans-serif",
            }}
          >
            {poc.description}
          </div>
          <a
            href={poc.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex items-center justify-center gap-2 px-8 py-2"
            style={{
              // Mimic .btn and .btn-primary from user's CSS in Tailwind+inline css
              borderRadius: "60px",
              background: "#fff",
              color: "#1e2040",
              border: "2px solid #fff",
              fontFamily: "var(--poppins), Inter, sans-serif",
              fontWeight: 500,
              fontSize: "16px",
              lineHeight: "30px",
              transition: "all 1s",
              boxShadow: "0 2px 12px 0 rgba(30,32,64,0.09)"
            }}
            onMouseOver={e => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.color = "#ffb700";
              (e.currentTarget as HTMLElement).style.borderColor = "#ffcb47";
            }}
            onMouseOut={e => {
              (e.currentTarget as HTMLElement).style.background = "#fff";
              (e.currentTarget as HTMLElement).style.color = "#1e2040";
              (e.currentTarget as HTMLElement).style.borderColor = "#fff";
            }}
          >
            <span className="font-semibold flex items-center">Visit
              <ArrowRight size={19} className="ml-2 transition-transform" color="#1e2040" strokeWidth={2.3} />
            </span>
          </a>
        </div>
      ))}
    </div>
  </main>
);

export default PocList;
