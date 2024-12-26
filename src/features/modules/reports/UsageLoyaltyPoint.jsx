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
    header: "Date",
    accessorKey: "date",
    id: "2",
  },
  {
    header: "Sale No",
    accessorKey: "saleNo",
    id: "3",
  },
  {
    header: "Customer(phone.no)",
    accessorKey: "contactDetails",
    id: "4",
  },
  {
    header: "Usage Point",
    accessorKey: "usagePoint",
    id: "5",
  },
  {
    header: "Redeemed Point",
    accessorKey: "redemedpoint",
    id: "6",
  },
];
const data = [
  {
    srNo: "1.",
    date: "01-11-2011",
    saleNo: "157441",
    contactDetails: "79700979702",
    usagePoint: "579",
    redemeed: "59",
  },
];

const UsageLoyalityReport = () => {
  const [filterdata, setFilterData] = useState({});
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Usage Loyality point Report </p>
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

export default UsageLoyalityReport;
