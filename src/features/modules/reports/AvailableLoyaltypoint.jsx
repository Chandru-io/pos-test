import { useState } from "react";

import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";

const formData = [
  {
    id: "FD1",
    type: "select",
    name: "Customer",
    title: "Customer",
    options: [
      { value: "name1 ", label: "name1", id: 1 },
      { value: "name2 ", label: "name2", id: 2 },
      { value: "name3 ", label: "name3", id: 3 },
    ],
  },
];

const columns = [
  {
    header: "Sr No.",
    accessorKey: "srNo",
    id: "1",
  },
  {
    header: "Customer(phone.no)",
    accessorKey: "contactDetails",
    id: "2",
  },
  {
    header: "Total Redeemed Point",
    accessorKey: "redemedpoint",
    id: "3",
  },
  {
    header: "Total Available Point",
    accessorKey: "availablepoint",
    id: "4",
  },
];
const data = [
  {
    srNo: "1.",

    contactDetails: "79700979702",
    redemedpoint: "579",
    availablepoint: "59",
  },
];

const AvailableLoyaltyPointReport = () => {
  const [filterdata, setFilterData] = useState({});
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Available Loyality Points </p>
      </div>
      {/* Filter Section */}
      <div className="  px-4">
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

export default AvailableLoyaltyPointReport;
