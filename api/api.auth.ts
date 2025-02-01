import { useMutate } from "@/hooks/query.hook";
import { ILogin, IRegistration } from "@/interface/interface.auth";
import endpoints from "@/utils/endpoints";
import { onErrorNotification, onSuccessNotification } from "@/utils/notifications";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCreateAccount = () => {
  const queryClient = useQueryClient();
  const onError = (error: AxiosError | any) => {
    onErrorNotification(error);
  };
  const onSuccess = (data: any) => {
    queryClient.invalidateQueries({
      queryKey: ["register"],
    });
    onSuccessNotification(data);
  };
  return useMutate<IRegistration>(endpoints.SIGNUP, "post", {
    onError,
    onSuccess,
  });
};


export const useSignIn=()=>{
      const queryClient = useQueryClient();
      const onError = (error: AxiosError | any) => {
        onErrorNotification(error);
      };
      const onSuccess = (data: any) => {
        queryClient.invalidateQueries({
          queryKey: ["login"],
        });
        onSuccessNotification(data);
      };
      return useMutate<ILogin>(endpoints.SINGIN, "post", {
        onError,
        onSuccess,
      });
}