import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import CustomTable from "../../../../ui/table/CustomTable";
import AddExpenseItemPopup from "./components/AddExpenceItem";
import EditExpenseItemPopup from "./components/EditExpenceItem";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";

const ExpenseItems = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const data = useMemo(
    () => [
      { id: 1, item: "Utility Bill", desc: "AFYA CHAP", addedby: "admin" },
      { id: 2, item: "Utility Bill", desc: "AFYA CHAP", addedby: "admin" },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Item Name", accessorKey: "item", id: "2" },
      { header: "Description", accessorKey: "desc", id: "3" },
      { header: "Added By", accessorKey: "addedby", id: "4" },
      {
        header: "Action",
        accessorKey: "actions",
        id: "5",
        cell: () => (
          <div className="flex justify-center items-center space-x-2">
            <MdEdit
              onClick={() => setIsEditModalOpen(true)}
              className="bg-orange-500 p-1.5 text-3xl rounded-lg text-white cursor-pointer"
              title="Edit"
            />
            <FaTrashAlt
              onClick={() => setIsDeleteModalOpen(true)}
              className="bg-red-500 p-1.5 text-3xl rounded-lg text-white cursor-pointer"
              title="Delete"
            />
          </div>
        ),
      },
    ],
    []
  );

  const handleDelete = () => {
    toast.success("Deleted Successfully");
  };

  return (
    <>
      <div className="p-6 bg-white rounded-lg ">
        <div className="p-4">
          <p className="font-bold text-xl">Expense Item</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex px-4 items-center space-x-2">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover"
            >
              + Add Expense
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddExpenseItemPopup
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditExpenseItemPopup
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Expence Item"
      />
    </>
  );
};

export default ExpenseItems;
