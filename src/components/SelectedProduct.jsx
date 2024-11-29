import { BiStar } from "react-icons/bi";
import { FaRegStar, FaRegStarHalf, FaStar } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import ReactStars from "react-rating-stars-component";
import { saveToLocalStorage } from "../utils/saveToDb";
import { useContext } from "react";
import { DataContext } from "../providers/DataProvider";

const SelectedProduct = ({ product, hasBtn }) => {
  const { handleAddToCart, handleRemoveCartItem } = useContext(DataContext);
  const {
    availability,
    brand,
    category,
    description,
    price,
    product_id,
    product_image,
    product_title,
    rating,
    release_date,
    specifications,
  } = product;

  return (
    <div className="container mx-auto my-10">
      <div className="rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-4 gap-8 bg-white">
        <div>
          <img src={product_image} alt="" className="rounded-3xl " />
        </div>
        <div className="col-span-2 space-y-5">
          <h2 className="text-3xl font-semibold text-[#09080F]">
            {product_title}
          </h2>
          <p className="text-lg">{description}</p>
          <h3 className="text-xl font-semibold text-[#09080F]/80">
            Price: $ {price}
          </h3>
          <div className="flex items-center gap-8">
            <button className="btn btn-outline btn-sm rounded-full text-[#309C08] bg-[#309C08]/10">
              {availability ? "In Stock" : "Out of Stock"}
            </button>

            <div className="flex items-center gap-6">
              <h4 className="text-lg font-semibold text-[#09080F] flex gap-2 items-center">
                Ratings <BiStar />
              </h4>
              <div className="flex gap-2 items-center">
                <ReactStars
                  count={5}
                  //   onChange={ratingChanged}
                  value={rating}
                  size={24}
                  isHalf={true}
                  edit={false}
                  emptyIcon={<FaRegStar />}
                  halfIcon={<FaRegStarHalf />}
                  fullIcon={<FaStar />}
                  activeColor="#ffd700"
                />
                || {rating}
              </div>
            </div>
          </div>
          {hasBtn && (
            <button
              onClick={() => handleAddToCart(product_id)}
              type="button"
              className="px-8 py-3 text-lg font-semibold rounded-3xl text-white bg-purple-600 hover:bg-gray-200 hover:border-white hover:text-purple-600 flex gap-3"
            >
              Add To Card <GrCart className="text-2xl" />
            </button>
          )}
        </div>
        <div className="flex gap-6 items-center justify-end pr-6">
          <button
            onClick={() => handleRemoveCartItem(product_id)}
            className="btn btn-outline bg-white border-2 btn-circle hover:bg-purple-600 hover:border-white hover:text-white dark:bg-purple-600"
          >
            <IoCloseOutline className="text-3xl pointer-events-none" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;
