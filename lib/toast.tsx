import toast from "react-hot-toast";

export const showToast = (type, message) => {
  if (type === "success") {
    toast.success(message, {
      duration: 5000, // 5 seconds
      style: {
        borderRadius: "8px",
        background: "#333", // dark background
        color: "#fff",      // white text
        padding: "12px 16px",
        fontSize: "14px",
      },
    });
  } else if (type === "error") {
    toast.error(message, {
      duration: 5000,
      style: {
        borderRadius: "8px",
        background: "#dc2626", // red background
        color: "#fff",
        padding: "12px 16px",
        fontSize: "14px",
      },
    });
  } else {
    toast(message, {
      duration: 5000,
      style: {
        borderRadius: "8px",
        background: "#2563eb", // blue background
        color: "#fff",
        padding: "12px 16px",
        fontSize: "14px",
      },
    });
  }
};
