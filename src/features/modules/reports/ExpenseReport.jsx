/* eslint-disable react/prop-types */
import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
  {
    id: "FD3",
    type: "select",
    name: "expence Item",
    title: "Expence Item",
    options: [
      { value: "name1 ", label: "name1", id: 1 },
      { value: "name2 ", label: "name2", id: 2 },
      { value: "name3 ", label: "name3", id: 3 },
    ],
  },
];

const data = [
  {
    srNo: 1,
    date: "12/2/2004",
    amount: "$5566",
    category: "SN-Ingredient-Qty/Amount-Unit Price-Total\n1-hari-10Kg-100-1000",
    paymentMethods: "Cash",
    responsiblePerson: "Admin user",
  },
];

const columns = [
  {
    header: "Sr No.",
    accessorKey: "srNo",
    id: "1",
  },
  {
    header: "Date",
    accessorKey: "date",
    id: "2",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    id: "3",
  },
  {
    header: "Category",
    accessorKey: "category",
    cell: ({ value }) => <div className="whitespace-pre-line">{value}</div>, // Handles multiline text in the Category field
    id: "4",
  },
  {
    header: "Payment Methods",
    accessorKey: "paymentMethods",
    id: "5",
  },
  {
    header: "Responsible Person",
    accessorKey: "responsiblePerson",

    id: "6",
  },
];

const ExpeseReport = () => {
  const [filterdata, setFilterData] = useState({});

  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Expense Report </p>
      </div>
      {/* Filter Section */}
      <div className="py-2 px-4">
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

export default ExpeseReport;
