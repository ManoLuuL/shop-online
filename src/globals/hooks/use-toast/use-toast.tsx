import { ReactNode, useCallback, useMemo } from "react";
import { ToastOptions, toast } from "react-toastify";

import { ToastProps } from "./types";

export const useToast = () => {
  const baseNotificationProps = useMemo<ToastOptions>(
    () => ({
      position: "top-right",
      theme: "light",
      draggableDirection: "x",
      closeOnClick: true,
      draggable: true,
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      style: {
        zIndex: 20000,
      },
    }),
    []
  );

  const showSuccess = useCallback(
    (message: ReactNode, options?: ToastProps) => {
      console.log("a");
      return toast(message, {
        ...baseNotificationProps,
        type: "success",
        autoClose: options?.timer ?? 5000,
      });
    },
    [baseNotificationProps]
  );

  return {
    showSuccess,
  };
};
