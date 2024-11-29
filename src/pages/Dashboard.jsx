import { useContext } from "react";
import PageTitle from "../components/PageTitle";
import SelectedProductList from "../components/SelectedProductList";
import { DataContext } from "../providers/DataProvider";
import { PiSlidersLight } from "react-icons/pi";
import { NavLink, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const {
    cartItems,
    wishlists,
    activeTab,
    setActiveTab,
    handleSorting,
    handlePurchase,
  } = useContext(DataContext);

  const totalPrice = cartItems?.reduce(
    (acc, current) => acc + current.price,
    0
  );
  const navigate = useNavigate();

  return (
    <div>
      <PageTitle
        title={"Dashboard"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      >
        <div className="space-x-6">
          <NavLink to={"/dashboard/cart-items"}>
            <button
              onClick={() => setActiveTab("cart")}
              className={`${
                activeTab === "cart" ? "bg-white text-purple-600" : "text-white"
              } border-2 border-white  px-16 py-3 m-2 text-lg font-semibold rounded-3xl hover:bg-white hover:text-purple-600`}
            >
              Cart
            </button>
          </NavLink>
          <NavLink to={"/dashboard/wishlist-items"}>
            <button
              onClick={() => setActiveTab("wishlist")}
              className={`${
                activeTab === "wishlist"
                  ? "bg-white text-purple-600"
                  : "text-white"
              } border-2 border-white  px-16 py-3 m-2 text-lg font-semibold rounded-3xl hover:bg-white hover:text-purple-600`}
            >
              Wishlist
            </button>
          </NavLink>
        </div>
      </PageTitle>
      <div>
        <div className="container mx-auto flex justify-between pt-12">
          <h3 className="text-2xl font-bold">
            {activeTab === "cart"
              ? "Cart"
              : activeTab === "wishlist" && "Wishlist"}
          </h3>
          {activeTab === "cart" && (
            <div className="flex items-center gap-6">
              <h3 className="text-2xl font-bold">
                Total cost: $ {+totalPrice.toFixed(2) || 0}
              </h3>
              <button
                onClick={handleSorting}
                className="flex items-center gap-3 btn btn-outline rounded-3xl text-lg font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600"
              >
                Sort By Price <PiSlidersLight />{" "}
              </button>
              <button
                onClick={() => handlePurchase(navigate)}
                disabled={!cartItems.length || totalPrice === 0}
                className="btn btn-outline rounded-3xl text-lg font-semibold text-white border-2 border-purple-600 bg-purple-600 hover:text-purple-600 hover:bg-white"
              >
                Purchase
              </button>
            </div>
          )}
        </div>
        {activeTab === "cart" ? (
          <SelectedProductList selectedItems={cartItems} />
        ) : (
          <SelectedProductList selectedItems={wishlists} hasBtn={true} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
