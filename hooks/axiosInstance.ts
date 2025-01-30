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
    baseURL: "http://localhost:3000",
  });

  // instance.interceptors.request.use(
  //   async (config) => {
  //     let accessToken = store.getState().auth?.accessToken;
  //     //   const companyId = store.getState().company.selectedCompany;

  //     // if (!accessToken) {
  //     //     // console.error("Access token is undefined");
  //     //     store.dispatch(logout());
  //     //     // navigate();
  //     //     return Promise.reject();
  //     //   }

  //     try {
  //       const user: User = jwtDecode(accessToken!);

  //       if (user?.exp && dayjs.unix(user.exp).isBefore(dayjs())) {
  //         // Token is expired
  //         //   const refreshToken = store.getState().auth?.refreshToken;
  //         const refreshResponse = await axios.post(
  //           "https://localhost:3000/api/v1/",
  //           {},
  //           {
  //             headers: {
  //               // accessToken,
  //               // refreshToken,
  //               // userId: user.userId,
  //               // Companyid: companyId,
  //             },
  //           }
  //         );

  //         //   if (refreshResponse?.data?.accessToken) {
  //         //     accessToken = refreshResponse?.data.accessToken;
  //         //     if (accessToken) {
  //         //       store.dispatch(setAccessToken(accessToken));
  //         //     }
  //         //   } else {
  //         //     throw new Error("Failed to refresh access token");
  //         //   }
  //       }

  //       config.headers["Authorization"] = `Bearer ${accessToken}`;
  //     } catch (error) {
  //       // console.error("Error in request interceptor:", error);
  //       store.dispatch(logout());
  //       // navigate();
  //       return Promise.reject(error);
  //     }

  //     return config;
  //   },
  //   (error) => {
  //     // console.error("Request error:", error);
  //     return Promise.reject(error);
  //   }
  // );

  return instance;
};

export default useAxiosInstance;
