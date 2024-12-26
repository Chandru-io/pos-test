/* eslint-disable react/prop-types */
import { FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import { GrPowerReset } from "react-icons/gr";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import CustomTable from "../../../ui/table/CustomTable";
import { useState } from "react";
import AddUser from "./AddUser";
import DeleteModel from "../../../components/Delete";
import toast from "react-hot-toast";
import ViewUser from "./ViewUser";
import CustomDateRangePicker from "../../../components/DaterangePicker";
import { format } from "date-fns";

const UserManagement = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showUserView, setShowUserView] = useState(false);
  // Define the tabs
  const users = [
    {
      image:
        "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f8239007-7d36-45ce-a0a1-fdf91052b10e/299f5e14-73c4-4a9b-99c9-e44adbc218cf.png",
      userId: "LOE01001",
      govDocument: "",
      name: "Suresh",
      phone: "+41 5185741594",
      email: "abcdefgh@gmail.com",
      date: "12/12/2005",
      role: "Chief,",
      enableLogin: true,
    },
  ];
  const columns = [
    { header: "ID", accessorKey: "userId", id: "1" },
    { header: "NAME", accessorKey: "name", id: "2" },
    { header: "PHONE", accessorKey: "phone", id: "3" },
    { header: "EMAIL", accessorKey: "email", id: "4" },

    { header: "DATE OF JOINING", accessorKey: "date", id: "6" },
    { header: "ROLE", accessorKey: "role", id: "7" },
    {
      header: "ACTION",
      accessorKey: "dueAmount",
      id: "8",
      cell: () => (
        <div className="flex items-center gap-3 justify-center">
          {" "}
          <button
            onClick={() => setShowUserView(true)}
            className="text-orange-400 bg-[#E9FAF7] p-1.5 rounded-md transition-colors"
          >
            <FaEye />
          </button>
          <button
            onClick={() => setIsEditPopupOpen(true)}
            className="text-[#1AB69D] bg-[#E9FAF7] p-1.5 rounded-md transition-colors"
          >
            <RiEdit2Fill />
          </button>
          <button
            onClick={() => setIsDeletePopupOpen(true)}
            className="text-[#EB3D4D] bg-[#FFECE4] p-1.5 rounded-md transition-colors"
          >
            <RiDeleteBin6Fill />
          </button>
        </div>
      ),
    },
  ];

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const initialDateRange = [
    {
      startDate: new Date(2024, 10, 29),
      endDate: new Date(2024, 10, 29),
      key: "selection",
    },
  ];
  const formatDateRange = (startDate, endDate) => {
    return `${format(startDate, "MMM dd yyyy")} - ${format(
      endDate,
      "MMM dd yyyy"
    )}`;
  };

  const [selectedDateRange, setSelectedDateRange] = useState(
    formatDateRange(initialDateRange[0].startDate, initialDateRange[0].endDate)
  );

  // Handle Date Range Change
  const handleDateChange = (selection) => {
    const { startDate, endDate } = selection;
    setSelectedDateRange(formatDateRange(startDate, endDate));
  };

  const viewUserClose = () => {
    setShowUserView(false);
  };

  const handleDelete = () => {
    toast.success("User Deleted Successfully");
  };

  const handleReset = () => {
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen   rounded-md  relative top-4">
      <div className="p-4 rounded-lg ">
        <div className="px-4">
          <h2 className="text-2xl font-bold mb-4">User Management</h2>
        </div>
        <div className="flex justify-between items-center mb-6 px-4">
          <div className="flex space-x-4 bg-gray-200 rounded-full">
            <Link
              to="/user-management/user"
              className="px-4 py-1.5 bg-primary_button hover:bg-primary_button_hover text-white rounded-full"
            >
              Users Report
            </Link>
            <Link
              to="/user-management/permission"
              className="px-4 py-1.5 bg-gray-200 rounded-full"
            >
              Roles And Permission
            </Link>
          </div>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="p-2 flex items-center gap-2 bg-primary_button hover:bg-primary_button_hover text-white rounded-md"
          >
            <FaPlus />
            <p>Add User</p>
          </button>
        </div>

        <div className="flex gap-6 items-center px-4 ">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300   px-2 rounded-lg w-1/3"
          />

          <div className="flex flex-col w-full max-w-52 lg:w-1/6 mb-5 ">
            <CustomDateRangePicker
              initialDateRange={initialDateRange}
              onDateChange={handleDateChange}
              label="Date"
            />
          </div>
          <div
            className="flex border p-1 rounded-lg bg-green-600 hover:bg-green-700 text-white cursor-pointer"
            onClick={handleReset}
          >
            <GrPowerReset size={25} />
          </div>
        </div>

        <CustomTable data={users} columns={columns} />
      </div>
      <AddUser
        isOpen={isEditPopupOpen}
        onClose={() => setIsEditPopupOpen(false)}
        type="Edit"
      />
      <AddUser
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        type="Add"
      />
      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeletePopupOpen(false)}
        openModal={isDeletePopupOpen}
        title="User"
      />
      <ViewUser data={users} onClose={viewUserClose} isOpen={showUserView} />
    </div>
  );
};

export default UserManagement;
