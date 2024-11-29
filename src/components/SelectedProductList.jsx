import SelectedProduct from "./SelectedProduct";

const SelectedProductList = ({ selectedItems, hasBtn }) => {
  return (
    <div>
      {selectedItems.map((item) => (
        <SelectedProduct key={item.product_id} product={item} hasBtn={hasBtn} />
      ))}
    </div>
  );
};

export default SelectedProductList;
