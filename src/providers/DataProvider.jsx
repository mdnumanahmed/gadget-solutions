import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

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

  const values = {
    categories,
    products,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
