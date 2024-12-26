import axiosInstance from "../utils/axiosInstance";

// create new permission
export const createPermissionApi = async (permissionData) => {
  try {
    const response = await axiosInstance.post(
      "/createrolepermission",
      permissionData
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error creating permission"
    );
  }
};

// get permission data (retrieve list or single)
export const getPermissionsApi = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found");
  }
  try {
    const response = await axiosInstance.get("/permissions", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching permissions"
    );
  }
};
// update a specific permission by its ID
export const updatePermissionApi = async (permissionId, updatedData) => {
  try {
    const response = await axiosInstance.put(
      `/permissions/${permissionId}`,
      updatedData
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error updating permission"
    );
  }
};

// delete a specific permission by its ID
export const deletePermissionApi = async (permissionId) => {
  try {
    const response = await axiosInstance.delete(`/permissions/${permissionId}`);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error deleting permission"
    );
  }
};
