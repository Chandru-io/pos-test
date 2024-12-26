import toast from "react-hot-toast";

export const successToast = (message) => {
  toast.success(message, {
    position: "top-right",
  });
};

export const errorToast = (message) => {
  toast.error(message, {
    position: "top-right",
  });
};

export const infoToast = (message) => {
  toast(message, {
    position: "top-right",
  });
};
