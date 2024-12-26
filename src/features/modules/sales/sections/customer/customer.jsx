import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import SalesTabs from "../../components/Tabs";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";
import UploadCustomerPopup from "./components/UploadCustomer";
import EditCustomerModal from "./components/EditCustomer";
import CustomTable from "../../../../ui/table/CustomTable";
import AddCustomerModal from "./components/AddCustomer";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import { LuUpload } from "react-icons/lu";

const Customer = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDelete = () => {
    toast.success("Delete Successfully");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        personName: "John Doe",
        phoneNumber: "6767676767",
        email: "kfc@gmail.com",
        DOB: "11-12-12",
        discout: "20%",
        address: "Delhi",
        due: "0.00",
        loyalitypoint: "",
        addedby: "admin",
      },
      {
        id: 2,
        personName: "Jane Smith",
        phoneNumber: "9898989898",
        email: "freshfoods@gmail.com",
        DOB: "11-12-12",
        discout: "20%",
        address: "Delhi",
        due: "0.00",
        loyalitypoint: "",
        addedby: "admin",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Customer Name", accessorKey: "personName", id: "2" },
      { header: "Phone number", accessorKey: "phoneNumber", id: "3" },
      { header: "Email", accessorKey: "email", id: "4" },
      { header: "Date of Birth", accessorKey: "DOB", id: "5" },
      { header: "Default Discount", accessorKey: "discout", id: "6" },
      { header: "Address", accessorKey: "address", id: "7" },
      { header: "Current Due", accessorKey: "due", id: "8" },
      { header: "Loyality Points", accessorKey: "loyalitypoint", id: "9" },
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
        <div className="p-4">
          <p className="font-bold text-xl">Customer</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 px-4">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />
            <button
              onClick={() => setIsUploadModalOpen(true)}
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover flex items-center gap-1"
            >
              <LuUpload /> Upload Customer
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover"
            >
              + Add Customer
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <AddCustomerModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <EditCustomerModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
      />
      <UploadCustomerPopup
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
      />

      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Customer"
      />
    </>
  );
};

export default Customer;
