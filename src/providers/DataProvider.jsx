import { createContext, useEffect, useState } from "react";
import {
  deleteFromStorage,
  getStoredData,
  saveToLocalStorage,
} from "../utils/saveToDb";
import sortProducts from "../utils/sortProducts";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categorizedProducts, setCategorizedProducts] = useState([]);
  const [initial, setInitial] = useState(true);
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

  const handleProductsByCategory = (id) => {
    setInitial(false);
    if (id) {
      const filteredProducts = products.filter((pd) => pd.category_id === id);
      setCategorizedProducts(filteredProducts);
    } else {
      setInitial(true);
    }
  };

  const loadProductDetails = (id) => {
    const foundedProduct = products.find(
      (product) => product.product_id === id
    );
    setProduct(foundedProduct);
  };

  const handleAddToCart = (product) => {
    const totalPrice = cartItems.reduce(
      (acc, current) => acc + current.price,
      0
    );
    const latestTotalPrice = totalPrice + product.price;
    // Limit adding items to the cart after reaching a maximum (inclusive) 1000 $
    if (latestTotalPrice > 1000) {
      return toast.error("You have reached your limit.");
    }
    // added item to the localStorage for persist cartItems
    saveToLocalStorage(product.product_id, "cart");

    // to get instant updated cartItems without reload
    const storedIds = getStoredData("cart");
    const addedCart = products.filter((pd) =>
      storedIds.includes(pd.product_id)
    );
    setCartItems(addedCart);
  };

  const handleRemoveCartItem = (id) => {
    deleteFromStorage(id);
    const storedIds = getStoredData("cart");
    const addedCart = products.filter((pd) =>
      storedIds.includes(pd.product_id)
    );
    setCartItems(addedCart);
  };

  const handleAddToWishlist = (id, e) => {
    id && saveToLocalStorage(id, "wishlist");
    // disable button after click once
    e.target.setAttribute("disabled", true);
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
        // to remove cart items form the localStorage.
        localStorage.removeItem("cart");
        navigate("/");
        // to remove cart items from the UI without reload
        setCartItems(getStoredData("cart"));
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
    categorizedProducts,
    initial,
    product,
    cartItems,
    wishlists,
    activeTab,
    setActiveTab,
    handleAddToCart,
    handleAddToWishlist,
    handleRemoveCartItem,
    handleProductsByCategory,
    handleSorting,
    handlePurchase,
    loadProductDetails,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
