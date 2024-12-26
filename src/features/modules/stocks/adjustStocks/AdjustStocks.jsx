/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import CustomTable from "../../../ui/table/CustomTable";
import AddAdjustStock from "./components/AddAdjustStocks";

const AdjustStocks = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Sample data
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Tomato(123)",
        category: "Others",
        quantity: "+ 10kg",
        date: "10-11-2023",
        person: "Amir Khan",
      },
      {
        id: 2,
        name: "Potato(456)",
        category: "Vegetables",
        quantity: "- 5kg",
        date: "11-11-2023",
        person: "John Doe",
      },
      {
        id: 3,
        name: "Carrot(789)",
        category: "Root",
        quantity: "+ 20kg",
        date: "12-11-2023",
        person: "Jane Smith",
      },
      {
        id: 4,
        name: "Onion(101)",
        category: "Bulb",
        quantity: "- 8kg",
        date: "13-11-2023",
        person: "Bruce Wayne",
      },
    ],
    []
  );

  // Columns definition with dynamic quantity coloring
  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Stocks Name(code)", accessorKey: "name", id: "2" },
      { header: "Category", accessorKey: "category", id: "3" },
      {
        header: "Stock Quantity",
        accessorKey: "quantity",
        id: "4",
        cell: ({ value }) => <span>{value}</span>,
      },
      { header: "Date", accessorKey: "date", id: "5" },
      { header: "Responsible person", accessorKey: "person", id: "6" },
    ],
    []
  );

  return (
    <>
      <div className="p-6 bg-white rounded-lg  ">
        <div className="p-4">
          <p className="font-bold text-xl">Adjust Stocks</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          {/* Search Input */}
          <div className="flex items-center space-x-2 px-4">
            <SearchComponent />
          </div>

          {/* Export Buttons & Add Stock Button */}
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover"
            >
              + Adjust Stocks
            </button>
          </div>
        </div>

        {/* Custom Table */}
        <CustomTable columns={columns} data={data} />
      </div>

      {/* Add Adjust Stock Modal */}
      <AddAdjustStock
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
};

export default AdjustStocks;
