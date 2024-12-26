import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import Header from "./components/Headers";
const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
];

const COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Report", accessorKey: "report", id: "2" },
  { header: "Amount", accessorKey: "amount", id: "3" },
];
const TABLE_DATA = [
  {
    id: "1",
    report: "Total Sales (Paid & Unpaid) (Incl. Tax)",
    amount: "$0.00",
  },
  {
    id: "2",
    report: "Total Cost Of Goods Sold (Based on the Average Price)	",
    amount: "$0.00",
  },
];

const ProfitLossReport = () => {
  const [filterData, setFilterData] = useState({});

  return (
    <div className="p-2 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Profit And Loss Report </p>
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

export default ProfitLossReport;
