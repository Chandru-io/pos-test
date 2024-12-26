import { useState } from "react";
import Header from "./components/Headers";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";

const FINANCIAL_RECORDS_COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Title", accessorKey: "title", id: "2" },
  { header: "Date", accessorKey: "date", id: "3" },
  { header: "Grand Total", accessorKey: "grandTotal", id: "4" },
  { header: "Paid", accessorKey: "paid", id: "5" },
  { header: "Due", accessorKey: "due", id: "6" },
  { header: "Debit", accessorKey: "debit", id: "7" },
  { header: "Credit", accessorKey: "credit", id: "8" },
  { header: "Balance (credit due)", accessorKey: "balance", id: "9" },
];
const FINANCIAL_RECORDS_DATA = [
  {
    id: "1",
    title: "Electricity Bill",
    date: "2024-11-01",
    grandTotal: "₹5,000",
    paid: "₹4,000",
    due: "₹1,000",
    debit: "₹0",
    credit: "₹0",
    balance: "₹1,000",
  },
  {
    id: "2",
    title: "Water Bill",
    date: "2024-11-05",
    grandTotal: "₹1,500",
    paid: "₹1,500",
    due: "₹0",
    debit: "₹0",
    credit: "₹0",
    balance: "₹0",
  },
  {
    id: "3",
    title: "Internet Charges",
    date: "2024-11-10",
    grandTotal: "₹2,000",
    paid: "₹1,000",
    due: "₹1,000",
    debit: "₹0",
    credit: "₹0",
    balance: "₹1,000",
  },
  {
    id: "4",
    title: "Rent",
    date: "2024-11-15",
    grandTotal: "₹20,000",
    paid: "₹20,000",
    due: "₹0",
    debit: "₹0",
    credit: "₹0",
    balance: "₹0",
  },
  {
    id: "5",
    title: "Miscellaneous",
    date: "2024-11-20",
    grandTotal: "₹3,000",
    paid: "₹2,500",
    due: "₹500",
    debit: "₹0",
    credit: "₹0",
    balance: "₹500",
  },
];

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
  {
    id: "FD3",
    type: "select",
    name: "customer",
    title: "Customer",
    options: [
      { value: "name1 ", label: "Customer 1", id: 1 },
      { value: "name2 ", label: "Customer 2", id: 2 },
      { value: "name3 ", label: "Customer 3", id: 3 },
    ],
  },
];

const CustomerLedgerReport = () => {
  const [filterData, setFilterData] = useState({});

  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Customer Ledger Report </p>
      </div>
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>
      <div className="my-4 flex justify-between items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />
        </div>
      </div>
      <CustomTable
        data={FINANCIAL_RECORDS_DATA}
        columns={FINANCIAL_RECORDS_COLUMNS}
      />
    </div>
  );
};

export default CustomerLedgerReport;
