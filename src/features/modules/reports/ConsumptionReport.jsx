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
  { header: "Ingredient Name", accessorKey: "report", id: "2" },
  { header: "Quantity/Amount", accessorKey: "amount", id: "3" },
  { header: "Total  Cost", accessorKey: "cose", id: "4" },
];
const TABLE_DATA = [];

const ConsumptionReport = () => {
  const [filterData, setFilterData] = useState({});

  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Cunsumption Report </p>
      </div>
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>
      <div>
        <h3 className="text-center font-semibold text-lg">
          Consumption Report of Menus
        </h3>
        <div className="my-4 flex justify-between items-center px-4">
          <SearchComponent />
          <div className="flex items-center gap-x-10">
            <DownloadComponent />
          </div>
        </div>
        <CustomTable data={TABLE_DATA} columns={COLUMNS} />
      </div>
    </div>
  );
};

export default ConsumptionReport;
