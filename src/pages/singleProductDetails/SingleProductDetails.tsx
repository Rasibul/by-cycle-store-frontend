import { useParams } from "react-router-dom";

import Navbar from "../../header/navbar/NavBar";
import Skeleton from "react-loading-skeleton"; // Import Skeleton component
import "react-loading-skeleton/dist/skeleton.css"; // Import CSS for Skeleton
import { useGetProductByIdQuery } from "../../redux/fetures/product/productApi";

const SingleProductDetails = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(id);

  // Handle loading and error states
  if (isLoading) {
    return (
      <div>
        <Navbar />
        <div className="max-w-screen-lg mx-auto py-10 px-5 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Skeleton Image */}
            <div className="w-full lg:w-1/2">
              <Skeleton height={300} width="100%" />
            </div>

            {/* Skeleton Text */}
            <div className="w-full lg:w-1/2">
              <Skeleton height={40} width="80%" className="mb-4" />
              <Skeleton height={30} width="60%" className="mb-2" />
              <Skeleton height={30} width="50%" className="mb-4" />
              <Skeleton height={20} className="mb-6" />
              <Skeleton height={50} className="mb-6" />
              <Skeleton height={40} width="100%" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) return <div>Something went wrong!</div>;

  // If no data or no product found
  if (!data || !data.success || !data.data) return <div>Product not found</div>;

  const product = data.data;

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto py-10 px-5 sm:px-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={product.photo}
              alt={product.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Product Details Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              {product.brand} - {product.type}
            </p>
            <p className="text-xl text-gray-900 font-semibold mb-4">
              ₹ {product.price.toLocaleString()}
            </p>

            <p className="text-gray-700 mb-6">{product.description}</p>

            <div className="flex items-center justify-between mb-6">
              <p
                className={`text-lg font-semibold ${
                  product.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                Quantity: {product.quantity}
              </p>
            </div>

            <button
              className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
              disabled={!product.inStock}
            >
              {product.inStock ? "Buy Now" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
