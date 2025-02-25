import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/fetures/store";
import { useGetSingleUserByIdQuery } from "../../../redux/fetures/auth/authApi";

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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user data</div>;
  }

  console.log(userData);
  return <div>Hello Admin Profile</div>;
};

export default AdminProfile;
