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
    name: "Users",
    title: "Users",
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
    totalLoss: "$5566",
    ingredientCount: "5",

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
    id: "2",
    accessorKey: "date",
  },
  {
    header: "Total Loss",
    id: "3",
    accessorKey: "totalLoss",
  },

  {
    header: "Ingredient Count",
    id: "4",
    accessorKey: "ingredientCount",
  },
  {
    header: "Responsible Person",
    id: "5",
    accessorKey: "responsiblePerson",
  },
];
const WasteReport = () => {
  const [filterdata, setFilterData] = useState({});

  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Waste Report </p>
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
        <CustomTable setOpen={true} data={data} columns={columns} />
      </div>
    </div>
  );
};

export default WasteReport;
