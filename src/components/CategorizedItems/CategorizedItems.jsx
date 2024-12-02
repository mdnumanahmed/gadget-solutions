import { useContext } from "react";
import { DataContext } from "../../providers/DataProvider";
import { NavLink } from "react-router-dom";
import ProductList from "./ProductList";

const CategorizedItems = () => {
  const {
    categories,
    products,
    initial,
    categorizedProducts,
    loadProductDetails,
    handleProductsByCategory,
  } = useContext(DataContext);

  return (
    <div>
      <h2 className="text-5xl font-bold text-center text-black mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className="grid grid-cols-[240px_1fr] gap-5">
        <div className="category-links flex lg:flex-col gap-6 p-6 bg-white rounded-2xl shadow-sm">
          {categories.map((category) => (
            <NavLink
              key={category.id}
              onClick={() => handleProductsByCategory(category.id)}
              to={`/gadgets/${category.path}`}
              className={`${
                initial && category.id === 0 && "active"
              } px-7 py-3 rounded-full bg-[#09080F]/5 text-lg font-medium text-[#09080F]/60 hover:text-white hover:font-extrabold hover:bg-purple-600`}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initial && (
            <ProductList
              products={products}
              loadProductDetails={loadProductDetails}
            />
          )}
          <ProductList
            products={categorizedProducts}
            loadProductDetails={loadProductDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default CategorizedItems;
