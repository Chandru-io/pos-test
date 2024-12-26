import { Route, Routes } from "react-router";
import Supplier from "../supplier/Supplier";
import SupplierDetails from "../supplier/components/SupplierDetails";
import PurchaseTable from "../purchase/Purchase";
import Vendor from "../vendor/Vendor";

const VendorRoute = () => {
  return (
    <Routes>
      <Route path="supplier" element={<Supplier />} />
      <Route path="supplier/view" element={<SupplierDetails />} />
      <Route path="purchase" element={<PurchaseTable />} />
      <Route path="vendor-due-payment" element={<Vendor />} />
    </Routes>
  );
};

export default VendorRoute;
