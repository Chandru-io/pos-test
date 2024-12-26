import { useMemo, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router";
import SalesTabs from "../../components/Tabs";
import SearchComponent from "../../../../components/SearchComponent";
import DownloadComponent from "../../../../components/DownloadComponent";
import CustomTable from "../../../../ui/table/CustomTable";
import ResetSales from "./components/ResetSales";
import DeleteModel from "../../../../components/Delete";
import toast from "react-hot-toast";

const Sales = () => {
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    toast.success("Deleted Successfully");
  };
  const data = useMemo(
    () => [
      {
        id: 1,
        salesno: "2736",
        ordertype: "Dine In",
        date: "11-12-12",
        customertype: "admin",
        name: "Delhi",
        totalpayable: "0.00",
        due: "",
        paymentmethod: "cash",
        addedby: "admin",
      },
      {
        id: 1,
        salesno: "2736",
        ordertype: "Dine In",
        date: "11-12-12",
        customertype: "admin",
        name: "Delhi",
        totalpayable: "0.00",
        due: "",
        paymentmethod: "cash",
        addedby: "admin",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      { header: "Sr. No", accessorKey: "id", id: "1" },
      { header: "Sale. No", accessorKey: "salesno", id: "2" },
      { header: "Order Type", accessorKey: "ordertype", id: "3" },
      { header: "Date", accessorKey: "date", id: "4" },
      { header: "Customer Type", accessorKey: "customertype", id: "5" },
      { header: "Name", accessorKey: "name", id: "6" },
      { header: "Total Payable", accessorKey: "totalpayable", id: "7" },
      { header: "Due", accessorKey: "due", id: "8" },
      { header: "Payment Method", accessorKey: "paymentmethod", id: "9" },
      { header: "Added by", accessorKey: "addedby", id: "10" },
      {
        header: "Action",
        accessorKey: "actions",
        Cell: () => (
          <div className="flex justify-center items-center space-x-2">
            <Link to="/admin/pos/panel/main">
              <MdEdit
                className="bg-orange-500 p-1.5 text-3xl rounded-lg text-white cursor-pointer"
                title="Edit"
              />
            </Link>
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
          <p className="font-bold text-xl">Sales</p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex px-4 items-center space-x-2">
            <SearchComponent />
          </div>
          <div className="flex items-center space-x-4 px-4">
            <DownloadComponent />
            <button
              onClick={() => setIsResetModalOpen(true)}
              className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover flex items-center gap-1"
            >
              Reset Daily Sales
            </button>
            <Link to="/admin/pos/panel/main">
              <button className="bg-primary_button text-white px-4 py-2 rounded hover:bg-primary_button_hover">
                + Add Sales
              </button>
            </Link>
          </div>
        </div>
        <CustomTable columns={columns} data={data} />
      </div>
      <ResetSales
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
      />
      <DeleteModel
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title="Sales"
      />
    </>
  );
};

export default Sales;
