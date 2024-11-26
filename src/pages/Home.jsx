import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <div className="container mx-auto p-8">
        <div className=" bg-purple-600 rounded-3xl text-white dark:bg-transparent">
          <Navbar />
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
