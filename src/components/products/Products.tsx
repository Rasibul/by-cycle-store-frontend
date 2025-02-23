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
    <div className=" max-w-[1440px] mx-auto p-4 ">
      <h2 className="text-2xl font-semibold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {topProducts.map((product: Product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
          >
            <img
              src={product.photo}
              alt={product.name}
              className="w-full h-48 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <div className="mt-2">
              <p className="text-blue-500 font-semibold">${product.price}</p>
              <p className="text-gray-500 text-sm">Brand: {product.brand}</p>
              <p className="text-gray-500 text-sm">Type: {product.type}</p>
              <p className="text-gray-500 text-sm">
                Quantity: {product.quantity}
              </p>
              <p
                className={`text-sm ${
                  product.inStock ? "text-green-500" : "text-red-500"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </p>
            </div>
            <button className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
