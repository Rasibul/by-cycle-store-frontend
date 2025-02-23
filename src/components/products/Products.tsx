import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../redux/fetures/product/productApi";
type Product = {
  _id: string;
  name: string;
  photo: string;
  description: string;
  price: number;
  image: string;
  brand: string;
  type: string;
  quantity: number;
  inStock: boolean;
};

const Products = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  const products = data?.data || [];
  const topProducts = products.slice(0, 6);

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-8 text-center">Top Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {topProducts.map((product: Product) => (
          <div
            key={product._id}
            className="bg-white p-6 rounded-xl shadow-lg  "
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.photo}
                alt={product.name}
                className="w-full h-56 object-cover transform hover:scale-110 transition-transform duration-300"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    Out of Stock
                  </p>
                </div>
              )}
            </div>
            <h3 className="text-2xl font-bold mt-4 text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600 text-base mt-2">
              {product.description}
            </p>
            <div className="mt-4  flex justify-between">
              <div>
                <p className="text-gray-500 text-sm font-bold">
                  <span className="font-medium ">Price: </span>
                  {product.price} Tk
                </p>
                <p className="text-gray-500 text-sm font-bold">
                  <span className="font-medium">Brand:</span> {product.brand}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm font-bold">
                  <span className="font-medium">Type:</span> {product.type}
                </p>
                <p className="text-gray-500 text-sm font-bold">
                  <span className="font-medium">Quantity:</span>{" "}
                  {product.quantity}
                </p>
              </div>
            </div>
            <div className="mt-4 text-center ">
              {" "}
              <p
                className={`text-lg font-medium ${
                  product.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>{" "}
            <button
              className={`mt-6 w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                product.inStock
                  ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!product.inStock}
            >
              {product.inStock ? "View Details" : "Unavailable"}
            </button>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/all-bicycles">
          <button className="mt-6  px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
            View All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
