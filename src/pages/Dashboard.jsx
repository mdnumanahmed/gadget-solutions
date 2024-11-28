import { useContext } from "react";
import PageTitle from "../components/PageTitle";
import SelectedProductList from "../components/SelectedProductList";
import { DataContext } from "../providers/DataProvider";
import { PiSlidersLight } from "react-icons/pi";

const Dashboard = () => {
  const { cartItems, wishlists, activeTab, setActiveTab } =
    useContext(DataContext);

  console.log(cartItems, wishlists, activeTab);
  return (
    <div>
      <PageTitle
        title={"Dashboard"}
        subTitle={
          "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        }
      >
        <div className="space-x-6">
          <button
            onClick={() => setActiveTab("cart")}
            className="border-2 border-white text-white px-16 py-3 m-2 text-lg font-semibold rounded-3xl hover:bg-white hover:text-purple-600"
          >
            Cart
          </button>
          <button
            onClick={() => setActiveTab("wishlist")}
            className="border-2 border-white text-white px-16 py-3 m-2 text-lg font-semibold rounded-3xl hover:bg-white hover:text-purple-600"
          >
            Wishlist
          </button>
        </div>
      </PageTitle>
      <div>
        <div className="container mx-auto flex justify-between pt-12">
          <h3 className="text-2xl font-bold">Cart</h3>
          <div className="flex items-center gap-6">
            <h3 className="text-2xl font-bold">
              Total cost: ${" "}
              {cartItems.reduce((acc, current) => acc + current.price, 0)}
            </h3>
            <button className="flex items-center gap-3 btn btn-outline rounded-3xl text-lg font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600">
              Sort By Price <PiSlidersLight />{" "}
            </button>
            <button className="btn btn-outline rounded-3xl text-lg font-semibold text-purple-600 border-2 border-purple-600 hover:bg-purple-600">
              Purchase
            </button>
          </div>
        </div>
        {activeTab === "cart" ? (
          <SelectedProductList selectedItems={cartItems} />
        ) : (
          <SelectedProductList selectedItems={wishlists} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
