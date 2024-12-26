import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import AddCategoryPopup from "./components/AddCategory";
import EditCategoryPopup from "./components/EditCategory";
import Tabs from "../../components/Tabs";
import CustomTable from "../../../../ui/table/CustomTable";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";

const IngredientCategory = () => {
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
      { header: "Added By", accessorKey: "addedby", id: "4" },
      {
        header: "Action",
        accessorKey: "actions",
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
          <p className="font-bold text-xl">Ingredient Category</p>
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
              + Add Category
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddCategoryPopup
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditCategoryPopup
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Ingrgedient Category"
      />
    </>
  );
};

export default IngredientCategory;
