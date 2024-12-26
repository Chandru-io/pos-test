/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import DropdownWithAPI from "./DropDownWithAPI";
import Modal from "../../../POS/components/Modal";
import DeleteReservation from "./DeleteReservation";
import CustomTable from "../../../../../ui/table/CustomTable";
import TableReservation from "./TableReservation";
import { tr } from "date-fns/locale";
import DeleteModel from "../../../../../components/Delete";
import toast from "react-hot-toast";

const data = [
  {
    name: "John Doe",
    phone: "1234567890",
    table: "Table 1",
    guest: 4,
    date: "2024-11-19",
    time: "7:00 PM",
    type: "Dinner",
    note: "Birthday celebration",
    advanceAmount: 500,
    status: "Pending",
  },
  {
    name: "Jane Smith",
    phone: "0987654321",
    table: "Table 3",
    guest: 2,
    date: "2024-11-20",
    time: "8:00 PM",
    type: "Lunch",
    note: "Anniversary",
    advanceAmount: 1000,
    status: "Pending",
  },
];

const ReservationPopup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("table");
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Deleted Successfully");
    setIsDeleteModalOpen(false);
  };

  const columns = [
    {
      header: "Name",
      accessorKey: "name",
      id: "1",
    },
    {
      header: "Phone",
      id: "2",
      accessorKey: "phone",
    },
    {
      header: "Table",
      accessorKey: "table",
      id: "3",
    },
    {
      header: "No. of Guests",
      accessorKey: "guest",
      id: "4",
    },
    {
      header: "Date",
      accessorKey: "date",
      id: "5",
    },
    {
      header: "Time",
      accessorKey: "time",
      id: "6",
    },
    {
      header: "Type",
      accessorKey: "type",
      id: "7",
    },
    {
      header: "Note",
      accessorKey: "note",
      id: "8",
    },
    {
      header: "Advance Amount",
      accessorKey: "advanceAmount",
      id: "9",
    },
    {
      header: "Status",
      id: "10",

      cell: ({ row }) => (
        <DropdownWithAPI
          status={row.original.status}
          apiEndpoint={`https://example.com/api/update-status/${row.index}`}
          onDelete={() => console.log(`Delete row ${row.index}`)}
        />
      ),
    },
    {
      Header: "Actions",
      id: "11",
      cell: () => (
        <div>
          <MdDelete
            className="text-red-500 hover:cursor-pointer hover:text-red-600 duration-200"
            onClick={() => setIsDeleteModalOpen(true)}
          />
        </div>
      ),
    },
  ];
  return (
    <div className=" bg-white rounded-md h-[70vh] w-[61vw] ">
      <div className="relative  py-2">
        <div className="flex items-center justify-start gap-x-1">
          {activeTab === "TableReservation" && (
            <IoIosArrowBack
              onClick={() => setActiveTab("table")}
              className="cursor-pointer"
            />
          )}

          <h2 className="text-lg font-semibold pl-3">Table Reservation</h2>
        </div>
      </div>
      {activeTab === "table" ? (
        <>
          <div className="flex justify-between items-center px-4 mb-2">
            <div className="flex items-center justify-start gap-x-2">
              <div className="relative mt-2">
                <input
                  type="text"
                  className="mb-2 p-2 border rounded-md focus:outline-blue-500 w-96"
                  placeholder="Search Customer Name or Mobile Number"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IoIosSearch className="absolute top-3 right-3 h-5 w-5 text-[#777980] cursor-pointer" />
              </div>
            </div>
            <button
              className="p-2 cursor-pointer flex items-center gap-x-2 justify-center bg-green-500 hover:bg-green-600 duration-200 rounded-md"
              onClick={() => setActiveTab("TableReservation")}
            >
              <FaPlus className="text-white" />
              <span className="text-white">Add New Reservation</span>
            </button>
          </div>
          {/* Render Table  */}
          <div className=" ">
            <CustomTable data={data} columns={columns} />
            <DeleteModel
              confirm={handleDelete}
              onClose={() => setIsDeleteModalOpen(false)}
              openModal={isDeleteModalOpen}
              title="Reservation"
            />
          </div>
        </>
      ) : (
        <TableReservation />
      )}
    </div>
  );
};

export default ReservationPopup;
