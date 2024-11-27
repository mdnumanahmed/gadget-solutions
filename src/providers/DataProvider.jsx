import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("/categories.json");
      const catsData = await res.json();
      setCategories(catsData);
    };
    loadData();
  }, []);

  const values = {
    categories,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export default DataProvider;
