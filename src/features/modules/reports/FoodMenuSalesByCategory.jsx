import { useState } from "react";
import ReportFilters from "./components/ReportFilters";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";

const formData = [
  { id: "FD1", type: "date", name: "startDate", title: "Start Date" },
  { id: "FD2", type: "date", name: "endDate", title: "End Date" },
  {
    id: "FD3",
    type: "select",
    name: "category",
    title: "Category",
    options: [
      { value: "name1 ", label: "name1", id: 1 },
      { value: "name2 ", label: "name2", id: 2 },
      { value: "name3 ", label: "name3", id: 3 },
    ],
  },
];
const columns = [
  { header: "Sr No.", accessorKey: "srNo", id: "1" },
  { header: "Code", accessorKey: "code", id: "2" },
  { header: "Food Menu (Code)", accessorKey: "foodMenuCode", id: "3" },
  { header: "Category Name", accessorKey: "categoryName", id: "4" },
  { header: "Quantity", accessorKey: "quantity", id: "5" },
  { header: "Sales Value", accessorKey: "salesValue", id: "6" },
  {
    header: "Average Selling Price",
    accessorKey: "averageSellingPrice",
    id: "7",
  },
];
const data = [
  {
    srNo: "01",
    code: "017",
    foodMenuCode: "Chicken Piccata",
    categoryName: "Fast Food",
    quantity: 1,
    salesValue: 5.0,
    averageSellingPrice: 5.0,
  },
];

const FoodMenuCategoryReport = () => {
  const [filterdata, setFilterData] = useState({});
  return (
    <div className="p-4 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Food Menu Sales By Category </p>
      </div>
      {/* Filter Section */}
      <div className="py-2 px-4">
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

export default FoodMenuCategoryReport;
