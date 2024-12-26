import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit, MdOutlineFileUpload } from "react-icons/md";

import toast from "react-hot-toast";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import Tabs from "../../components/Tabs";
import CustomTable from "../../../../ui/table/CustomTable";

import AddIngredientList from "./components/AddList";
import EditIngredientList from "./components/EditList";
import UploadIngredientModal from "./components/UploadModal";
import DeleteModel from "../../../../components/Delete";

const IngredientsList = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Ingredient Successfully");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        code: "0211",
        name: "Tomato",
        category: "Others",
        purchaseunit: "kg",
        consumptionunit: "l",
        converstionrate: "100ml",
        purchaseprice: "1.00",
        costperunit: "1.00",
        lowquantity: "2.00",
        addedby: "admin",
      },
      {
        id: 2,
        code: "0211",
        name: "Tomato",
        category: "Others",
        purchaseunit: "kg",
        consumptionunit: "l",
        converstionrate: "100ml",
        purchaseprice: "1.00",
        costperunit: "1.00",
        lowquantity: "2.00",
        addedby: "admin",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Code", accessorKey: "code", id: "2" },
      { header: "Name", accessorKey: "name", id: "3" },
      { header: "Category", accessorKey: "category", id: "4" },
      { header: "Purchase Unit", accessorKey: "purchaseunit", id: "5" },
      { header: "Consumption Unit", accessorKey: "consumptionunit", id: "6" },
      { header: "Conversion Rate", accessorKey: "converstionrate", id: "7" },
      { header: "Purchase Price", accessorKey: "purchaseprice", id: "8" },
      { header: "Cost per Unit", accessorKey: "costperunit", id: "9" },
      { header: "Low Quantity", accessorKey: "lowquantity", id: "10" },
      { header: "Added By", accessorKey: "addedby", id: "11" },
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

  const handleSubmit = () => {
    toast.success("ingredient Added successfully");
    setIsUploadModalOpen(false); // Close modal after submission
  };

  return (
    <>
      <div className="p-6 bg-white rounded-lg  ">
        <div className="p-4">
          <p className="font-bold text-xl">Ingredient List</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 px-4">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />

            <button
              onClick={() => {
                setIsUploadModalOpen(true);
              }}
              className="bg-primary_button hover:bg-primary_button_hover flex justify-center  items-center text-white px-4 py-2 rounded "
            >
              <MdOutlineFileUpload /> Upload Ingredients
            </button>
            <button
              onClick={() => {
                setIsAddModalOpen(true);
              }}
              className="bg-secondary_button hover:bg-secondary_button_hover text-white px-4 py-2 rounded "
            >
              + Add Ingredients List
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddIngredientList
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditIngredientList
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <UploadIngredientModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSubmit={handleSubmit}
      />
      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Ingredient List"
      />
    </>
  );
};

export default IngredientsList;
