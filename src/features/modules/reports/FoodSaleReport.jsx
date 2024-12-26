import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import Header from "./components/Headers";

const FOOD_MENU_DATA = [
  {
    id: "1",
    foodMenu: "1234",
    category: "Drink",
    quantity: "108",
  },
];

const FOOD_MENU_COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Food Menu(Code)", accessorKey: "date", id: "2" },
  { header: "Category", accessorKey: "totalSale", id: "3" },
  { header: "Quantity", accessorKey: "totalRefund", id: "4" },
];

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
  {
    id: "FD3",
    type: "select",
    name: "sortType",
    title: "Sort",
    options: [
      { value: "name1 ", label: "Lower to higher", id: 1 },
      { value: "name1 ", label: "Lower to higher", id: 1 },
    ],
  },
  {
    id: "FD4",
    type: "select",
    name: "productType",
    title: "Product Type",
    options: [
      { value: "name1 ", label: "Product Type", id: 1 },
      { value: "name1 ", label: "Product Type", id: 1 },
    ],
  },
  {
    id: "FD5",
    type: "select",
    name: "outlet",
    title: "Outlet",
    options: [
      { value: "name1 ", label: "Outlet", id: 1 },
      { value: "name1 ", label: "Outlet", id: 1 },
    ],
  },
];

const FoodSaleReport = () => {
  const [filterData, setFilterData] = useState({});
  return (
    <div className="p-2 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Food Sales Report </p>
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
      <CustomTable data={FOOD_MENU_DATA} columns={FOOD_MENU_COLUMNS} />
    </div>
  );
};

export default FoodSaleReport;
