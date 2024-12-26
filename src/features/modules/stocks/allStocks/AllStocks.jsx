import { useMemo, useState } from "react";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import CustomTable from "../../../ui/table/CustomTable";
import AddAllStockModal from "./components/AddAllStocks";
import EditAllStockModal from "./components/EditAllStocks";
import DeleteModel from "../../../components/Delete";
import toast from "react-hot-toast";

const AllStocks = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Deleted Successfully");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Tomato(123)",
        category: "Others",
        unit: "kg",
        quantity: "10kg",
      },
      {
        id: 1,
        name: "Tomato(123)",
        category: "Others",
        unit: "kg",
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
      { header: "Unit", accessorKey: "unit", id: "4" },
      { header: "Low Quantity/Amount", accessorKey: "quantity", id: "5" },
      {
        header: "Action",
        accessorKey: "actions",
        id: "6",
        cell: () => (
          <div className="flex justify-center items-center space-x-2">
            <button
              className="text-[#1AB69D] bg-[#E9FAF7] p-1.5 rounded-md"
              onClick={() => setIsEditModalOpen(true)}
            >
              <RiEdit2Fill />
            </button>
            <button
              className="text-[#EB3D4D] bg-[#FFECE4] p-1.5 rounded-md"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <RiDeleteBin6Fill />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <>
      <div className="p-6 bg-white rounded-lg ">
        <div className="p-4">
          <p className="font-bold text-xl">All Stocks</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 px-4">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4  ">
            <DownloadComponent />
            <button
              onClick={() => {
                setIsAddModalOpen(true);
              }}
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover"
            >
              + Add Stocks
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddAllStockModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditAllStockModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Stocks"
      />
    </>
  );
};

export default AllStocks;
