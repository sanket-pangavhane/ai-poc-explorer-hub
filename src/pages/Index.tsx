
import Navbar from "../components/Navbar";
import PocList from "../components/PocList";

const Index = () => (
  <div className="min-h-screen bg-[#F6F6F7] relative">
    <Navbar />
    <div className="pt-24">
      <PocList />
    </div>
  </div>
);

export default Index;
