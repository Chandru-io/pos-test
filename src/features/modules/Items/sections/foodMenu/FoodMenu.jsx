import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit, MdOutlineFileUpload } from "react-icons/md";
import { HiOutlineFilter } from "react-icons/hi";
import { CiBarcode } from "react-icons/ci";
import toast from "react-hot-toast";
import AddFoodMenuPopup from "./components/AddFoodMenu";
import EditFoodMenuPopup from "./components/EditFoodMenu";
import DeleteFoodMenu from "./components/DeleteFoodMenu";
import UploadFoodReceipeModal from "./components/UploadFoodReceipe";
import GenerateBarcodeModal from "./components/BarCodeGenerator";
import UploadFoodMenuModal from "./components/UploadFoodMenu";
import FilterPopup from "./components/CategoryFilter";
import CustomTable from "../../../../ui/table/CustomTable";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import DeleteModel from "../../../../components/Delete";

const FoodMenu = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isBarCodeModalOpen, setIsBarCodeModalOpen] = useState(false);
  const [isUploadMenuModalOpen, setIsUploadMenuModalOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleDelete = () => {
    toast.success("deleted Successfully");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Tomato(123)",
        category: "Others",
        unit: "kg",
        quantity: "10kg",
      },
      {
        id: 1,
        name: "Tomato(123)",
        category: "Others",
        unit: "kg",
        quantity: "10kg",
      },
    ],
    []
  );

  const handleSubmit = () => {
    toast.success("ingredient Added successfully");
    setIsUploadModalOpen(false); // Close modal after submission
  };

  const handleMenuSubmit = () => {
    toast.success("ingredient Added successfully");
    setIsUploadMenuModalOpen(false); // Close modal after submission
  };

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Stocks Name(code)", accessorKey: "name", id: "2" },
      { header: "Category", accessorKey: "category", id: "3" },
      { header: "Unit", accessorKey: "unit", id: "4" },
      { header: "Low Quantity/Amount", accessorKey: "quantity", id: "5" },
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
          <p className="font-bold text-xl">Food Menu</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 px-4">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <button
              onClick={() => {
                setIsUploadMenuModalOpen(true);
              }}
              className="bg-primary_button hover:bg-primary_button_hover text-white px-4 py-2 rounded  flex items-center"
            >
              <MdOutlineFileUpload /> Upload Food Menu
            </button>
            <button
              onClick={() => {
                setIsUploadModalOpen(true);
              }}
              className="bg-primary_button hover:bg-primary_button_hover text-white px-4 py-2 rounded   flex items-center"
            >
              <MdOutlineFileUpload /> Upload Recipe
            </button>
            <button
              onClick={() => {
                setIsBarCodeModalOpen(true);
              }}
              className="bg-primary_button hover:bg-primary_button_hover text-white px-4 py-2 rounded  flex items-center"
            >
              <CiBarcode />
              Food Menu Barcode
            </button>
            <button
              onClick={() => {
                setIsPopupOpen(true);
              }}
              className="bg-primary_button hover:bg-primary_button_hover text-white px-4 py-2 rounded "
            >
              <HiOutlineFilter size={23} />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-self-end space-x-4  p-4">
          <DownloadComponent />
          <button
            onClick={() => {
              setIsAddModalOpen(true);
            }}
            className="bg-primary_button hover:bg-primary_button_hover text-white px-4 py-2 rounded  flex items-center"
          >
            + Add Food Menu
          </button>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddFoodMenuPopup
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditFoodMenuPopup
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <DeleteFoodMenu
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Food Menu"
      />
      <UploadFoodReceipeModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSubmit={handleSubmit}
      />
      <GenerateBarcodeModal
        isOpen={isBarCodeModalOpen}
        onClose={() => setIsBarCodeModalOpen(false)}
      />

      <UploadFoodMenuModal
        isOpen={isUploadMenuModalOpen}
        onClose={() => setIsUploadMenuModalOpen(false)}
        onSubmit={handleMenuSubmit}
      />
      <FilterPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default FoodMenu;
