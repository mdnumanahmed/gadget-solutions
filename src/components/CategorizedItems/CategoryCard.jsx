import { Link } from "react-router-dom";

const CategoryCard = () => {
  return (
    <div>
      <img src="" alt="" />
      <h3 className="text-2xl font-semibold text-[#09080F]">Dell XPC</h3>
      <p className="text-xl font-medium text-[#09080F]/80">Price: 6666</p>
      <Link>
        <button className="btn btn-outline rounded-full px-6 py-3 hover:bg-purple-600">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default CategoryCard;
