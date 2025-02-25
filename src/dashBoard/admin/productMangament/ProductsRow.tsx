import React from "react";

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
}

const ProductsRow: React.FC<ProductsRowProps> = ({ product, idx }) => {
  const { name, brand, type, description, photo, quantity, inStock, price } =
    product;

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
          <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default ProductsRow;
