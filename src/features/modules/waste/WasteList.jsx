import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SearchComponent from "../../components/SearchComponent";
import DownloadComponent from "../../components/DownloadComponent";
import CustomTable from "../../ui/table/CustomTable";
import AddWaste from "./components/AddWaste";
import EditWaste from "./components/EditWaste";
import DeleteModel from "../../components/Delete";
import toast from "react-hot-toast";

const WasteList = () => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setEditIsModalOpen] = useState(false);
  const [initialState, setInitialState] = useState({
    referenceNumber: "000003",
    date: new Date().toISOString().split("T")[0],
    responsiblePerson: "",
    ingredient: [
      { value: "ingredient 1", label: "Ingredient 1" },
      { value: "ingredient 2", label: "Ingredient 2" },
      { value: "ingredient 3", label: "Ingredient 3" },
      { value: "ingredient 4", label: "Ingredient 4" },
    ],
    foodMenu: [
      { value: "Menu 1", label: "Menu 1" },
      { value: "Menu 2", label: "Menu 2" },
    ],
    foodMenuWasteQuantity: "",
    selectedCommodity: null,
    ingredients: [],
    totalLoss: 0,
    note: "",
  });

  const onClose = () => {
    setIsModalOpen(false);
    setInitialState(initialState);
    setEditIsModalOpen(false);
    setIsDeleteModalOpen(false);
  };
  const handleDelete = () => {
    toast.success("deleted Successfuly");
  };

  const data = useMemo(
    () => [
      {
        sno: 1,
        referance: "2736",
        date: "11-12-12",
        totalLoss: "5.00",
        ingrediantCount: "1",
        responsiblePerson: "admin",
        note: "",
        addedby: "admin",
      },
      {
        sno: 2,
        referance: "2736",
        date: "11-12-12",
        totalLoss: "5.00",
        ingrediantCount: "1",
        responsiblePerson: "admin",
        note: "",
        addedby: "admin",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr.No", accessorKey: "sno", id: "1" },
      { header: "Referance", accessorKey: "referance", id: "2" },
      { header: "Date", accessorKey: "date", id: "3" },
      { header: "Total Loss", accessorKey: "totalLoss", id: "4" },
      { header: "Ingredient Count", accessorKey: "ingrediantCount", id: "5" },
      {
        header: "Responsible Person",
        accessorKey: "responsiblePerson",
        id: "6",
      },
      { header: "Note", accessorKey: "note", id: "7" },
      { header: "Added By", accessorKey: "addedby", id: "8" },
      {
        header: "Action",
        accessorKey: "actions",
        cell: () => (
          <div className="flex justify-center items-center space-x-2">
            <MdEdit
              onClick={() => setEditIsModalOpen(true)}
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
    <div className="p-5 space-y-4">
      <div className=" bg-white rounded-lg p-2">
        <div className="px-4 py-3">
          <p className="text-xl font-bold ">Waste List </p>
        </div>

        <div className="flex justify-between items-center mb-4 px-4">
          <div className="flex items-center justify-start gap-10">
            <div className="flex items-center space-x-2">
              <SearchComponent />
            </div>
          </div>
          <div className="flex items-center gap-4 ">
            <div className="flex items-center space-x-4">
              <DownloadComponent />
            </div>
            <button
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover"
              onClick={() => setIsModalOpen(true)}
            >
              + Add Waste
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>

      <AddWaste
        isOpen={isModalOpen}
        onClose={onClose}
        initialState={initialState}
      />
      <EditWaste
        isOpen={isEditModalOpen}
        onClose={onClose}
        initialState={initialState}
      />
      <DeleteModel
        confirm={handleDelete}
        onClose={onClose}
        openModal={isDeleteModalOpen}
        title="Waste"
      />
    </div>
  );
};

export default WasteList;
