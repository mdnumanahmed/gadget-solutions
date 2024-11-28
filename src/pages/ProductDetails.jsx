import React from "react";
import PageTitle from "../components/PageTitle";
import HeroImg from "../assets/banner.jpg";
import { BiStar } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { GrCart } from "react-icons/gr";

const ProductDetails = () => {
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
            <img src={HeroImg} alt="" className="rounded-3xl" />
          </div>
          <div className="col-span-2 space-y-5">
            <h2 className="text-3xl font-semibold text-[#09080F]">
              Samsung Galaxy S23 Ultra
            </h2>
            <h3 className="text-xl font-semibold text-[#09080F]/80">
              Price: $ 999.99
            </h3>
            <button className="btn btn-outline btn-sm rounded-full text-[#309C08] bg-[#309C08]/10">
              In Stock
            </button>
            <p className="text-lg">
              Ultra-slim, high-performance laptop with 13.4-inch Infinity Edge
              display.
            </p>
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#09080F]">
                Specification
              </h4>
              <ol>
                <li>Intel i7 11th Gen </li>
                <li>16GB RAM </li>
                <li>512GB SSD </li>
                <li>Touchscreen</li>
              </ol>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[#09080F] flex gap-2 items-center">
                Ratings <BiStar />
              </h4>
              <div className="flex gap-2">
                <BiStar /> <BiStar /> <BiStar /> <BiStar /> <BiStar /> 4.8
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <button
                type="button"
                className="px-8 py-3 text-lg font-semibold rounded-3xl text-white bg-purple-600 hover:bg-white hover:border-white hover:text-purple-600 flex gap-3"
              >
                Add To Card <GrCart className="text-2xl" />
              </button>
              <button className="btn btn-outline bg-white border-2 btn-circle hover:bg-purple-600 hover:border-white hover:text-white dark:bg-purple-600">
                <FaRegHeart className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
