import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import Header from "./components/Headers";

const INGREDIENT_STOCK_DATA = [
  {
    id: "1",
    ingredientName: "Flour",
    category: "Grains",
    stockQuantity: "50 kg",
    lowQuantityThreshold: "10 kg",
  },
  {
    id: "2",
    ingredientName: "Sugar",
    category: "Condiments",
    stockQuantity: "25 kg",
    lowQuantityThreshold: "5 kg",
  },
  {
    id: "3",
    ingredientName: "Milk",
    category: "Dairy",
    stockQuantity: "20 liters",
    lowQuantityThreshold: "5 liters",
  },
  {
    id: "4",
    ingredientName: "Eggs",
    category: "Protein",
    stockQuantity: "200 units",
    lowQuantityThreshold: "50 units",
  },
  {
    id: "5",
    ingredientName: "Salt",
    category: "Condiments",
    stockQuantity: "15 kg",
    lowQuantityThreshold: "3 kg",
  },
];
const INGREDIENT_STOCK_COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Ingredient Name", accessorKey: "ingredientName", id: "2" },
  { header: "Category", accessorKey: "category", id: "3" },
  { header: "Stock Quantity/Amount", accessorKey: "stockQuantity", id: "4" },
  {
    header: "Low Quantity/Amount",
    accessorKey: "lowQuantityThreshold",
    id: "5",
  },
];

const formData = [
  {
    id: "FD1",
    type: "select",
    name: "category",
    title: "Category",
    options: [
      { value: "name1 ", label: "Category 1", id: 1 },
      { value: "name2 ", label: "Category 2", id: 2 },
      { value: "name3 ", label: "Category 3", id: 3 },
    ],
  },
  {
    id: "FD2",
    type: "select",
    name: "ingredients",
    title: "Ingredients",
    options: [
      { value: "name1 ", label: "Ingredients 1", id: 1 },
      { value: "name2 ", label: "Ingredients 2", id: 2 },
      { value: "name3 ", label: "Ingredients 3", id: 3 },
    ],
  },
  {
    id: "FD3",
    type: "select",
    name: "foodMenu",
    title: "Food Menu",
    options: [
      { value: "name1 ", label: "Food Menu 1", id: 1 },
      { value: "name2 ", label: "Food Menu 2", id: 2 },
      { value: "name3 ", label: "Food Menu 3", id: 3 },
    ],
  },
];

const StockReport = () => {
  const [filterData, setFilterData] = useState({});
  return (
    <div className="p-2 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Stock Report </p>
      </div>
      <div className="px-4">
        <ReportFilters formData={formData} setFilterData={setFilterData} />
      </div>
      <div className="flex justify-end items-center pr-10">
        <p className="bg-[#EE4B631A] px-4 py-1 rounded-xl text-center">
          <span className="text-[#EE4B63] font-semibold">Low Stock - 112</span>
        </p>
      </div>
      <div className="my-4 flex justify-between items-center">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />
        </div>
      </div>
      <CustomTable
        data={INGREDIENT_STOCK_DATA}
        columns={INGREDIENT_STOCK_COLUMNS}
      />
    </div>
  );
};

export default StockReport;
