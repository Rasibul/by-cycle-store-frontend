import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from "../../../redux/fetures/product/productApi";
import ProductsRow from "./ProductsRow";

type Product = {
  _id: string;
  name: string;
  photo: string;
  description: string;
  price: number;
  brand: string;
  type: string;
  quantity: number;
  inStock: boolean;
};

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

export type ProductsRowProps = {
  product: Product;
  idx: number;
};

const ProductMangment = () => {
  const { data, refetch } = useGetAllProductsQuery<ApiResponse>({});
  const products = data?.data?.bicycles || [];

  return (
    <div className="overflow-x-auto p-4">
      <div className="text-center mt-4 font-bold text-2xl">
        <h2>Show All Products</h2>
      </div>{" "}
      <Link to="add-product">
        <div className="flex justify-end mb-2">
          <button className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-bold ">
            Add New Product
          </button>
        </div>
      </Link>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              S/N
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Product Image
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Product Name
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Brand
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Type
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Description
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Quantity
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Availability
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Price
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product: Product, idx: number) => (
            <ProductsRow
              key={product._id}
              product={product}
              idx={idx}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductMangment;
