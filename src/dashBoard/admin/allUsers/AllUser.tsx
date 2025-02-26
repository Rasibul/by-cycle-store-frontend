import { useGetAllUsersQuery } from "../../../redux/fetures/auth/authApi";
import AllUsersRow from "./AllUsersRow";

type User = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

interface ApiResponse {
  success: boolean;
  message: string;
  statusCode: number;
  data: {
    data: User[];
  };
}
const AllUser = () => {
  const {data,refetch} = useGetAllUsersQuery<ApiResponse>({})
  const users = data?.data || []
  return (
    <div className="overflow-x-auto p-4">
      <div className="text-center mt-4 mb-4 font-bold text-2xl">
        <h2>Show All Users</h2>
      </div>{" "}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              S/N
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              User Name
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              User Email
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              User Role
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-700 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {users.map((user: User, idx: number) => (
            <AllUsersRow
              key={user._id}
              user={user}
              idx={idx}
              refetch={refetch}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
