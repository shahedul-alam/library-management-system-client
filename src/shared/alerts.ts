import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastFunction = (message: string) => void;

export const successToast: ToastFunction = (message) =>
  toast.success(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });

export const errorToast: ToastFunction = (message) =>
  toast.error(message, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
