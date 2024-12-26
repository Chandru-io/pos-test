import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Tabs from "../components/Tabs";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import CustomTable from "../../../ui/table/CustomTable";
import AddPurchase from "./components/AddPurchase";
import EditPurchase from "./components/EditPurchase";
import DeleteModel from "../../../components/Delete";
import toast from "react-hot-toast";

const PurchaseTable = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDelete = () => {
    toast.success("Deleted Sucessfully");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        reference: "9900",
        payment: "Card",
        date: "11-02-2019",
        supplier: "Mathew",
        total: "$1250",
        paid: "$909",
        due: "$223",
        added: "Admin User",
      },
      {
        id: 1,
        reference: "9900",
        payment: "Card",
        date: "11-02-2019",
        supplier: "Mathew",
        total: "$1250",
        paid: "$909",
        due: "$223",
        added: "Admin User",
      },
    ],
    []
  );

  // Define columns for the CustomTable
  const columns = useMemo(
    () => [
      {
        header: "Sr. No",
        accessorKey: "id",
        id: "1",
      },
      {
        header: "Reference No.",
        accessorKey: "reference",
        id: "2",
      },
      {
        header: "Payment Method",
        id: "3",
        accessorKey: "payment",
      },
      {
        header: "Date",
        accessorKey: "date",
        id: "4",
      },
      {
        header: "Supplier",
        accessorKey: "supplier",
        id: "5",
      },
      {
        header: "Grand Total",
        accessorKey: "total",
        id: "7",
      },
      {
        header: "Paid",
        accessorKey: "paid",
        id: "8",
      },
      {
        header: "Due",
        accessorKey: "due",

        id: "9",
      },
      {
        header: "Added By",
        accessorKey: "added",
        id: "10",
      },
      {
        header: "Action",
        accessorKey: "actions",
        cell: () => (
          <div className="flex justify-center items-center space-x-2">
            <MdEdit
              onClick={() => setIsEditModalOpen(true)}
              className="bg-orange-500 p-1.5 text-3xl rounded-lg text-white  cursor-pointer"
              title="Edit"
            />
            <FaTrashAlt
              onClick={() => setIsDeleteModalOpen(true)}
              className="bg-red-500 p-1.5 text-3xl rounded-lg text-white  cursor-pointer"
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
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="p-4">
          <p className="font-bold text-xl">Purchase</p>
        </div>

        <div className="flex justify-between items-center mb-4">
          {/* Search and Actions */}
          <div className="px-4">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-2 px-4">
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <DownloadComponent />
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="bg-primary_button text-white px-4 py-2 rounded-lg hover:bg-primary_button_hover"
              >
                + Add Purchase
              </button>
            </div>
          </div>
        </div>

        {/* CustomTable Component */}
        <CustomTable columns={columns} data={data} />
      </div>
      <AddPurchase
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditPurchase
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Purchase"
      />
    </>
  );
};

export default PurchaseTable;
