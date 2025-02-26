import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/fetures/auth/authApi";
import { setUser } from "../../redux/fetures/auth/authSlice";
import { useAppDispatch } from "../../redux/fetures/hook";
import toast from "react-hot-toast";

type FormData = { email: string; password: string };

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading, error }] = useLoginMutation();

 // src/components/Login.tsx
const onSubmit = async (data: FormData) => {
  try {
    const response = await login(data).unwrap();
    const token = response.data.token;
    const expirationTime = new Date().getTime() + (10 * 60 * 1000) - 5000; 

    dispatch(setUser({ user: response.data, token }));
    localStorage.setItem("token", token);
    localStorage.setItem("tokenExpiration", expirationTime.toString());

    // Set a timeout to clear the token after 10 minutes
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      navigate("/login");
    }, 10 * 60 * 1000);

    toast.success("Login successful! 🎉");
    navigate("/");
  } catch (err) {
    toast.error("Login failed! 😢");
    console.error("Login failed", err);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Sign In Please !!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.password && (
              <p className="text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
            disabled={isLoading}
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        {error && <p className="text-red-500 text-center mt-2">Login failed</p>}
        <div className="flex justify-center mt-4 gap-10">
          <p>Are you a new user?</p>
          <Link to="/signup">
            <h2 className="text-blue-500 ">Please sign up</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
