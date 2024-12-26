import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import CustomTable from "../../../ui/table/CustomTable";
import AddTable from "../components/AddTable";
import { useState } from "react";
import DeleteModel from "../../../components/Delete";

const TABLE_DATA = [
  {
    sno: 1,
    areaFloor: "Ground Floor",
    tableName: "Table A1",
    seatCapacity: 4,
    description:
      "Reliable and fast delivery service for small and large packages.",
  },
  {
    sno: 2,
    areaFloor: "First Floor",
    tableName: "Table B2",
    seatCapacity: 6,
    description: "Ideal for group seating with ample space.",
  },
  {
    sno: 3,
    areaFloor: "Second Floor",
    tableName: "Table C3",
    seatCapacity: 2,
    description: "Cozy setup for small meetings or personal use.",
  },
  {
    sno: 4,
    areaFloor: "Rooftop",
    tableName: "Table D4",
    seatCapacity: 8,
    description: "Perfect for scenic views and large gatherings.",
  },
  {
    sno: 5,
    areaFloor: "Basement",
    tableName: "Table E5",
    seatCapacity: 10,
    description: "Spacious table designed for conferences or team discussions.",
  },
];

const TableSettings = () => {
  const [isAddModalOpen, setIsAddModelOPen] = useState(false);
  const [isEditModalOpen, setIsEditModelOpen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  const handleConfirm = () => {
    setIsDeleteModelOpen(false);
  };

  const columns = [
    { header: "Sr No.", accessorKey: "sno", id: "1" },
    { header: "Floor Name", accessorKey: "areaFloor", id: "2" },
    { header: "Table name", accessorKey: "tableName", id: "3" },
    { header: "Seat capacity", accessorKey: "seatCapacity", id: "4" },
    { header: "Description", accessorKey: "description", id: "5" },
    {
      header: "Action",
      cell: () => (
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-x-2">
            <button
              className="text-[#1AB69D] bg-[#E9FAF7] rounded-md p-2"
              onClick={() => setIsEditModelOpen(true)}
            >
              <RiEdit2Fill />
            </button>

            <button
              className="text-[#EB3D4D] bg-[#FFECE4] rounded-md p-2"
              onClick={() => setIsDeleteModelOpen(true)}
            >
              <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div>
      <div className="px-4">
        <p className="text-xl font-bold ">Table Settings </p>
      </div>
      <div className="my-4 flex justify-between items-center">
        <div className="px-4">
          <SearchComponent />
        </div>
        <div className="flex items-center gap-x-10">
          <div className="px-4 flex items-center gap-x-10">
            <DownloadComponent />

            <div
              className="bg-primary_button hover:bg-primary_button_hover flex justify-center items-center p-1.5  rounded-md gap-x-1 cursor-pointer"
              onClick={() => setIsAddModelOPen(true)}
            >
              <FaPlus className="text-white text-sm" />
              <span className="text-white text-sm">Add Table</span>
            </div>
          </div>
          <AddTable
            type="create"
            onCloseModal={() => setIsAddModelOPen(false)}
            isOpen={isAddModalOpen}
          />
          <AddTable
            type="Edit"
            onCloseModal={() => setIsEditModelOpen(false)}
            isOpen={isEditModalOpen}
          />
          <DeleteModel
            confirm={handleConfirm}
            onClose={() => setIsDeleteModelOpen(false)}
            openModal={isDeleteModelOpen}
            title="Table"
          />
        </div>
      </div>

      <CustomTable data={TABLE_DATA} columns={columns} />
    </div>
  );
};

export default TableSettings;
