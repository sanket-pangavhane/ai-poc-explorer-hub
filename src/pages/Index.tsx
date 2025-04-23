
import Navbar from "../components/Navbar";
import PocList from "../components/PocList";

const Index = () => (
  <div className="min-h-screen bg-[#F6F6F7] relative">
    <Navbar />
    {/* Remove container div for PocList so it's full width */}
    <PocList />
  </div>
);

export default Index;
