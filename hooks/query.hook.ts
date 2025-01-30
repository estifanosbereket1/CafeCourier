import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { AxiosRequestConfig, AxiosResponse } from "axios";

import createAxiosInstance from "@/hooks/axiosInstance";

type Method = "get" | "post" | "put" | "delete" | "patch";

export const useMutate = <TData = any, TVariables = any>(
  url: string,
  method: Method = "post",
  mutationOptions?: UseMutationOptions<TData, any, TVariables, unknown>,
  contentTypes?: string | string[]
) => {
  // const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  // const { selectedCompany } = useSelector((state: RootState) => state.company);

  const mutationFn = async (variables: TVariables) => {
    const config: AxiosRequestConfig = {
      method,
      url,
      data: variables,
      headers: {
        "Content-Type": contentTypes ?? "application/json",
        // companyId: selectedCompany?.id,
        // Authorization: `Bearer ${accessToken}`,
      },
    };

    const axiosInstance = createAxiosInstance();
    const response = await axiosInstance(config);
    return response.data as TData;
  };

  return useMutation<TData, any, TVariables, unknown>({
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
