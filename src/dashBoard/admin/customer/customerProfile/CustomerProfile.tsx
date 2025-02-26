import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useChangePasswordMutation,
  useGetSingleUserByIdQuery,
} from "../../../../redux/fetures/auth/authApi";
import { RootState } from "../../../../redux/fetures/store";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CustomerProfile = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
        const decoded: any = jwtDecode(user.token);
        setUserInfo({ id: decoded.id, role: decoded.role });
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [user]);

  const userId = userInfo?.id;
  const { data: userData, isError } = useGetSingleUserByIdQuery(userId || "");
  const [changePassword, { isLoading: isChangingPassword }] =
    useChangePasswordMutation();
  const navigate = useNavigate();

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      const response = await changePassword({
        currentPassword,
        newPassword,
        confirmPassword,
      }).unwrap();

      if (response.success) {
        toast.success("Password changed successfully");
        setSuccess("Password changed successfully");
        setError("");
        setShowChangePassword(false);
        navigate("/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Error changing password:", err);
      setError(
        err.data?.message || "Failed to change password. Please try again."
      );
    }
  };

  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-white p-6">
      <div className="max-w-4xl bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-blue-500 p-6">
          <h1 className="text-2xl font-bold text-white text-center">
            Customer Profile
          </h1>
        </div>
        <div className="p-8">
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

          <button
            onClick={() => setShowChangePassword(true)}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Profile Settings
          </button>

          {showChangePassword && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Change Password</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                {success && (
                  <div className="text-green-500 mb-4">{success}</div>
                )}
                <div className="space-y-4">
                  <input
                    type="password"
                    placeholder="Current Password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                  />
                  <div className="flex justify-end space-x-4">
                    <button
                      onClick={() => setShowChangePassword(false)}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleChangePassword}
                      disabled={isChangingPassword}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      {isChangingPassword ? "Changing..." : "Change Password"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
