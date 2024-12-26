import ReportLayout from "../layout/ReportLayout";
import RegisterReport from "../Register";
import PurchaseReport from "../PurchaseReport";
import CustomerDueReport from "../CustomerDueReport";
import ExpeseReport from "../ExpenseReport";
import WasteReport from "../WasteReport";
import TaxReport from "../TaxReport";
import FoodMenuCategoryReport from "../FoodMenuSalesByCategory";
import AttendaceReport from "../AttendanceReport";
import AuditLogReport from "../AuditLogReport";
import AvailableLoyaltyPointReport from "../AvailableLoyaltypoint";
import ProductionAnalysisReport from "../ProductionAnalysisReport";
import DailySalesReport from "../DailySalesReport";
import FoodSaleReport from "../FoodSaleReport";
import DetailedSalesReport from "../DetailedSalesReport";
import StockReport from "../StockReport";
import LowStockReport from "../LowStockReport";
import ProfitLossReport from "../ProfitLossReport";
import SupplierDueReport from "../SupplierDueReport";
import ZReport from "../ZReport";
import ConsumptionReport from "../ConsumptionReport";
import UsageLoyalityReport from "../UsageLoyaltyPoint";
import CustomerLedgerReport from "../CustomerLedgerReport";
import DailySummaryReport from "../DailySummaryReport";
import { Navigate, Route, Routes } from "react-router";

const PosReportRoute = () => {
  return (
    <ReportLayout>
      <Routes>
        <Route path="/" element={<Navigate to="register-report" />} />

        <Route path="register-report" element={<RegisterReport />} />
        <Route path="purchase-report" element={<PurchaseReport />} />
        <Route path="customer-due-report" element={<CustomerDueReport />} />
        <Route path="expense-report" element={<ExpeseReport />} />
        <Route path="waste-report" element={<WasteReport />} />
        <Route path="tax-report" element={<TaxReport />} />
        <Route
          path="food-menu-sales-by-category-report"
          element={<FoodMenuCategoryReport />}
        />
        <Route path="attendance-report" element={<AttendaceReport />} />
        <Route path="audit-log-report" element={<AuditLogReport />} />
        <Route
          path="available-loyalty-report"
          element={<AvailableLoyaltyPointReport />}
        />

        <Route
          path="/production-analysis-report"
          element={<ProductionAnalysisReport />}
        />
        <Route path="/daily-sales-report" element={<DailySalesReport />} />
        <Route path="/food-sale-report" element={<FoodSaleReport />} />
        <Route
          path="/detailed-sales-report"
          element={<DetailedSalesReport />}
        />
        <Route path="/stock-report" element={<StockReport />} />
        <Route path="/low-stock-report" element={<LowStockReport />} />
        <Route
          path="/production-report"
          element={<ProductionAnalysisReport />}
        />
        <Route path="/profit-loss-report" element={<ProfitLossReport />} />
        <Route path="/supplier-due-report" element={<SupplierDueReport />} />
        <Route path="/z-report" element={<ZReport />} />
        <Route path="/consumption-report" element={<ConsumptionReport />} />
        <Route
          path="/Usage-loyality-point-report"
          element={<UsageLoyalityReport />}
        />
        <Route
          path="/customer-ledger-report"
          element={<CustomerLedgerReport />}
        />
        <Route path="/daily-summary-report" element={<DailySummaryReport />} />
      </Routes>
    </ReportLayout>
  );
};

export default PosReportRoute;
