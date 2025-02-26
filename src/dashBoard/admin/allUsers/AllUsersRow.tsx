
import toast from "react-hot-toast";
import { useBlockUserMutation } from "../../../redux/fetures/auth/authApi";
type User = {
    _id: string;
    name: string;
    email: string;
    role: string;
    isBlocked: boolean
  };
interface ProductsRowProps {
  user: User;
  idx: number;
  refetch: () => void;
}

const AllUsersRow: React.FC<ProductsRowProps> = ({ user, idx, refetch }) => {
  const {
    _id,
    name,
    email,
    role,
    isBlocked
  } = user;
  const [blockUser] = useBlockUserMutation();

  const handleBlockUser = async () => {
      try {
          await blockUser(_id).unwrap();
          toast.success(`User ${isBlocked ? 'unblocked' : 'blocked'} successfully`);
          refetch(); // Refetch the users list to update the UI
      } catch (error) {
          console.error('Failed to block/unblock user:', error);
            toast.error('Failed to block/unblock user');
      }
  };

  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4 text-sm text-gray-700">{idx + 1}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{name}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{email}</td>
      <td className="py-4 px-4 text-sm text-gray-700">{role}</td> 
      <td className="py-4 px-4 text-sm text-gray-700">
                <div className="flex space-x-2">
                    <button
                        onClick={handleBlockUser}
                        className={`p-4 ${
                            isBlocked ? 'bg-red-500' : 'bg-blue-500'
                        } text-white rounded-lg font-bold hover:bg-${
                            isBlocked ? 'red-600' : 'blue-600'
                        } transition-colors`}
                    >
                        {isBlocked ? 'Unblock User' : 'Block User'}
                    </button>
                </div>
            </td>
    </tr>
  );
};

export default AllUsersRow;
