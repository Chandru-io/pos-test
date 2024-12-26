import axios from "axios";
// const url = import.meta.env.VITE_BASE_URL;

export const getKitchen = async () => {
  try {
    const response = await axios.get(
      "https://pos-zw69.onrender.com/api/v1/getcategory"
    );
    if (response.status === 200 && response.data.success) {
      return response.data.result;
    } else {
      throw new Error("Failed to fetch printer data");
    }
  } catch (error) {
    console.error("Error fetching printers:", error);
    throw error;
  }
};
