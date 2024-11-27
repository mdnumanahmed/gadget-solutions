import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  console.log(product);
  // availability: true;
  // brand: "SecureCam";
  // category: "Smart Home";
  // description: "AI-powered security camera for your home.";
  // price: 129.99;
  // product_id: 103;
  // product_image: "https://i.ibb.co.com/ccyNXxy/Smart-Security-Camera-2.jpg";
  // product_title: "Smart Security Camera";
  // rating: 4.6;
  // release_date: "2022-11-25";
  // specifications;
  const { product_id, product_image, product_title, price } = product;
  return (
    <div className="p-5 rounded-2xl space-y-6 bg-white">
      <img
        src={product_image}
        alt={`Image of ${product_title}`}
        className="rounded-2xl w-full max-h-60 object-cover bg-gray-200 p-2"
      />
      <div className="space-y-4">
        <h3 className="text-2xl font-semibold text-[#09080F]">
          {product_title}C
        </h3>
        <p className="text-xl font-medium text-[#09080F]/80">
          Price: ${price}{" "}
        </p>
        <Link to={`product/${product_id}`} className="inline-block">
          <button className="btn btn-outline rounded-full px-6 py-3 hover:bg-purple-600">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
