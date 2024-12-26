import { Navigate, Route, Routes } from "react-router";
import SystemSettings from "../sections/SystemSettings";
import SettingLayout from "../layout/SettingLayout";
import SelfOrderSetting from "../sections/SelfOrderSetting";
import TaxSettings from "../sections/TaxSetting";
import ReservationSetting from "../sections/ReservationSetting";
import Printer from "../sections/Printer";
import CurrencySettings from "../sections/CurrencySetting";
import Delivery from "../sections/Delevery";
import PaymentSettings from "../sections/PaymentSettings";
import CounterSettings from "../sections/Counter";
import TableSettings from "../sections/Table";
import AreaTable from "../sections/AreaTable";
import Language from "../sections/Language";

const SettingRoute = () => {
  return (
    <SettingLayout>
      <Routes>
        <Route path="/" element={<Navigate to={"system-settings"} />} />
        <Route path="system-settings" element={<SystemSettings />} />
        <Route path="qr-settings" element={<SelfOrderSetting />} />
        <Route path="tax-settings" element={<TaxSettings />} />
        <Route path="reservation-settings" element={<ReservationSetting />} />
        <Route path="area-table" element={<AreaTable />} />
        <Route path="printer-settings" element={<Printer />} />
        <Route path="currency-settings" element={<CurrencySettings />} />
        <Route path="delivery-settings" element={<Delivery />} />
        <Route path="payment-settings" element={<PaymentSettings />} />
        <Route path="counter-settings" element={<CounterSettings />} />
        <Route path="table-settings" element={<TableSettings />} />
        <Route path="language-settings" element={<Language />} />
      </Routes>
    </SettingLayout>
  );
};

export default SettingRoute;
