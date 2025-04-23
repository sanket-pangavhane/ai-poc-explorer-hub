
import Navbar from "../components/Navbar";
import PocList from "../components/PocList";

const Index = () => (
  <div className="min-h-screen bg-[#F1F0FB] relative font-inter">
    {/* Custom body background, not touching navbar */}
    <Navbar />
    {/* PocList as full-width, no container div */}
    <PocList />
  </div>
);

export default Index;
