import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import CustomTable from "../../../ui/table/CustomTable";
import Currency from "../components/CurrencyPopup";
import DeleteModel from "../../../components/Delete";
import { useState } from "react";
import toast from "react-hot-toast";

const CURRENCY_DATA = [
  {
    id: "USD",
    symbol: "$",
    rate: "1.00",
  },
  {
    id: "EUR",
    symbol: "€",
    rate: "0.94",
  },
  {
    id: "GBP",
    symbol: "£",
    rate: "0.82",
  },
  {
    id: "JPY",
    symbol: "¥",
    rate: "146.00",
  },
  {
    id: "AUD",
    symbol: "A$",
    rate: "1.54",
  },
  {
    id: "CAD",
    symbol: "C$",
    rate: "1.36",
  },
  {
    id: "INR",
    symbol: "₹",
    rate: "83.00",
  },
  {
    id: "CHF",
    symbol: "CHF",
    rate: "0.91",
  },
  {
    id: "CNY",
    symbol: "¥",
    rate: "7.40",
  },
  {
    id: "MXN",
    symbol: "$",
    rate: "18.00",
  },
];

const CurrencySettings = () => {
  const [addCurrencyOpen, setAddCurrencyOpen] = useState(false);
  const [editCurrencyOpen, setEditCurrencyOpen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  const handleConfirm = () => {
    toast.success("deleted successfully");
    setIsDeleteModelOpen(false);
  };

  const columns = [
    { header: "Sr No.", accessorKey: "id", id: "1" },
    { header: "Currency symbol", accessorKey: "symbol", id: "2" },
    { header: "Conversion Rate", accessorKey: "rate", id: "3" },
    {
      header: "Action",
      cell: ({ value }) => (
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-x-2 ">
            <button
              className="text-[#1AB69D] bg-[#E9FAF7] rounded-md"
              onClick={() => setEditCurrencyOpen(true)}
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
    <div className="bg-white p-2 rounded-md h-screen">
      <div className="px-4">
        <p className="text-xl font-bold ">Currency Settings </p>
      </div>
      <div className="my-4 px-4 flex justify-between items-center">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />
          <div
            className="bg-[#064E79] flex justify-center items-center p-1.5 rounded-md gap-x-1 cursor-pointer"
            onClick={() => setAddCurrencyOpen(true)}
          >
            <FaPlus className="text-white text-sm" />
            <span className="text-white text-sm">Add Currency</span>
          </div>
          <Currency
            type="Create"
            isOpen={addCurrencyOpen}
            onCloseModal={() => setAddCurrencyOpen(false)}
          />
          <Currency
            type="Edit"
            isOpen={editCurrencyOpen}
            onCloseModal={() => setEditCurrencyOpen(false)}
          />
          <DeleteModel
            confirm={handleConfirm}
            onClose={() => setIsDeleteModelOpen(false)}
            openModal={isDeleteModelOpen}
            title="Currency"
          />
        </div>
      </div>
      <CustomTable data={CURRENCY_DATA} columns={columns} />
    </div>
  );
};

export default CurrencySettings;
