import { Navigate, Route, Routes } from "react-router";
import AllStocks from "../allStocks/AllStocks";
import LowStocks from "../lowStocks/LowStocks";
import SlowStocks from "../slowStocks/slowStocks";
import AdjustStocks from "../adjustStocks/AdjustStocks";

const StockRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="all-stocks" />} />
      <Route path="all-stocks" element={<AllStocks />} />
      <Route path="low-stocks" element={<LowStocks />} />
      <Route path="slow-stocks" element={<SlowStocks />} />
      <Route path="adjust-stocks" element={<AdjustStocks />} />
    </Routes>
  );
};

export default StockRoutes;
