import axios from "axios";

// Create axios instance
const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_BASE_URL || "https://pos-zw69.onrender.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token && !config.url.includes("/auth")) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200 && response.data) {
      return response.data;
    }
    throw new Error("Unexpected response format");
  },
  (error) => {
    console.error("API Error:", error.response?.data?.message || error.message);
    return Promise.reject(new Error("Request failed!"));
  }
);

export default axiosInstance;
