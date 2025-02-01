import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import createAxiosInstance from "@/hooks/axiosInstance";

type Method = "get" | "post" | "put" | "delete" | "patch";

// export const useMutate = <TData = any, TVariables = any>(
//   url: string,
//   method: Method = "post",
//   mutationOptions?: UseMutationOptions<TData, any, TVariables, unknown>,
//   contentTypes?: string | string[]
// ) => {
 
//   const axiosInstance = createAxiosInstance();
//   const mutationFn = async (variables: TVariables) => {
//     const config: AxiosRequestConfig = {
//       method,
//       url,
//       data: variables,
//       headers: {
//         "Content-Type": contentTypes ?? "application/json",
//       },
//     };
//     const response = await axiosInstance(config);
//     return response.data as TData;
//   };

//   return useMutation<TData, any, TVariables, unknown>({
//     mutationFn,
//     ...mutationOptions,
//   });
// };



// export const useMutate = <TData = any, TVariables = any>(
//   url: string,
//   method: Method = "post",
//   mutationOptions?: UseMutationOptions<TData, any, TVariables, unknown>,
//   contentTypes?: string | string[]
// ) => {
//   // Create Axios instance
//   const axiosInstance = axios.create({
//     baseURL: "http://192.168.168.194:3001",
//     headers: {
//       "Content-Type": contentTypes ?? "application/json",
//     },
//   });

//     const fullUrl = `${axiosInstance.defaults.baseURL}${url}`;

//     console.log(fullUrl)

//      console.log(`Request URL: ${fullUrl}`);
//      console.log(`Request Method: ${method}`);

//   // Mutation function
//   const mutationFn = async (variables: TVariables) => {
//     const config: AxiosRequestConfig = {
//       method,
//       url,
//       data: variables,
//     };
//     const response = await axiosInstance.request(config);
//     return response.data as TData;
//   };

//   return useMutation<TData, any, TVariables>({
//     mutationFn,
//     ...mutationOptions,
//   });
// };





export const useMutate = <TData = any, TVariables = any>(
  url: string,
  method: Method = "post",
  mutationOptions?: UseMutationOptions<TData, any, TVariables, unknown>,
  contentTypes?: string | string[]
) => {
  // Create Axios instance with fixed baseURL
  const axiosInstance = axios.create({
    baseURL: "http://192.168.168.194:3001",
  });

  const mutationFn = async (variables: TVariables) => {
    console.log(`🚀 Sending ${method.toUpperCase()} request to: ${url}`);
    console.log("📤 Request Data:", JSON.stringify(variables, null, 2)); // Pretty log JSON

    let dataToSend: any = variables;
    let headers: Record<string, string> = {
      "Content-Type": contentTypes ?? "application/json",
    };

    if (variables instanceof FormData) {
      headers["Content-Type"] = "multipart/form-data"; // Adjust for form-data
    } else {
      dataToSend = JSON.stringify(variables);
    }

    const config: AxiosRequestConfig = {
      method,
      url, // URL should be correct now
      data: dataToSend,
      headers,
    };

    try {
      const response = await axiosInstance.request(config);
      console.log("✅ Response received:", response.data);
      return response.data as TData;
    } catch (error: any) {
      console.error("❌ Request failed:", error.message);
      if (error.response) {
        console.error("🛑 Server Response:", error.response.data); // Log exact server error
      }
      throw error;
    }
  };

  return useMutation<TData, any, TVariables>({
    mutationFn,
    ...mutationOptions,
  });
};




export function useFetchQuery<TData = any>(
  url: string,
  queryKey: QueryKey,
  queryParams?: Record<string, any>,
  queryOptions?: UseQueryOptions<TData>
) {
  // const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  // const { selectedCompany } = useSelector((state: RootState) => state.company);

  const axiosInstance = createAxiosInstance();
  const queryFn = async (): Promise<TData> => {
    return await axiosInstance
      .get(url, {
        params: queryParams,
        // headers: {
        //   Authorization: `Bearer ${accessToken}`,
        //   companyId: selectedCompany?.id,
        // },
      })
      .then((res: AxiosResponse<TData>) => res.data);
  };

  return useQuery<TData>({ ...queryOptions, queryKey, queryFn });
}

export const useTotalSize = (
  url: string,
  queryKey: QueryKey,
  queryParams?: Record<string, any>
): number => {
  const [totalSize, setTotalSize] = useState(0);
  const { data, refetch } = useFetchQuery<number>(url, queryKey, queryParams);
  useEffect(() => {
    if (data) {
      setTotalSize(typeof data === "number" ? data : 0);
    }
  }, [data]);
  useEffect(() => {
    refetch();
  }, [queryParams]);
  return totalSize;
};
