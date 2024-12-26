import { useMemo } from "react";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import CustomTable from "../../../ui/table/CustomTable";

const LowStocks = () => {
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Tomato(123)",
        category: "Others",
        stockquantity: "10 Box",
        quantity: "10kg",
      },
      {
        id: 1,
        name: "Tomato(123)",
        category: "Others",
        stockquantity: "10 Box",
        quantity: "10kg",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Stocks Name(code)", accessorKey: "name", id: "2" },
      { header: "Category", accessorKey: "category", id: "3" },
      {
        header: "Stock Quantity/Amount",
        accessorKey: "stockquantity",
        id: "4",
      },
      { header: "Low Quantity/Amount", accessorKey: "quantity", id: "5" },
    ],
    []
  );

  return (
    <>
      <div className="p-6 bg-white rounded-lg  ">
        <div className="p-4">
          <p className="font-bold text-xl">Low Stocks</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 px-4">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default LowStocks;
