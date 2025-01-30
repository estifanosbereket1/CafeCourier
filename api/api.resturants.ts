import { useFetchQuery, usePagination } from "@/hooks/common.hook";
import endpoints from "@/utils/endpoints";

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

export const useAllergypagination = (queryParams?: Record<string, any>) => {
  return usePagination(
    endpoints.RESTURANTS,
    ["resturant", "total"],
    queryParams
  );
};
