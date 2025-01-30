import { onSuccessNotification } from "@/utils/notifications";
import {
  QueryKey,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import createAxiosInstance from "@/hooks/axiosInstance";
import { useEffect, useState } from "react";
import { useTotalSize } from "./query.hook";

type Method = "get" | "post" | "put" | "delete" | "patch";

// export function useFetchQuery<TData = any>(
//   url: string,
//   queryKey: QueryKey,
//   queryParams?: Record<string, any>,
//   queryOptions?: UseQueryOptions<TData>
// ) {
//   const axiosInstance = axios.create({
//     baseURL: "http://127.0.0.1:3000", // Fixed base URL
//   });

//   const queryFn = async (): Promise<TData> => {
//     return await axiosInstance
//       .get(url, {
//         params: queryParams,
//       })
//       .then((res: AxiosResponse<TData>) => res.data);
//   };

//   return useQuery<TData>({ ...queryOptions, queryKey, queryFn });
// }

export function useFetchQuery<TData = any>(
  url: string,
  queryKey: QueryKey,
  queryParams?: Record<string, any>,
  queryOptions?: UseQueryOptions<TData>
) {
  const axiosInstance = axios.create({
    baseURL: "http://10.9.212.208:3001", // Fixed base URL
  });

  // Construct the full URL with query parameters
  const fullUrl = `${axiosInstance.defaults.baseURL}${url}`;

  // Log the request URL
  console.log(`Request URL: ${fullUrl}`, queryParams);

  const queryFn = async (): Promise<TData> => {
    return await axiosInstance
      .get(url, {
        params: queryParams,
      })
      .then((res: AxiosResponse<TData>) => res.data);
  };

  return useQuery<TData>({ ...queryOptions, queryKey, queryFn });
}

export const useSuccessNotification = <IType>(queryKeys: QueryKey[]) => {
  const queryClient = useQueryClient();
  const showMessage = (data: IType) => {
    queryKeys.forEach((queryKey) => {
      queryClient.invalidateQueries({
        queryKey,
      });
    });
    return onSuccessNotification(data);
  };
  return {
    showMessage,
  };
};

export const usePagination = (
  url: string,
  queryKey: QueryKey,
  queryParams?: Record<string, any>
) => {
  const [size, setSize] = useState(1000);
  const [pages, setPages] = useState(1);
  const [page, setPage] = useState(1);
  const totalSize = useTotalSize(url + "/total_count", queryKey, queryParams);
  useEffect(() => {
    if (totalSize) {
      setPages(Math.ceil(totalSize / size));
    }
  }, [totalSize, size]);
  return {
    size,
    setSize,
    pages,
    setPages,
    page,
    setPage,
  };
};
