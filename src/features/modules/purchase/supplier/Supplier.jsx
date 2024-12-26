import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router";
import DeleteModel from "../../../components/Delete";
import toast from "react-hot-toast";
import AddSupplierModal from "./components/AddSupplier";
import EditSupplierModal from "./components/EditSupplier";
import CustomTable from "../../../ui/table/CustomTable";
import { Tabs } from "flowbite-react";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";

const Supplier = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDelete = () => {
    toast.success("Deleted successfullf ");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Quick ingredient supplier",
        personName: "John Doe",
        phoneNumber: "6767676767",
        email: "kfc@gmail.com",
        balance: "$1250",
      },
      {
        id: 2,
        name: "Fresh Foods Co.",
        personName: "Jane Smith",
        phoneNumber: "9898989898",
        email: "freshfoods@gmail.com",
        balance: "$2500",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Name", accessorKey: "name", id: "2" },
      { header: "Person name", accessorKey: "personName", id: "3" },
      { header: "Phone number", accessorKey: "phoneNumber", id: "4" },
      { header: "Email", accessorKey: "email", id: "5" },
      { header: "Balance", accessorKey: "balance", id: "6" },
      {
        header: "Action",
        accessorKey: "actions",
        cell: () => (
          <div className="flex justify-center items-center space-x-2">
            <Link to="view">
              <FaRegEye
                className="bg-orange-500 p-1.5 text-3xl rounded-lg text-white cursor-pointer"
                title="View"
              />
            </Link>
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
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="p-4">
          <p className="font-bold text-xl">Supplier</p>
        </div>
        <div className="flex justify-between items-center mb-4 ">
          <div className="flex items-center space-x-2 px-4">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-primary_button text-white px-4 py-2 rounded-lg hover:bg-primary_button_hover"
            >
              + Add Suppliers
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddSupplierModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditSupplierModal
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

export default Supplier;
