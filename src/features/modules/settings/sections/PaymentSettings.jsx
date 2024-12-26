import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import { FaPlus } from "react-icons/fa";
import CustomTable from "../../../ui/table/CustomTable";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import AddPayment from "../components/AddPayment";
import DeleteModel from "../../../components/Delete";
import { useState } from "react";

const INITIAL_TABLE_DATA = [
  {
    id: "1",
    sno: 1,
    name: "Credit Card",
    addUser: "Admin",
    description: "Card",
  },
  {
    id: "2",
    sno: 2,
    name: "PayPal",
    addUser: "User1",
    description: "Payment",
  },
];

function PaymentSettings() {
  const [addPaymentOpen, setAddPaymentOpen] = useState(false);
  const [editPaymentOpen, setEditPaymentOpen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  const handleConfirm = () => {
    setIsDeleteModelOpen(false);
  };

  const columns = [
    { header: "S.NO", accessorKey: "sno", id: "1" },
    { header: "Payment Method", accessorKey: "name", id: "2" },
    { header: "Added By", accessorKey: "addUser", id: "3" },
    { header: "Description", accessorKey: "description", id: "4" },
    {
      header: "Action",
      cell: ({ value }) => (
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-x-2 ">
            <button
              className="text-[#1AB69D] bg-[#E9FAF7] rounded-md"
              onClick={() => setEditPaymentOpen(true)}
            >
              <RiEdit2Fill />
              {value}
            </button>

            <button
              className="text-[#EB3D4D] bg-[#FFECE4] rounded-md"
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
    <div>
      <div className="px-4">
        <p className="text-xl font-bold ">Payment Settings </p>
      </div>
      <div className="my-4  flex  justify-between items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />

          <div
            className="bg-primary_button hover:bg-primary_button_hover flex justify-center items-center p-1.5 rounded-md gap-x-1 cursor-pointer whitespace-nowrap  "
            onClick={() => setAddPaymentOpen(true)}
          >
            <FaPlus className="text-white text-sm" />
            <span className="text-white text-sm">Add Delivery Partner</span>
          </div>
        </div>
      </div>
      <CustomTable columns={columns} data={INITIAL_TABLE_DATA} />

      <AddPayment
        isOpen={addPaymentOpen}
        onCloseModal={() => setAddPaymentOpen(false)}
        type="Create"
      />
      <AddPayment
        isOpen={editPaymentOpen}
        onCloseModal={() => setEditPaymentOpen(false)}
        type="Edit"
      />
      <DeleteModel
        confirm={handleConfirm}
        onClose={() => setIsDeleteModelOpen(false)}
        openModal={isDeleteModelOpen}
        title="Payment Method"
      />
    </div>
  );
}

export default PaymentSettings;
