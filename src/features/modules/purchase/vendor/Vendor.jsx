/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import { Tabs } from "flowbite-react";
import CustomTable from "../../../ui/table/CustomTable";
import DuePaymentPopup from "./components/DuePayment";
import PayDuePopup from "./components/PayNow";

const Vendor = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);

  // Sample data
  const data = useMemo(
    () => [
      {
        id: 1,
        name: "Quick ingredient supplier",
        referenceno: "12321",
        phoneNumber: "6767676767",
        due: "$1250",
        purchasedate: "11-12-10",
        duedate: "12-11-24",
        payementmethod: "cash",
        status: "Due",
      },
      {
        id: 2,
        name: "Quick ingredient supplier",
        referenceno: "12321",
        phoneNumber: "6767676767",
        due: "$0",
        purchasedate: "11-12-10",
        duedate: "12-11-24",
        payementmethod: "cash",
        status: "Paid",
      },
    ],
    []
  );

  // Columns definition
  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Supplier", accessorKey: "name", id: "2" },
      { header: "Reference number", accessorKey: "referenceno", id: "3" },
      { header: "Mobile Number", accessorKey: "phoneNumber", id: "4" },
      { header: "Payable Due", accessorKey: "due", id: "5" },
      { header: "Purchase Date", accessorKey: "purchasedate", id: "6" },
      { header: "Due payment Date", accessorKey: "duedate", id: "7" },
      { header: "Payment Methods", accessorKey: "payementmethod", id: "8" },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ value }) => (
          <div className="flex items-center">
            <span
              className={`h-2 w-2 rounded-full mr-2 ${
                value === "Paid" ? "bg-green-500" : "bg-red-500"
              }`}
            />
            <span
              className={value === "Paid" ? "text-green-600" : "text-red-600"}
            >
              {value}
            </span>
          </div>
        ),
      },
      {
        header: "Action",
        accessorKey: "actions",
        cell: () => (
          <button
            onClick={() => setIsPayModalOpen(true)}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-md"
          >
            Pay Now
          </button>
        ),
      },
    ],
    []
  );

  return (
    <>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="p-4">
          <p className="font-bold text-xl">Vendor Due Payment</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex px-4 items-center space-x-2">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="bg-primary_button text-white px-4 py-2 rounded-lg hover:bg-primary_button_hover"
            >
              + Pay due Amount
            </button>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <DuePaymentPopup
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
      <PayDuePopup
        isOpen={isPayModalOpen}
        onClose={() => setIsPayModalOpen(false)}
      />
    </>
  );
};

export default Vendor;
