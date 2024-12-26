import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Tabs from "../../components/Tabs";
import CustomTable from "../../../../ui/table/CustomTable";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import AddModifiersModal from "./components/AddModifier";
import EditModifiersModal from "./components/EditModifier";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";

const Modifiers = () => {
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
        name: "Tomato",
        price: "7.00",
        desc: "",
        ingredients: "l",
        total: "0.05",
        addedby: "admin",
      },
      {
        id: 2,
        name: "Tomato",
        price: "7.00",
        desc: "",
        ingredients: "l",
        total: "0.05",
        addedby: "admin",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id" },
      { header: "Name", accessorKey: "name" },
      { header: "Price", accessorKey: "price" },
      { header: "Description", accessorKey: "desc" },
      { header: "Total Ingredients", accessorKey: "ingredients" },
      { header: "Toal Cost", accessorKey: "total" },
      { header: "Added By", accessorKey: "addedby" },
      {
        header: "Action",

        cell: () => (
          <div className="flex justify-center items-center space-x-2">
            <MdEdit
              onClick={() => setIsEditModalOpen(true)}
              className="bg-[#064E79] p-1.5 text-3xl rounded-lg text-white cursor-pointer"
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
      <div className="p-6 bg-white rounded-lg  ">
        <div className="p-4">
          <p className="font-bold text-xl">Modifier</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 px-4">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />
            <button
              onClick={() => {
                setIsAddModalOpen(true);
              }}
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover"
            >
              + Add Modifier
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>

      <AddModifiersModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditModifiersModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Modifier"
      />
    </>
  );
};

export default Modifiers;
