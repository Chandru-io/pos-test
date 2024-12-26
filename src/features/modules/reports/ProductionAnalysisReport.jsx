import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import Header from "./components/Headers";

const FOOD_MENU_DATA = [
  {
    id: "1",
    foodMenuCode: "IV21",
    saleQuantity: 10,
    saleQuantityPercentage: "0.8",
    cumRatios1: "2.9",
    price: "$56",
    revenue: "$960",
    revenuePercentage: "6.9%",
    cumRatios2: "0.8",
    unitCost: "$5.00",
    totalUnitCost: "$50.00",
    unitProfit: "$12",
    totalProfit: "$120",
    profitPercentage: "40",
    cumRatios3: "0.9",
    saleRanking: "8th",
    revenueRanking: "2nd",
    profitRanking: "1st",
  },
  {
    id: "2",
    foodMenuCode: "IV22",
    saleQuantity: 15,
    saleQuantityPercentage: "1.2",
    cumRatios1: "3.5",
    price: "$65",
    revenue: "$975",
    revenuePercentage: "7.2%",
    cumRatios2: "0.9",
    unitCost: "$6.00",
    totalUnitCost: "$90.00",
    unitProfit: "$14",
    totalProfit: "$210",
    profitPercentage: "35",
    cumRatios3: "1.2",
    saleRanking: "5th",
    revenueRanking: "1st",
    profitRanking: "2nd",
  },
  // Add more rows as needed
];
const FOOD_MENU_COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Food Menu Code", accessorKey: "foodMenuCode", id: "2" },
  { header: "Sale Quantity", accessorKey: "saleQuantity", id: "3" },
  { header: "Sale Quantity%", accessorKey: "saleQuantityPercentage", id: "4" },
  { header: "Cum. Ratios", accessorKey: "cumRatios1", id: "5" },
  { header: "Price", accessorKey: "price", id: "6" },
  { header: "Revenue", accessorKey: "revenue", id: "7" },
  { header: "Revenue%", accessorKey: "revenuePercentage", id: "8" },
  { header: "Cum. Ratios", accessorKey: "cumRatios2", id: "9" },
  { header: "Unit Cost", accessorKey: "unitCost", id: "10" },
  { header: "Total Unit Cost", accessorKey: "totalUnitCost", id: "11" },
  { header: "Unit Profit", accessorKey: "unitProfit", id: "12" },
  { header: "Total Profit", accessorKey: "totalProfit", id: "13" },
  { header: "Profit%", accessorKey: "profitPercentage", id: "14" },
  { header: "Cum. Ratios", accessorKey: "cumRatios3", id: "15" },
  { header: "Sale Ranking", accessorKey: "saleRanking", id: "16" },
  { header: "Revenue Ranking", accessorKey: "revenueRanking", id: "17" },
  { header: "Profit Ranking", accessorKey: "profitRanking", id: "18" },
];

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
  {
    id: "FD3",
    type: "select",
    name: "Category",
    title: "Category",
    options: [
      { value: "name1 ", label: "Category 1", id: 1 },
      { value: "name2 ", label: "Category 2", id: 2 },
      { value: "name3 ", label: "Category 3", id: 3 },
    ],
  },
];
const ProductionAnalysisReport = () => {
  const [filterData, setFilterData] = useState({});
  return (
    <div className="p-2 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Production Analysis Report </p>
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

export default ProductionAnalysisReport;
