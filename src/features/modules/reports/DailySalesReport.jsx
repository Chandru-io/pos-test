import { useState } from "react";

import Header from "./components/Headers";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";

const FOOD_MENU_DATA = [
  {
    id: "1",
    date: "26/04/2021 12:20",
    totalSale: "00002",
    totalRefund: "$908",
  },
];
const FOOD_MENU_COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Date", accessorKey: "date", id: "2" },
  { header: "Total Sale", accessorKey: "totalSale", id: "3" },
  { header: "Total Refund", accessorKey: "totalRefund", id: "4" },
];

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
  {
    id: "FD3",
    type: "select",
    name: "waiter",
    title: "Waiter",
    options: [
      { value: "name1 ", label: "waiter 1", id: 1 },
      { value: "name2 ", label: "waiter 2", id: 2 },
      { value: "name3 ", label: "waiter 3", id: 3 },
    ],
  },
];

const DailySalesReport = () => {
  const [filterData, setFilterData] = useState({});
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Daily Sales Report </p>
      </div>
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>
      <div className="my-4 flex justify-between items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />
        </div>
      </div>
      <CustomTable data={FOOD_MENU_DATA} columns={FOOD_MENU_COLUMNS} />
    </div>
  );
};

export default DailySalesReport;
