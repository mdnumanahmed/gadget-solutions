import React from "react";

const PageTitle = ({ title, subTitle, hasBtn = false }) => {
  return (
    <div className="bg-purple-600 py-8">
      <div className="space-y-5 container mx-auto text-center max-w-2xl">
        <h2 className="text-3xl font-bold text-white">{title}</h2>
        <p className="text-white">{subTitle}</p>
        {hasBtn && (
          <div className="space-x-6">
            <button className="border-2 border-white text-white px-16 py-3 m-2 text-lg font-semibold rounded-3xl hover:bg-white hover:text-purple-600">
              Cart
            </button>
            <button className="border-2 border-white text-white px-16 py-3 m-2 text-lg font-semibold rounded-3xl hover:bg-white hover:text-purple-600">
              Wishlist
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTitle;
