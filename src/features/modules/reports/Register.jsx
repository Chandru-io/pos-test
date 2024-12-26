import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import Header from "./components/Headers";

const COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Counter", accessorKey: "counter", id: "2" },
  { header: "Opening Date&Time", accessorKey: "openingDateTime", id: "3" },
  { header: "Opening Balance", accessorKey: "openingBalance", id: "4" },
  { header: "Sale (Paid Amount)", accessorKey: "salePaidAmount", id: "5" },
  { header: "Refund Amount", accessorKey: "refundAmount", id: "6" },
  {
    header: "Customer Due Receive",
    accessorKey: "customerDueReceive",
    id: "7",
  },
  { header: "Purchase", accessorKey: "purchase", id: "8" },
  { header: "Expense", accessorKey: "expense", id: "9" },
  { header: "Due Payment", accessorKey: "duePayment", id: "10" },
  { header: "Others Currency", accessorKey: "othersCurrency", id: "11" },
  { header: "Closing Date & Time", accessorKey: "closingDateTime", id: "12" },
  { header: "Closing Balance", accessorKey: "closingBalance", id: "13" },
];
const TABLE_DATA = [
  {
    id: "1",
    counter: "00002",
    openingDateTime: "26/04/2021 12:20",
    openingBalance: "$0",
    salePaidAmount: "$150",
    refundAmount: "$0",
    customerDueReceive: "$10",
    purchase: "$0",
    expense: "$0",
    duePayment: "$0",
    othersCurrency: "$0",
    closingDateTime: "26/04/2021 12:20",
    closingBalance: "$120",
  },
  {
    id: "2",
    counter: "00003",
    openingDateTime: "26/04/2021 09:00",
    openingBalance: "$50",
    salePaidAmount: "$200",
    refundAmount: "$10",
    customerDueReceive: "$20",
    purchase: "$30",
    expense: "$20",
    duePayment: "$10",
    othersCurrency: "$5",
    closingDateTime: "26/04/2021 18:00",
    closingBalance: "$155",
  },
  // Add more rows as needed
];
const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
  {
    id: "FD3",
    type: "select",
    name: "user",
    title: "User",
    options: [
      { value: "name1 ", label: "name1", id: 1 },
      { value: "name2 ", label: "name2", id: 2 },
      { value: "name3 ", label: "name3", id: 3 },
    ],
  },
];

const RegisterReport = () => {
  const [filterData, setFilterData] = useState({});

  return (
    <div className="p-2 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Register Report </p>
      </div>
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>
      <div className="my-4 px-4 flex justify-between items-center">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />
        </div>
      </div>
      <CustomTable data={TABLE_DATA} columns={COLUMNS} />
    </div>
  );
};

export default RegisterReport;
