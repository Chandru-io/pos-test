import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Tabs from "../../components/Tabs";
import CustomTable from "../../../../ui/table/CustomTable";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import AddMenuCategoryPopup from "./components/AddCategoryMenu";
import EditMenuCategoryPopup from "./components/EditCategoryMenu";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";

const FoodMenuCategory = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Deleted Successfully");
  };
  const data = useMemo(
    () => [
      { id: 1, name: "BOX", desc: "BOX", addedby: "Admin" },
      { id: 2, name: "BOX", desc: "BOX", addedby: "Admin" },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Category", accessorKey: "name", id: "2" },
      { header: "Description", accessorKey: "desc", id: "3" },
      { header: "Add User", accessorKey: "addedby", id: "4" },
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
      <div className="p-6 bg-white rounded-lg ">
        <div className="p-4">
          <p className="font-bold text-xl">Food Menu Category</p>
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
              className="bg-primary_button hover:bg-primary_button_hover text-white px-4 py-2 rounded hover:bg-[#133447]"
            >
              + Add Menu Category
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddMenuCategoryPopup
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditMenuCategoryPopup
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Food Menu Category"
      />
    </>
  );
};

export default FoodMenuCategory;
