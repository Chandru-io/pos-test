import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
];

const columns = [
  { header: "Sr No.", accessorKey: "srNo", id: "1" },
  { header: "Sale Number", accessorKey: "saleNumber", id: "2" },
  { header: "Date", accessorKey: "date", id: "3" },
  { header: "Total Sale", accessorKey: "totalSale", id: "4" },
  { header: "Applied Tax", accessorKey: "appliedTax", id: "5" },
  { header: "Total Tax Amount", accessorKey: "totalTaxAmount", id: "6" },
];
const data = [
  {
    srNo: 1,
    saleNumber: 45677,
    date: "12/07/2025",
    totalSale: "$79898",
    appliedTax: "VAT:13.69, CGST:8.38, SGST:8.38",
    totalTaxAmount: "$1234",
  },
];

const TaxReport = () => {
  const [filterdata, setFilterData] = useState({});
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Tax Report </p>
      </div>
      {/* Filter Section */}
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>

      {/* Search and Download Section */}
      <div className="px-4   flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between md:items-center">
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

export default TaxReport;
