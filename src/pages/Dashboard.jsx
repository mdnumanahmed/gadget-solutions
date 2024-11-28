import { useContext } from "react";
import PageTitle from "../components/PageTitle";
import SelectedProductList from "../components/SelectedProductList";
import { DataContext } from "../providers/DataProvider";

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
