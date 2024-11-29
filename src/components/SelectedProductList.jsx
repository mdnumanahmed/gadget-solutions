import SelectedProduct from "./SelectedProduct";

const SelectedProductList = ({
  selectedItems,
  hasBtn,
  handleAddToCart,
  handleRemoveCartItem,
}) => {
  return (
    <div>
      {selectedItems.map((item) => (
        <SelectedProduct
          key={item.product_id}
          product={item}
          hasBtn={hasBtn}
          handleAddToCart={handleAddToCart}
          handleRemoveCartItem={handleRemoveCartItem}
        />
      ))}
    </div>
  );
};

export default SelectedProductList;
