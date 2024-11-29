import { createContext, useEffect, useState } from "react";
import { getStoredData } from "../utils/saveToDb";
import sortProducts from "../utils/sortProducts";
import Swal from "sweetalert2";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [activeTab, setActiveTab] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const [wishlists, setWishlists] = useState([]);
  const [sortBy, setSortBy] = useState("price");

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/categories.json");
      const catsData = await res.json();
      setCategories(catsData);
      const resp = await fetch("/gadgetsData.json");
      const productsData = await resp.json();
      setProducts(productsData);
    };
    loadData();
  }, []);

  const loadProductDetails = (id) => {
    const foundedProduct = products.find(
      (product) => product.product_id === id
    );
    setProduct(foundedProduct);
  };

  const handleSorting = () => {
    if (activeTab === "cart") {
      const products = sortProducts(cartItems, sortBy);
      setCartItems(products);
    } else if (activeTab === "wishlist") {
      const products = sortProducts(wishlists, sortBy);
      setWishlists(products);
    }
  };

  const handlePurchase = (navigate) => {
    Swal.fire({
      title: "Payment Successfully!",
      text: "Thank you for purchasing!",
      icon: "success",
      confirmButtonText: "Close",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("cart");
        navigate("/");
      }
    });
  };

  useEffect(() => {
    if (activeTab === "cart") {
      const storedIds = getStoredData("cart");
      const addedCart = products.filter((pd) =>
        storedIds.includes(pd.product_id)
      );
      setCartItems(addedCart);
    } else if (activeTab === "wishlist") {
      const storedIds = getStoredData("wishlist");
      const addedWishlist = products.filter((pd) =>
        storedIds.includes(pd.product_id)
      );
      setWishlists(addedWishlist);
    }
  }, [activeTab, products]);

  const values = {
    categories,
    products,
    product,
    cartItems,
    wishlists,
    activeTab,
    setActiveTab,
    handleSorting,
    handlePurchase,
    loadProductDetails,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
