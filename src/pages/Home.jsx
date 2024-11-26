import BottomHeader from "../components/BottomHeader";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="bg-purple-600 rounded-3xl m-8 text-white dark:bg-purple-900 pb-40">
        <div className="container mx-auto p-8">
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className="container mx-auto px-16 -mt-72 max-w-screen-lg">
        <BottomHeader />
      </div>
    </div>
  );
};

export default Home;
