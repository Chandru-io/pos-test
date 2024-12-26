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
const LowStockReport = () => {
  return (
    <Header>
      <div className="flex px-4 justify-between items-center ">
        <p className="text-  font-bold text-xl">Low Stock Report</p>
        <p className="bg-[#064E79] px-4 py-1 rounded-lg text-center">
          <span className="text-white font-semibold cursor-pointer p-2 ">
            Back
          </span>
        </p>
      </div>
      <div className="my-4 flex justify-between items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />
        </div>
      </div>
      <CustomTable
        data={INGREDIENT_STOCK_DATA}
        columns={INGREDIENT_STOCK_COLUMNS}
      />
    </Header>
  );
};

export default LowStockReport;
