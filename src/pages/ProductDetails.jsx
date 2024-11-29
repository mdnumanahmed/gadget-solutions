import React, { useContext } from "react";
import PageTitle from "../components/PageTitle";
import { BiStar } from "react-icons/bi";
import { FaRegHeart, FaStar, FaRegStar, FaRegStarHalf } from "react-icons/fa";
import { GrCart } from "react-icons/gr";
import { DataContext } from "../providers/DataProvider";
import ReactStars from "react-rating-stars-component";
import { saveToLocalStorage } from "../utils/saveToDb";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { product, handleAddToCart, handleAddToWishlist } =
    useContext(DataContext);
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

  //   const ratingChanged = (newRating) => {
  //     console.log(newRating);
  //   };

  return (
    <div>
      <div className="">
        <PageTitle
          className="pb-64"
          title={"Product Details"}
          subTitle={
            "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
        />
      </div>
      <div className="container mx-auto pb-24 -mt-56">
        <div className="rounded-3xl p-8 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
          <div>
            <img src={product_image} alt="" className="rounded-3xl w-full" />
          </div>
          <div className="col-span-2 space-y-5">
            <h2 className="text-3xl font-semibold text-[#09080F]">
              {product_title}
            </h2>
            <h3 className="text-xl font-semibold text-[#09080F]/80">
              Price: $ {price}
            </h3>
            <button className="btn btn-outline btn-sm rounded-full text-[#309C08] bg-[#309C08]/10">
              {availability ? "In Stock" : "Out of Stock"}
            </button>
            <p className="text-lg">{description}</p>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#09080F]">
                Specification
              </h4>
              <ol className="list-decimal ml-6">
                {specifications?.map((item, idx) => (
                  <li key={idx}>{item} </li>
                ))}
              </ol>
            </div>
            <div>
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
            <div className="flex gap-6 items-center">
              <button
                onClick={() => handleAddToCart(product_id)}
                type="button"
                className="px-8 py-3 text-lg font-semibold rounded-3xl text-white bg-purple-600 hover:bg-gray-200 hover:border-white hover:text-purple-600 flex gap-3"
              >
                Add To Card <GrCart className="text-2xl" />
              </button>
              <button
                onClick={(e) => handleAddToWishlist(product_id, e)}
                className="btn btn-outline bg-white border-2 btn-circle hover:bg-purple-600 hover:border-white hover:text-white dark:bg-purple-600"
              >
                <FaRegHeart className="text-2xl pointer-events-none" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
