import axios from "axios";
import { JwtPayload, jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import store from "@/redux/store";
import { logout, setAccessToken } from "@/redux/slices/authSlice";

interface User extends JwtPayload {
  userId: string;
}

const useAxiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://192.168.168.194:3001",
  });

  instance.interceptors.request.use(
    async (config) => {
  
      return config;
    },
    (error) => {
      // console.error("Request error:", error);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default useAxiosInstance;
