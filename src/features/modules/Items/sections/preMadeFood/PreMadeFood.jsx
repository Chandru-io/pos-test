import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import Tabs from "../../components/Tabs";
import CustomTable from "../../../../ui/table/CustomTable";
import AddPremadeFoodPopup from "./components/AddPremadeFood";
import EditPremadeFoodPopup from "./components/EditPremadeFood";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";

const PremadeFood = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Deleted Successfully ");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        code: "0211",
        name: "Tomato",
        category: "Others",
        purchaseprice: "1.00",
        quantity: "2.00",
        unit: "Kg",
        addedby: "admin",
      },
      {
        id: 2,
        code: "0211",
        name: "Tomato",
        category: "Others",
        purchaseprice: "1.00",
        quantity: "2.00",
        unit: "Kg",
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
      { header: "Purchase Price", accessorKey: "purchaseprice", id: "5" },
      { header: "Quantity", accessorKey: "quantity", id: "6" },
      { header: "Unit", accessorKey: "unit", id: "7" },
      { header: "Added By", accessorKey: "addedby", id: "8" },
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
          <p className="font-bold text-xl">Premade Food </p>
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
              + Add Pre Made Food
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddPremadeFoodPopup
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditPremadeFoodPopup
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Premade Food"
      />
    </>
  );
};

export default PremadeFood;
