import InfoCards from "./components/Card";
import RevenueChart from "./components/RevenueChart";
import SalesPaymentMethod from "./components/SalesPaymentMethod";
import StockStatus from "./components/StockStatus";
import OperationalComparison from "./components/OperationalComparison";
import SalesType from "./components/SalesType";
import CustomerReceivables from "./components/CustomerReceivables";
import SuppliersPayables from "./components/SuppliersPayables";
import ExpenseDashboard from "./components/ExpenseDashboard";

const Dashboard = () => {
  return (
    <div className="p-2 md:p-4 lg:p-6 bg-white min-h-screen ">
      <div className="space-y-4 md:space-y-6">
        <div>
          {/* Info Cards */}
          <InfoCards />
        </div>
        <div>
          {/* Revenue Chart */}
          <RevenueChart />
        </div>
        {/* Sales Payment and Stock Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <SalesPaymentMethod />
          <StockStatus />
        </div>

        {/* Operational Comparison and Sales Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <OperationalComparison />
          <SalesType />
        </div>

        {/* Customer Receivables and Suppliers Payables */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <CustomerReceivables />
          <SuppliersPayables />
        </div>

        {/* Expense Dashboard */}
        <ExpenseDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
