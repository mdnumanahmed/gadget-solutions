import SelectedProduct from "./SelectedProduct";

const SelectedProductList = ({ selectedItems }) => {
  return (
    <div>
      {selectedItems.map((item) => (
        <SelectedProduct key={item.product_id} product={item} />
      ))}
    </div>
  );
};

export default SelectedProductList;
