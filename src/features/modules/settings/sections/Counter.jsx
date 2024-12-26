import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import Counter from "../components/Counter";
import CustomTable from "../../../ui/table/CustomTable";
import { useState } from "react";
import DeleteModel from "../../../components/Delete";

const Counter_DATA = [
  {
    id: "USD",
    CounterName: "Dollar",
    InvoicePrinter: "HP LaserJet Pro",
    BillPrinter: "Epson TM-T88VI",
    Description: "Handles transactions in USD currency",
    AddedBy: "Admin",
  },
  {
    id: "INR",
    CounterName: "Rupee",
    InvoicePrinter: "Canon Pixma G3010",
    BillPrinter: "Star Micronics TSP143III",
    Description: "Handles transactions in INR currency",
    AddedBy: "John Doe",
  },
  {
    id: "EUR",
    CounterName: "Euro",
    InvoicePrinter: "Brother HL-L2350DW",
    BillPrinter: "Zebra ZD410",
    Description: "Handles transactions in Euro currency",
    AddedBy: "Jane Smith",
  },
  {
    id: "GBP",
    CounterName: "Pound",
    InvoicePrinter: "Samsung Xpress M2020W",
    BillPrinter: "Bixolon SRP-350III",
    Description: "Handles transactions in GBP currency",
    AddedBy: "System",
  },
];

const CounterSettings = () => {
  const [isAddModalOpen, setIsAddModelOPen] = useState(false);
  const [isEditModalOpen, setIsEditModelOPen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  const handleConfirm = () => {
    setIsDeleteModelOpen(false);
  };

  const columns = [
    { header: "Sr No.", accessorKey: "id", id: "1" },
    { header: "Counter Name", accessorKey: "CounterName", id: "2" },
    { header: "Invoice Printer", accessorKey: "InvoicePrinter", id: "3" },
    { header: "Bill Printer", accessorKey: "BillPrinter", id: "4" },
    { header: "Description", accessorKey: "Description", id: "5" },
    { header: "Added By", accessorKey: "AddedBy", id: "6" },
    {
      header: "Action",
      cell: () => (
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-x-2 ">
            <button
              className="text-[#1AB69D] bg-[#E9FAF7] rounded-md"
              onClick={() => setIsEditModelOPen(true)}
            >
              <RiEdit2Fill />
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
    <div className="bg-white p-2   rounded-md">
      <div className="px-4">
        <p className="text-xl font-bold ">Counter Settings </p>
      </div>
      <div className="my-4 px-4 flex justify-between items-center">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />

          <div
            className="bg-primary_button hover:bg-primary_button_hover flex justify-center items-center p-1.5 rounded-md gap-x-1 cursor-pointer"
            onClick={() => setIsAddModelOPen(true)}
          >
            <FaPlus className="text-white text-sm" />
            <span className="text-white text-sm">Add Counter</span>
          </div>

          <Counter
            type="Create"
            isOpen={isAddModalOpen}
            onCloseModal={() => setIsAddModelOPen(false)}
          />
          <Counter
            type="Edit"
            isOpen={isEditModalOpen}
            onCloseModal={() => setIsEditModelOPen(false)}
          />
          <DeleteModel
            confirm={handleConfirm}
            onClose={() => setIsDeleteModelOpen(false)}
            openModal={isDeleteModelOpen}
            title="Counter "
          />
        </div>
      </div>
      <CustomTable data={Counter_DATA} columns={columns} />
    </div>
  );
};

export default CounterSettings;
