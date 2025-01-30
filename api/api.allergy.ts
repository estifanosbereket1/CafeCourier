import { useFetchQuery, usePagination } from "@/hooks/common.hook";
import { IAllergy } from "@/interface/interface.allergy";
import endpoints from "@/utils/endpoints";

export const useFetchAllergies = (
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
  return useFetchQuery<IAllergy[]>(
    endpoints.ALLERGY,
    ["allergy", queryParams],
    queryParams
  );
};

export const useAllergypagination = (queryParams?: Record<string, any>) => {
  return usePagination(endpoints.ALLERGY, ["allergy", "total"], queryParams);
};
