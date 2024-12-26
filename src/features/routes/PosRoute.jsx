import { Navigate, Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Dashboard from "../modules/dashboard/Dashboard";
import Login from "../modules/auth/Login";
import Unauthorized from "../components/Unauthorized";
import PanelRoute from "../modules/panels/routes/PanelRoute";
import SettingRoute from "../modules/settings/routes/SettingRoute";
import PosReportRoute from "../modules/reports/route/ReportRoute";
import ItemRoute from "../modules/Items/routes/ItemRoute";
import VendorRoute from "../modules/purchase/routes/VendorRoute";
import SalesRoute from "../modules/sales/routes/SalesRoute";
import ExpenceRoute from "../modules/expenses/routes/ExpenceRoute";
import ProductionList from "../modules/production/ProductionList";
import StockRoutes from "../modules/stocks/routes/StockRoutes";
import PermissionRoute from "../modules/userManagement/routes/PermissionRoute";
import WasteList from "../modules/waste/WasteList";
import AttendanceTable from "../modules/attendance/Attendance";

const PosRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Routes with Layout */}
      <Route element={<Layout />}>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/panels/*" element={<PanelRoute />} />
        <Route path="/items/*" element={<ItemRoute />} />
        <Route path="/settings/*" element={<SettingRoute />} />
        <Route path="/reports/*" element={<PosReportRoute />} />
        <Route path="/purchase/*" element={<VendorRoute />} />
        <Route path="/sales/*" element={<SalesRoute />} />
        <Route path="/expense/*" element={<ExpenceRoute />} />
        <Route path="/production/*" element={<ProductionList />} />
        <Route path="/stocks/*" element={<StockRoutes />} />
        <Route path="/user-management/*" element={<PermissionRoute />} />
        <Route path="/waste-list" element={<WasteList />} />
        <Route path="/attendance" element={<AttendanceTable />} />
      </Route>

      <Route path="/unauthorized" element={<Unauthorized />} />
    </Routes>
  );
};

export default PosRoute;
