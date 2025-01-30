import { AxiosError } from "axios";
import Toast from "react-native-toast-message";

export const onErrorNotification = (error: AxiosError | any) => {
  //console.log(error);
  Toast.show({
    type: "error",
    text1: "Error",
    text2: error?.response?.data.message || "An error occurred",
    autoHide: true,
    visibilityTime: 2000,
  });
};

export const onSuccessNotification = <T>(data: T | any, message?: string) => {
  Toast.show({
    type: "success",
    text1: "Success",
    text2: message
      ? message
      : data?.message
      ? data?.message
      : "action was successful",
    visibilityTime: 2000,
    autoHide: true,
  });
};
