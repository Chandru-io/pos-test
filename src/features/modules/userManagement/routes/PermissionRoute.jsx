import { Navigate, Route, Routes } from "react-router";
import UserManagement from "../users/User";
import RolePermission from "../roles/RolesTable";
import Permissions from "../roles/Roles";

const PermissionRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="user" />} />
      <Route path="user" element={<UserManagement />} />
      <Route path="permission" element={<RolePermission />} />
      <Route path="permission/create" element={<Permissions />} />
      <Route path="permission/edit" element={<Permissions />} />
    </Routes>
  );
};

export default PermissionRoute;
