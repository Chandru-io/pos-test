import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import AttendanceModal from "./components/AddAttendance";
import EditAttendanceModal from "./components/EditAttendace";
import DeleteModel from "../../components/Delete";
import toast from "react-hot-toast";

const AttendanceTable = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Deleted Successfully");
  };

  const data = useMemo(
    () => [
      {
        id: 1,
        reference: "2736",
        date: "11-12-12",
        name: "Admin User",
        intime: "0",
        outtime: "N/A",
        updatetime: "updatetime",
        timecount: "12.57 hour",
        note: "",
        addedby: "admin",
      },
      {
        id: 1,
        reference: "2736",
        date: "11-12-12",
        name: "Admin User",
        intime: "0:00",
        outtime: "N/A",
        updatetime: "updatetime",
        timecount: "12.57 hour",
        note: "",
        addedby: "admin",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Reference. No", accessorKey: "reference", id: "2" },
      { header: "name", accessorKey: "name", id: "3" },
      { header: "Date", accessorKey: "date", id: "4" },
      { header: "In Time", accessorKey: "intime", id: "5" },
      { header: "Out Time", accessorKey: "outtime", id: "6" },
      { header: "Update Time", accessorKey: "updatetime", id: "7" },
      { header: "Time Count", accessorKey: "timecount", id: "8" },
      { header: "Note", accessorKey: "note", id: "9" },
      { header: "Added by", accessorKey: "addedby", id: "10" },
      {
        header: "Action",
        accessorKey: "actions",
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
        <div className="px-4">
          <p className=" text-xl my-2 font-bold">Attendance List</p>
        </div>
        <div className="flex justify-between items-center mb-4 px-4">
          <div className="flex items-center space-x-2">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4">
            <DownloadComponent />
            <button
              onClick={() => {
                setIsAddModalOpen(true);
              }}
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover"
            >
              + Add Attendance
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AttendanceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditAttendanceModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Attendance"
      />
    </>
  );
};

export default AttendanceTable;
