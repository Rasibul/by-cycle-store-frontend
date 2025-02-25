import React from "react";
import { useDeleteProductMutation } from "../../../redux/fetures/product/productApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
interface Product {
  _id: string;
  name: string;
  brand: string;
  type: string;
  description: string;
  photo: string;
  quantity: number;
  inStock: boolean;
  price: number;
}

interface ProductsRowProps {
  product: Product;
  idx: number;
  refetch: () => void;
}

const ProductsRow: React.FC<ProductsRowProps> = ({ product, idx, refetch }) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    brand,
    type,
    description,
    photo,
    quantity,
    inStock,
    price,
  } = product;
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteProduct(_id).unwrap();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Product deleted successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      } catch (error) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if ((error as any).originalStatus === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Failed to delete product",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4 text-sm text-gray-700">{idx + 1}</td>
      <td className="py-4 px-4">
        <img
          src={photo}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      </td>
      <td className="py-4 px-4 text-sm text-gray-700">{name}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{brand}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{type}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{description}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{quantity}</td>
      <td className="py-4 px-4 text-sm text-gray-700">
        {inStock ? "✅" : "❌"}
      </td>
      <td className="py-4 px-4 text-sm text-gray-700">${price.toFixed(2)}</td>
      <td className="py-4 px-4 text-sm text-gray-700">
        <div className="flex space-x-2">
          <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductsRow;
