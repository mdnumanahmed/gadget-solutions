import CategorizedItems from "../components/CategorizedItems/CategorizedItems";
import FeaturedImage from "../components/FeaturedImage";
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
      {/* Featured Image */}
      <div className="container mx-auto -mt-72 mb-10">
        <FeaturedImage />
      </div>
      {/* Display All Categorized Items */}
      <div>
        <div className="container mx-auto py-24">
          <CategorizedItems />
        </div>
      </div>
    </div>
  );
};

export default Home;
