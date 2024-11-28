import { createContext, useEffect, useState } from "react";
import { getStoredData } from "../utils/saveToDb";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [activeTab, setActiveTab] = useState("cart");
  const [cartItems, setCartItems] = useState([]);
  const [wishlists, setWishlists] = useState([]);

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
    loadProductDetails,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
