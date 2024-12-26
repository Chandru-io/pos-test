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
    name: "Employee",
    title: "Employee",
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
    refno: "5566",
    employee: "$5566",

    intime: "10.50",
    outtime: "6.20",
    timecount: "15.25",
  },
];

const columns = [
  {
    header: "Sr No.",
    accessorKey: "srNo",
    id: 1,
  },
  {
    header: "Date",
    accessorKey: "date",
    id: 2,
  },
  {
    header: "Referance No",
    accessorKey: "refno",
    id: 3,
  },
  {
    header: "Employee",
    accessorKey: "employee",
    id: 4,
  },
  {
    header: "In time",
    accessorKey: "intime",
    id: 5,
  },
  {
    header: "Out Time ",
    accessorKey: "outtime",
    id: 6,
  },
  {
    header: "Time Count ",
    accessorKey: "timecount",
    id: 7,
  },
];
const AttendaceReport = () => {
  const [filterdata, setFilterData] = useState({});
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Attendance Report</p>
      </div>
      {/* Filter Section */}
      <div className="py-2 px-5">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>

      {/* Search and Download Section */}
      <div className=" px-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between md:items-center">
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

export default AttendaceReport;
