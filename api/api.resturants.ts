import { useFetchQuery, usePagination } from "@/hooks/common.hook";
import endpoints from "@/utils/endpoints";
import { useMemo } from "react";

export const useFetchResturants = (
  page: number,
  size: number,
  filterOptions?: Record<string, any>
) => {
  const { search } = filterOptions ?? { search: undefined };
  const queryParams = {
    page: page?.toString(),
    size: size?.toString(),
    // ...(filter ? { filter } : {}),
    ...(search ? { search } : {}),
  };
  return useFetchQuery<IRestaurant[]>(
    endpoints.RESTURANTS,
    ["resturant", queryParams],
    queryParams
  );
};

export const useResturantPagination = (queryParams?: Record<string, any>) => {
  return usePagination(
    endpoints.RESTURANTS,
    ["resturant", "total"],
    queryParams
  );
};

export const useFetchViewResturant = (id?: string) => {
  const enabled = useMemo(() => (id ? true : false), [id]);
  return useFetchQuery<any>(
    endpoints.RESTURANTS + `/view/${id}`,
    ["resturant-view", id],
    {},
    {
      enabled,
      queryKey: ["resturant-view", id],
    }
  );
};