/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import DeleteModel from "../../../components/Delete";
import toast from "react-hot-toast";
import CustomTable from "../../../ui/table/CustomTable";
import UserDetailsModal from "./UserDetailsModal";

const RolePermission = () => {
  const [showModal, setShowModal] = useState(false);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const rolesData = [
    {
      roleName: "cashier",
      description: "abcdefg@gmail.com",
      totalUsers: [
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
      ],
    },
    {
      roleName: "waiter",
      description: "abcdefg@gmail.com",
      totalUsers: [
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
        {
          name: "hari",
          userId: "12345",
          mailId: "hari@gmail.com",
          mobile: 545782827748,
          assignedOn: "12/12/24",
        },
      ],
    },
  ];

  const columns = [
    { header: "ROLE NAME", accessorKey: "roleName", id: "1" },
    { header: "Description", accessorKey: "description", id: "2" },
    {
      header: "TOTAL USER",
      accessorKey: "totalUsers",
      id: "3",
      cell: ({
        row: {
          original: { totalUsers },
        },
      }) => {
        const user = totalUsers.length;
        return (
          <div
            className="text-blue-500 cursor-pointer"
            onClick={() => handleUserClick(totalUsers)}
          >
            <p>{user}</p>
          </div>
        );
      },
    },
    {
      header: "ACTION",
      cell: ({ value }) => (
        <div className="flex gap-1 justify-center">
          <Link to="create">
            <button className="text-[#1AB69D] bg-[#E9FAF7] p-1.5 rounded-md transition-colors">
              <RiEdit2Fill />
              {value}
            </button>
          </Link>
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

  const handleUserClick = (totalUsers) => {
    setSelectedRole(totalUsers);
    console.log(totalUsers);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedRole(null);
  };

  const handleDelete = () => {
    toast.success("Deleted Successfully");
  };

  return (
    <div className="p-4   rounded-md relative top-4">
      <div className="px-4">
        <h2 className="text-2xl font-bold mb-4">Roles And Permissions </h2>
      </div>
      <div className="flex justify-between items-center mb-6 px-4">
        <div className="flex space-x-4 bg-gray-200 rounded-full ">
          <Link
            to="/user-management/user"
            className="px-4 py-1.5 bg-gray-200 rounded-full"
          >
            Users Report
          </Link>
          <Link
            to="/user-management/permission"
            className="px-4 py-1.5 bg-primary_button hover:bg-primary_button_hover text-white rounded-full"
          >
            Roles And Permission
          </Link>
        </div>
        <Link
          to="create"
          className="p-2  text-white rounded-md bg-primary_button hover:bg-primary_button_hover flex items-center"
        >
          <FaPlus /> Add Roles
        </Link>
      </div>
      <CustomTable columns={columns} data={rolesData} />

      <UserDetailsModal
        role={selectedRole}
        onClose={closeModal}
        isOpen={showModal}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeletePopupOpen(false)}
        openModal={isDeletePopupOpen}
        title="Role"
      />
    </div>
  );
};

export default RolePermission;
