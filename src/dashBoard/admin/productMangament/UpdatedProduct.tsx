import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useGetProductByIdQuery,
  useUpdateProductMutation,
} from "../../../redux/fetures/product/productApi";
import { FormData } from "./AddNewProduct";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const UpdatedProduct = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const { data: product, isLoading, isError } = useGetProductByIdQuery(id);
  console.log(product);
  const [updateProduct] = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    if (product) {
      reset({
        name: product.name,
        brand: product.brand,
        price: product.price,
        type: product.type,
        description: product.description,
        photo: product.photo,
        quantity: product.quantity,
        inStock: product.inStock,
      });
    }
  }, [product, reset]);
  const navigate = useNavigate();
  // Handle form submission
  const onSubmit = async (data: FormData) => {
    try {
      await updateProduct({ id, ...data }).unwrap();
      toast.success("Product updated successfully! 🎉");
      navigate("/admin-dashboard");
    } catch (error) {
      toast.error("Failed to update product! 😢");
      console.error("Failed to update product", error);
    }
  };

  // Loading and error states
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product data.</div>;

  return (
    <div className="w-full lg:w-3/4 mx-auto bg-white flex items-center relative overflow-hidden shadow-xl rounded-lg mt-12">
      <form onSubmit={handleSubmit(onSubmit)} className={`p-4 lg:p-8 w-full`}>
        <h1 className="backdrop-blur-sm text-2xl lg:text-4xl whitespace-nowrap w-min mb-8 border-b-4 border-b-blue-500 capitalize">
          Update Product
        </h1>
        <div className="space-y-5 grid gap-5 grid-cols-1 sm:grid-cols-2 justify-center items-baseline">
          {/* Product Name */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="name"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
            >
              Product Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name", { required: true })}
              defaultValue={product?.data?.name}
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {errors.name && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>

          {/* Brand */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="brand"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
            >
              Brand
            </label>
            <input
              id="brand"
              type="text"
              {...register("brand", { required: true })}
              defaultValue={product?.data?.brand}
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {errors.brand && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>

          {/* Price */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="price"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
            >
              Price
            </label>
            <input
              id="price"
              type="number"
              {...register("price", { required: true, min: 0 })}
              defaultValue={product?.data?.price}
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {errors.price && (
              <span className="text-red-600 font-medium">
                Price must be a positive number
              </span>
            )}
          </div>

          {/* Type */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="type"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
            >
              Type
            </label>
            <select
              id="type"
              {...register("type", { required: true })}
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            >
              <option value="">Select Type</option>
              <option value="Mountain">Mountain</option>
              <option value="Road">Road</option>
              <option value="Hybrid">Hybrid</option>
              <option value="BMX">BMX</option>
              <option value="Electric">Electric</option>
            </select>
            {errors.type && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>

          {/* Description */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="description"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              defaultValue={product?.data?.description}
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {errors.description && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>

          {/* Photo URL */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="photo"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
            >
              Photo URL
            </label>
            <input
              id="photo"
              type="text"
              {...register("photo", { required: true })}
              defaultValue={product?.data?.photo}
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {errors.photo && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>

          {/* Quantity */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="quantity"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
            >
              Quantity
            </label>
            <input
              id="quantity"
              type="number"
              {...register("quantity", { required: true, min: 0 })}
              defaultValue={product?.data?.quantity}
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            />
            {errors.quantity && (
              <span className="text-red-600 font-medium">
                Quantity must be a non-negative number
              </span>
            )}
          </div>

          {/* In Stock */}
          <div className="space-y-5 drop-shadow-md w-full">
            <label
              htmlFor="inStock"
              className="block text-blue-600 border-l-2 border-blue-400 font-semibold pl-2"
            >
              In Stock
            </label>
            <select
              id="inStock"
              {...register("inStock", { required: true })}
              className="p-3 block w-full outline-1 border valid:outline-blue-500 rounded-md invalid:outline-red-600"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            {errors.inStock && (
              <span className="text-red-600 font-medium">
                This field is required
              </span>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatedProduct;
