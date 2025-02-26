
import { Link, useNavigate } from "react-router-dom";
type User = {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
interface ProductsRowProps {
  user: User;
  idx: number;
  refetch: () => void;
}

const AllUsersRow: React.FC<ProductsRowProps> = ({ user, idx, refetch }) => {
  const navigate = useNavigate();
  const {
    _id,
    name,
    email,
    role,
  } = user;

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4 text-sm text-gray-700">{idx + 1}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{name}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{email}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{role}</td> 
      <td className="py-4 px-4 text-sm text-gray-700">
        <div className="flex space-x-2">
          <Link to={`update-product/${_id}`}>
            <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Block
            </button>
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default AllUsersRow;
