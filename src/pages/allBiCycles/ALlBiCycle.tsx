import { useState } from "react";
import { useGetAllProductsQuery } from "../../redux/fetures/product/productApi";
import Navbar from "../../header/navbar/NavBar";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// Define Product type
interface Product {
  _id: string;
  name: string;
  photo: string;
  description: string;
  price: number;
  brand: string;
  type: string;
  quantity: number;
  inStock: boolean;
}

// Define API response type
interface ApiResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any;
    bicycles: Product[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

const ALlBiCycle = () => {
  const { data } = useGetAllProductsQuery<ApiResponse>({});
  const products = data?.data?.bicycles || [];

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([
    15000, 50000,
  ]);
  const [availability, setAvailability] = useState("");

  const filteredProducts = products.filter((product: Product) => {
    return (
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedBrand ? product.brand === selectedBrand : true) &&
      (selectedType ? product.type === selectedType : true) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (availability === "inStock" ? product.inStock : true)
    );
  });

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <Navbar />
      <h2 className="text-3xl font-semibold mb-8 text-center">All Products</h2>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">All Brands</option>
          {[...new Set(products.map((p: Product) => p.brand))].map((brand) => (
            <option key={brand as string} value={brand as string}>
              {brand as string}
            </option>
          ))}
        </select>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">All Types</option>
          {[...new Set(products.map((p: Product) => p.type))].map((type) => (
            <option key={type as string} value={type as string}>
              {type as string}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={priceRange[0]}
          onChange={(e) =>
            setPriceRange([Number(e.target.value), priceRange[1]])
          }
          className="border p-2 rounded-lg w-24"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="border p-2 rounded-lg w-24"
        />
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="border p-2 rounded-lg"
        >
          <option value="">All</option>
          <option value="inStock">In Stock</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data === undefined ? (
          Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
            >
              <Skeleton height={200} width={200} />
              <Skeleton count={2} />
              <Skeleton width={100} />
            </div>
          ))
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-3 text-center">
            <p className="text-xl font-semibold text-gray-600 mt-20">
              No products available for your search criteria.
            </p>
          </div>
        ) : (
          filteredProducts.map((product: Product) => (
            <div
              key={product._id}
              className="bg-white p-6 rounded-xl shadow-lg"
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
              <div className="mt-4 flex justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-bold">
                    Price: {product.price} Tk
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Brand: {product.brand}
                  </p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm font-bold">
                    Type: {product.type}
                  </p>
                  <p className="text-gray-500 text-sm font-bold">
                    Quantity: {product.quantity}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p
                  className={`text-lg font-medium ${
                    product.inStock ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </p>
              </div>
              <button
                className={`mt-6 w-full px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300 ${
                  product.inStock
                    ? "bg-blue-500 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                disabled={!product.inStock}
              >
                {product.inStock ? "View Details" : "Unavailable"}
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ALlBiCycle;
