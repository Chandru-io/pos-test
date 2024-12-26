import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import CustomTable from "../../../ui/table/CustomTable";
import DeliveryPartner from "../components/DeleveryPartner";
import DeleteModel from "../../../components/Delete";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import { useState } from "react";

const DELIVERY_DATA = [
  {
    sno: 1,
    name: "FastExpress",
    description:
      "Reliable and fast delivery service for small and large packages.",
    logoURL: "https://via.placeholder.com/100?text=FastExpress",
    added_by: "Admin",
  },
  {
    sno: 2,
    name: "SwiftCourier",
    description:
      "Affordable courier service specializing in same-day delivery.",
    logoURL: "https://via.placeholder.com/100?text=SwiftCourier",
    added_by: "User123",
  },
  {
    sno: 3,
    name: "SecureShip",
    description: "Top-notch security for valuable shipments worldwide.",
    logoURL: "https://via.placeholder.com/100?text=SecureShip",
    added_by: "Manager01",
  },
  {
    sno: 4,
    name: "GreenGo",
    description: "Eco-friendly delivery service using electric vehicles.",
    logoURL: "https://via.placeholder.com/100?text=GreenGo",
    added_by: "EcoAdmin",
  },
  {
    sno: 5,
    name: "UrbanDelivery",
    description: "Specialized in last-mile delivery solutions for urban areas.",
    logoURL: "https://via.placeholder.com/100?text=UrbanDelivery",
    added_by: "UrbanAdmin",
  },
];

const Delivery = () => {
  const [addDeleveryOpen, setAddDeleveryOpen] = useState(false);
  const [editDeleveryOpen, setEditDeleveryOpen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  const handleDeleteConfirm = () => {
    setIsDeleteModelOpen(false);
  };

  const columns = [
    { header: "Sr No.", accessorKey: "sno", id: "1" },
    { header: "Name", accessorKey: "name", id: "2" },
    { header: "Description", accessorKey: "description", id: "3" },
    {
      header: "Logo",
      accessorKey: "logoURL",
      id: "4",
      cell: ({ value }) => (
        <div className="flex justify-center items-center">
          <img
            src={value}
            alt="Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
        </div>
      ),
    },
    { header: "Added By", accessorKey: "added_by", id: "5" },
    {
      header: "Action",
      cell: ({ value }) => (
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-x-2">
            <button
              className="text-[#1AB69D] bg-[#E9FAF7] rounded-md p-2"
              onClick={() => setAddDeleveryOpen(true)}
            >
              <RiEdit2Fill />
              {value}
            </button>

            <button
              className="text-[#EB3D4D] bg-[#FFECE4] rounded-md p-2"
              onClick={() => setIsDeleteModelOpen(true)}
            >
              <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="px-4">
        <p className="text-xl font-bold ">Delivery Settings </p>
      </div>
      <div className="my-4 flex   justify-between items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />

          <div
            className="bg-primary_button hover:bg-primary_button_hover flex justify-center items-center p-1.5 rounded-md gap-x-1 cursor-pointer whitespace-nowrap  "
            onClick={() => setAddDeleveryOpen(true)}
          >
            <FaPlus className="text-white text-sm" />
            <span className="text-white text-sm">Add Delivery Partner</span>
          </div>
        </div>
      </div>
      <CustomTable data={DELIVERY_DATA} columns={columns} />

      <DeliveryPartner
        type="Edit"
        isOpen={addDeleveryOpen}
        onCloseModal={() => setAddDeleveryOpen(false)}
      />
      <DeliveryPartner
        type="Create"
        isOpen={editDeleveryOpen}
        onCloseModal={() => setEditDeleveryOpen(false)}
      />
      <DeleteModel
        confirm={handleDeleteConfirm}
        onClose={() => setIsDeleteModelOpen(false)}
        title="Delivery Partner"
        openModal={isDeleteModelOpen}
      />
    </>
  );
};

export default Delivery;
