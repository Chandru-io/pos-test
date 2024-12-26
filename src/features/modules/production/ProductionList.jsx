/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaRegEye, FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import AddProduction from "./components/AddProduction";
import EditProduction from "./components/EditProduction";
import ViewProduction from "./components/ViewProduction";
import DeleteModel from "../../components/Delete";
import toast from "react-hot-toast";
// Sample Data
const data = [
  {
    srNo: 1,
    referenceNo: "00002",
    date: "26/04/2021",
    status: "Final",
    addedBy: "Admin User",
    action: ["Edit", "Delete"], // Action buttons
  },
  {
    srNo: 2,
    referenceNo: "00002",
    date: "26/04/2021",
    status: "Draft",
    addedBy: "Admin User",
    action: ["View", "Edit"],
  },
];

const viewData = {
  referenceNumber: "0000002",
  status: "Draft",
  date: "16/12/2024",
  products: [
    { name: "Beef Bulgogi (130)", quantity: "12Kg" },
    { name: "Marinated Roast Chicken (128)", quantity: "24Kg" },
  ],
};

const ProductionList = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Deleted Successfully");
  };
  const columns = [
    {
      header: "Sr. No.",
      accessorKey: "srNo",
      id: "1",
    },
    {
      header: "Reference No.",
      accessorKey: "referenceNo",
      id: "2",
    },
    {
      header: "Date",
      accessorKey: "date",
      id: "3",
    },
    {
      header: "Status",
      accessorKey: "status",
      id: "4",
      cell: ({ cell }) => {
        const status = statusOptions.find(
          (option) => option.label === cell.value
        );
        const bgColor = status ? status.color : "#ffffff";

        return (
          <span
            className="px-2 py-1 rounded-md font-semibold text-xs"
            style={{ backgroundColor: bgColor, color: "#fff" }}
          >
            {cell.value}
          </span>
        );
      },
    },
    {
      header: "Added By",
      accessorKey: "addedBy",
      id: "5",
    },
    {
      header: "Action",
      accessorKey: "action",
      id: "6",

      cell: () => (
        <div className="flex justify-center items-center space-x-2">
          <FaRegEye
            onClick={() => setIsViewModalOpen(true)}
            className="bg-[#064E79] p-1.5 text-3xl rounded-lg text-white cursor-pointer"
            title="View"
          />

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
  ];

  const statusOptions = [
    { label: "Open", color: "#28a745" },
    { label: "Final", color: "#dc3545" },
    { label: "Accepted", color: "#007bff" },
    { label: "Declined", color: "#ffc107" },
    { label: "Draft", color: "#6c757d" },
  ];
  return (
    <div className="p-4 space-y-4">
      {/* Filter Section */}
      <div className="px-4">
        <p className="font-bold text-xl ">Production List</p>
      </div>
      {/* Search and Download Section */}
      <div className="p-2 flex flex-col space-y-2 md:flex-row md:space-y-0 md:justify-between md:items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-4">
          <DownloadComponent />
          <div className="flex justify-end items-center">
            <p
              className="p-2 text-white bg-primary_button hover:bg-primary_button_hover rounded-md cursor-pointer "
              onClick={() => setIsAddModalOpen(true)}
            >
              + Add Production List
            </p>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="overflow-x-auto">
        <CustomTable data={data} columns={columns} />
      </div>
      <AddProduction
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditProduction
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <ViewProduction
        data={viewData}
        onClose={() => setIsViewModalOpen(false)}
        open={isViewModalOpen}
      />
      <DeleteModel
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        confirm={handleDelete}
        openModal={isDeleteModalOpen}
        title="Production"
      />
    </div>
  );
};

export default ProductionList;
