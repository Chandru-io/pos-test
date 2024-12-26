/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SalesTabs from "../../components/Tabs";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import CustomTable from "../../../../ui/table/CustomTable";
import AddPromotionModal from "./components/AddPromotion";
import EditPromotionModal from "./components/EditPromotion";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";

const Promotion = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      title: "2736",
      type: "Dine In",
      startdate: "11-12-12",
      enddate: "11-12-12",
      discount: "5%",
      status: "enable",
      addedby: "admin",
    },
    {
      id: 2,
      title: "2737",
      type: "Takeaway",
      startdate: "12-12-12",
      enddate: "12-12-12",
      discount: "10%",
      status: "disable",
      addedby: "admin",
    },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleDelete = () => {
    toast.success("Deleted Successfully");
  };

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Title", accessorKey: "title", id: "2" },
      { header: "Type", accessorKey: "type", id: "3" },
      { header: "Start Date", accessorKey: "startdate", id: "4" },
      { header: "End Date", accessorKey: "enddate", id: "5" },
      { header: "Discount", accessorKey: "discount", id: "6" },
      {
        header: "Status",
        accessorKey: "status",
        id: "7",
        cell: ({ row }) => (
          <StatusDropdown
            id={row.original.id}
            status={row.original.status}
            onChange={handleStatusChange}
          />
        ),
      },
      { header: "Added by", accessorKey: "addedby", id: "8" },
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
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="p-4">
          <p className="font-bold text-xl">Promotions</p>
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
              + Add Promotion
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddPromotionModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditPromotionModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Promotion"
      />
    </>
  );
};

// Status Dropdown Component
const StatusDropdown = ({ id, status, onChange }) => {
  const handleStatusSelect = (e) => {
    onChange(id, e.target.value);
  };

  return (
    <select
      value={status}
      onChange={handleStatusSelect}
      className={`border rounded px-3 py-1.5 text-sm ${
        status === "enable" ? "text-green-600" : "text-red-600"
      }`}
    >
      <option value="enable" className="text-green-600">
        <span className="inline-flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>{" "}
          Enable
        </span>
      </option>
      <option value="disable" className="text-red-600">
        <span className="inline-flex items-center">
          <span className="w-2 h-2 bg-red-500 rounded-full mr-1"></span> Disable
        </span>
      </option>
    </select>
  );
};

export default Promotion;
