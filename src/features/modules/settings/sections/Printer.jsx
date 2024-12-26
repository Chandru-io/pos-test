import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import SearchComponent from "../../../components/SearchComponent";
import PrintPopup from "../components/PrintPopup";
import { useState } from "react";
import DownloadComponent from "../../../components/DownloadComponent";
import CustomTable from "../../../ui/table/CustomTable";
import DeleteModel from "../../../components/Delete";

const PRINTER_DATA = [
  {
    id: "PD1",
    title: "Printer 1",
    printType: "Thermal",
    character_per_Line: "40",
    printerIp: "192.168.1.101",
    print_port_address: "9100",
    print_port_number: "9100",
    share_name: "POS1",
  },
  {
    id: "PD2",
    title: "Printer 2",
    printType: "Inkjet",
    character_per_Line: "80",
    printerIp: "192.168.1.102",
    print_port_address: "9101",
    print_port_number: "9101",
    share_name: "POS2",
  },
  {
    id: "PD3",
    title: "Printer 3",
    printType: "Laser",
    character_per_Line: "120",
    printerIp: "192.168.1.103",
    print_port_address: "9102",
    print_port_number: "9102",
    share_name: "POS3",
  },
  {
    id: "PD4",
    title: "Printer 4",
    printType: "Dot Matrix",
    character_per_Line: "60",
    printerIp: "192.168.1.104",
    print_port_address: "9103",
    print_port_number: "9103",
    share_name: "POS4",
  },
  {
    id: "PD5",
    title: "Printer 5",
    printType: "Thermal",
    character_per_Line: "40",
    printerIp: "192.168.1.105",
    print_port_address: "9104",
    print_port_number: "9104",
    share_name: "POS5",
  },
];

const Printer = () => {
  const [isAddModalOpen, setIsAddModelOPen] = useState(false);
  const [isEditModalOpen, setIsEditModelOPen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  const handleConfirm = () => {
    setIsDeleteModelOpen(false);
  };

  const columns = [
    { header: "Sr No.", accessorKey: "id" },
    { header: "Title", accessorKey: "title" },
    { header: "Print Type", accessorKey: "printType" },
    { header: "Characters Per Line", accessorKey: "character_per_Line" },
    { header: "Printer IP", accessorKey: "printerIp" },
    { header: "Port Address", accessorKey: "print_port_address" },
    { header: "Port Number", accessorKey: "print_port_number" },
    { header: "Share Name", accessorKey: "share_name" },
    {
      header: "Action",
      cell: () => (
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-x-2 ">
            <button
              className="text-[#1AB69D] bg-[#E9FAF7] rounded-md "
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
    <div className="bg-white p-2 rounded-md">
      <div className="px-4">
        <p className="text-xl font-bold ">Printer Settings </p>
      </div>
      <div className="my-4 flex justify-between items-center">
        <div className="px-4">
          <SearchComponent />
        </div>
        <div className="flex items-center gap-x-10 px-5">
          <DownloadComponent />
          <div
            className="bg-primary_button hover:bg-primary_button_hover  flex justify-center items-center p-1.5 rounded-md gap-x-1 cursor-pointer"
            onClick={() => setIsAddModelOPen(true)}
          >
            <FaPlus className="text-white text-sm" />
            <span className="text-white text-sm">Add Printer</span>
          </div>
          <PrintPopup
            type="Create"
            isOpen={isAddModalOpen}
            onCloseModal={() => setIsAddModelOPen(false)}
          />
          <PrintPopup
            type="Edit"
            isOpen={isEditModalOpen}
            onCloseModal={() => setIsEditModelOPen(false)}
          />
          <DeleteModel
            confirm={handleConfirm}
            onClose={() => setIsDeleteModelOpen(false)}
            openModal={isDeleteModelOpen}
            title="Printer"
          />
        </div>
      </div>
      <CustomTable data={PRINTER_DATA} columns={columns} />
    </div>
  );
};

export default Printer;
