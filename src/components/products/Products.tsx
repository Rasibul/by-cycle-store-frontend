import { useGetAllProductsQuery } from "../../redux/fetures/product/productApi";
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};
const Products = () => {
  const { data, error, isLoading } = useGetAllProductsQuery(undefined);

  if (isLoading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products.</p>;

  const products = data?.data || [];
  const topProducts = products.slice(0, 2);
  console.log(topProducts);
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Top 6 Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {topProducts.map((product: Product) => (
          <div
            key={product._id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-blue-500 font-semibold mt-2">${product.price}</p>
            <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
