import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import CustomTable from "../../../../ui/table/CustomTable";
import AddExpensePopup from "./components/AddExpence";
import EditExpensePopup from "./components/EditExpence";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";

const Expense = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Deleted Succssfully");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        date: "10-11-2024",
        amount: "$1020",
        paymentmethod: "Cash",
        category: "Office Rent",
        responsible: "N/A",
        note: "Brought Milk",
        addedby: "admin",
      },
      {
        id: 2,
        date: "10-11-2024",
        amount: "$1020",
        paymentmethod: "Cash",
        category: "Office Rent",
        responsible: "N/A",
        note: "Brought Milk",
        addedby: "admin",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Date", accessorKey: "date", id: "2" },
      { header: "Amount", accessorKey: "amount", id: "3" },
      { header: "Payment Method", accessorKey: "paymentmethod", id: "4" },
      { header: "Category", accessorKey: "category", id: "5" },
      { header: "Responsible Person", accessorKey: "responsible", id: "6" },
      { header: "Note", accessorKey: "note", id: "7" },
      { header: "Added By", accessorKey: "addedby", id: "8" },
      {
        header: "Action",
        accessorKey: "actions",
        id: "9",
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

  return (
    <>
      <div className="p-6 bg-white rounded-lg ">
        <div className="p-4">
          <p className="font-bold text-xl">Expense</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 px-4">
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
      <AddExpensePopup
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditExpensePopup
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Expence"
      />
    </>
  );
};

export default Expense;
