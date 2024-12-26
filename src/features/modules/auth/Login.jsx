import { Button, Card, Label, TextInput, Spinner } from "flowbite-react";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { errorToast, successToast } from "../../utils/toast";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { LoginAction } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router";
import { getPermissionsApi } from "../../apis/permissionApi";
import { setPermissions } from "../../redux/slice/permissionSlice";
import axiosInstance from "../../utils/axiosInstance";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isDevelopment = import.meta.env.VITE_ENV === "development";

  // Login API using useMutation
  const loginMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      return response.data;
    },
    onSuccess: (data) => {
      try {
        const decoded = jwtDecode(data.token);

        // Dispatch the action to store user info in Redux
        dispatch(
          LoginAction({
            userName: decoded.username,
            role: decoded.role,
            token: data.token,
            userId: decoded.id,
          })
        );

        // Store the token in localStorage for persistence
        localStorage.setItem("token", data.token);

        // Fetch permissions after login success
        permissionQuery.refetch();

        // Redirect user to dashboard after successful login
        navigate("/dashboard");
      } catch (error) {
        console.error("Invalid token", error);
        successToast("Invalid token");
      }
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
      errorToast("Invalid email or password");
    },
  });

  // to set Redux store

  const permissionQuery = useQuery({
    queryKey: ["permissions"],
    queryFn: getPermissionsApi,
    enabled: false,
    onSuccess: (data) => {
      dispatch(setPermissions(data.permission));
    },
    onError: (error) => {
      console.error("Error fetching permissions:", error.message);
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    loginMutation.mutate({ email, password });
  };

  return (
    <div className="flex justify-center h-screen items-center">
      <Card className="max-w-md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email1"
                value="Your email"
                className="font-bold"
              />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="User name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={!isDevelopment}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password1"
                value="Your password"
                className="font-bold"
              />
            </div>
            <TextInput
              id="password1"
              type="password"
              name="password"
              placeholder="************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={!isDevelopment}
            />
          </div>
          <div className="flex items-center gap-2 justify-items-center">
            <Label
              htmlFor="forgot password"
              className="text-gray-400 hover:text-blue-500 text-sm cursor-pointer"
            >
              Forgot Password?
            </Label>
          </div>

          {/* <Button type="submit">Submit</Button> */}
          <div className="flex justify-between items-center gap-4">
            <Button type="submit" outline disabled={loginMutation.isPending}>
              {loginMutation.isPending ? (
                <div className="text-center">
                  <Spinner aria-label="Center-aligned spinner example" />
                </div>
              ) : (
                "Admin"
              )}
            </Button>

            <Button type="submit" outline>
              KOT
            </Button>
            <Button type="submit" outline>
              Waiter
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default Login;
