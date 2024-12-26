import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";

const CustomerDueReport = () => {
  const [filterdata, setFilterData] = useState({});
  const formData = [
    { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
    { id: "FD2", type: "date", name: "endDate", title: "End Date" },
    {
      id: "FD3",
      type: "select",
      name: "customer",
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
      header: "Customer",
      accessorKey: "customer",
      id: "2",
    },
    {
      header: "Contact Details",
      accessorKey: "contactDetails",
      id: "3",
    },
    {
      header: "Payable Due",
      accessorKey: "payableDue",
      id: "4",
    },
  ];
  const data = [
    {
      srNo: "1.",
      customer: "Richard Smith",
      contactDetails: "79700979702",
      payableDue: "$579",
    },
    // Add more rows as needed
  ];
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Customer Due Report </p>
      </div>
      {/* Filter Section */}
      <div className="py-2 px-5">
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

export default CustomerDueReport;
