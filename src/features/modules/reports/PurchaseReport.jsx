/* eslint-disable react/prop-types */

import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
];

const data = [
  {
    srNo: 1,
    referenceNumber: "123456",
    date: "12/2/2004",
    supplier: "Praveen Shukla",
    grandTotal: "$5566",
    paid: "$56",
    due: "$78",
    ingredients:
      "SN-Ingredient-Qty/Amount-Unit Price-Total\n1-hari-10Kg-100-1000",
    paymentMethods: "Cash",
    purchasedBy: "Admin user",
  },
];
const columns = [
  {
    header: "Sr No.",
    accessorKey: "srNo",
    id: "1",
  },
  {
    header: "Reference Number",
    accessorKey: "referenceNumber",
    id: "2",
  },
  {
    header: "Date",
    accessorKey: "date",
    id: "3",
  },
  {
    header: "Supplier",
    accessorKey: "supplier",
    id: "4",
  },
  {
    header: "Grand Total",
    accessorKey: "grandTotal",
    id: "5",
  },
  {
    header: "Paid",
    accessorKey: "paid",
    id: "6",
  },
  {
    header: "Due",
    accessorKey: "due",
    id: "7",
  },
  {
    header: "Ingredients",
    accessorKey: "ingredients",
    cell: ({ value }) => <div className="whitespace-pre-line">{value}</div>, // To handle multiline text
  },
  {
    header: "Payment Methods",
    accessorKey: "paymentMethods",
    id: "8",
  },
  {
    header: "Purchased By",
    accessorKey: "purchasedBy",
    id: "9",
  },
];

const PurchaseReport = () => {
  const [filterdata, setFilterData] = useState({});

  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Purchase Report </p>
      </div>
      {/* Filter Section */}
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>

      {/* Search and Download Section */}
      <div className="px-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between md:items-center">
        <SearchComponent />
        <DownloadComponent />
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <CustomTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default PurchaseReport;
