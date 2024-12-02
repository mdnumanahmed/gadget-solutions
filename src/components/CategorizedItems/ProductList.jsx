import ProductCard from "./ProductCard";

const ProductList = ({ products, loadProductDetails }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard
          key={product.product_id}
          product={product}
          loadProductDetails={loadProductDetails}
        />
      ))}
    </>
  );
};

export default ProductList;
