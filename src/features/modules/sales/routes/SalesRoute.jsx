import { Route, Routes } from "react-router";
import Customer from "../sections/customer/customer";
import Sales from "../sections/sales/Sales";
import Promotion from "../sections/promotion/Promotion";

const SalesRoute = () => {
  return (
    <Routes>
      <Route path="sales" element={<Sales />} />
      <Route path="customer" element={<Customer />} />
      <Route path="promotion" element={<Promotion />} />
    </Routes>
  );
};

export default SalesRoute;
