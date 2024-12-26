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
    name: "Event Title",
    title: "Event Title",
    options: [
      { value: "name1 ", label: "name1", id: 1 },
      { value: "name2 ", label: "name2", id: 2 },
      { value: "name3 ", label: "name3", id: 3 },
    ],
  },
  {
    id: "FD4",
    type: "select",
    name: "User",
    title: "User",
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
    outlet: "cafe",
    doneBy: "Admin User",
    eventtitle: "remove Item",
    dt: "Admin User",
    details:
      "Reason: MCHASale No: dLQ241125-001, Sale Date: 2024/11/25, Customer: Walk-in Customer - , VAT: 37.28,Discount: 0.00, Total Payable: 108.00Items:Massaman Beef Curry(1 X 3.00), ,   Modifier:  House SaladCoca cola 400ml(1 X 2.00), Black Pepper Beef(2 X 50.00)",
  },
];

const columns = [
  {
    header: "Sr No.",
    accessorKey: "srNo",
    id: "1",
  },
  {
    header: "Outlet",
    accessorKey: "outlet",
    id: "2",
  },
  {
    header: "Done By",
    accessorKey: "doneBy",
    id: "3",
  },

  {
    header: "Event Title",
    accessorKey: "eventtitle",
    id: "4",
  },
  {
    header: "Date And Time",
    accessorKey: "dt",
    cell: ({ value }) => <div className="whitespace-pre-line">{value}</div>,
    id: "5",
  },
  {
    header: "Category",
    accessorKey: "category",
    cell: ({ value }) => <div className="whitespace-pre-line">{value}</div>,
    id: "6",
  },
];

const AuditLogReport = () => {
  const [filterdata, setFilterData] = useState({});
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Audit Log Report </p>
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
        <CustomTable setOpen={true} data={data} columns={columns} />
      </div>
    </div>
  );
};

export default AuditLogReport;
