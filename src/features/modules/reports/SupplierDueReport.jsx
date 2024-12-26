import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import Header from "./components/Headers";

const COLUMNS = [
  { header: "Sr No.", accessorKey: "id", id: "1" },
  { header: "Supplier", accessorKey: "report", id: "2" },
  { header: "Payable Due", accessorKey: "amount", id: "3" },
];
const TABLE_DATA = [
  {
    id: "1",
    report: "Quick Ingredient Supplier	",
    amount: "$103.00",
  },
  {
    id: "2",
    report: "Quick Ingredient Supplier	",
    amount: "$521.00",
  },
];

const SupplierDueReport = () => {
  return (
    <div className="p-2 space-y-4">
      <div className="px-4">
        <p className="text-xl font-bold ">Supplier Due Report </p>
      </div>
      <div className="my-4 flex justify-between items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />
        </div>
      </div>
      <CustomTable data={TABLE_DATA} columns={COLUMNS} />
    </div>
  );
};

export default SupplierDueReport;
