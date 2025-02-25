import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/fetures/store";
import { useGetSingleUserByIdQuery } from "../../../redux/fetures/auth/authApi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AdminProfile = () => {
  const [userInfo, setUserInfo] = useState<{ id: string; role: string } | null>(
    null
  );
  const user = useSelector((state: RootState) => state.auth.user) as {
    token: string;
  } | null;

  useEffect(() => {
    if (user?.token) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const decoded: any = jwtDecode(user?.token);
        setUserInfo({ id: decoded.id, role: decoded.role });
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [user]);

  const userId = userInfo?.id;

  const {
    data: userData,
    isLoading,
    isError,
  } = useGetSingleUserByIdQuery(userId || "");

  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-white p-6">
      <div className="max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-blue-500 p-6">
          <h1 className="text-2xl font-bold text-white text-center">
            Admin Profile
          </h1>
        </div>
        <div className="p-8">
          {isLoading ? (
            <div className="space-y-4">
              <Skeleton width={200} height={20} className="mb-2" />
              <Skeleton width={150} height={20} className="mb-2" />
              <Skeleton width={250} height={20} className="mb-2" />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-blue-500">Name:</span>
                <span className="text-gray-700">{userData?.data?.name}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-blue-500">Role:</span>
                <span className="text-gray-700">{userData?.data?.role}</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-semibold text-blue-500">Email:</span>
                <span className="text-gray-700">{userData?.data?.email}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
