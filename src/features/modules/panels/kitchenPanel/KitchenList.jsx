/* eslint-disable react/prop-types */

import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router";
import DeleteModal from "../../../components/Delete";
import { useState } from "react";
import SearchComponent from "../../../components/SearchComponent";
import DownloadComponent from "../../../components/DownloadComponent";
import CustomTable from "../../../ui/table/CustomTable";
import AddKitchenModal from "./component/popup/AddKitchen";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const KITCHEN_DATA = [
  {
    id: "1",
    name: "Kitchen",
    outlet: "NEXA",
    categories:
      "Chienese, Fast Food , Mexican, Italian, , American, Japanese, Mexicana, Chinese",
    printer: "",
  },
];

const KitchenList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDelete = () => [toast.success("Deleted Successfully")];
  const { t } = useTranslation();
  const columns = [
    { header: "Panels.Sr No.", accessorKey: "id", id: "1" },
    { header: "Panels.Name", accessorKey: "name", id: "2" },
    { header: "Panels.Outlet", accessorKey: "outlet", id: "3" },
    {
      header: "Panels.Categories",
      accessorKey: "categories",
      id: "4",
      cell: ({ value }) => (
        <div className="flex justify-between items-center">
          <span>{value}</span>
          <Link
            className="bg-[#CAF6B7] px-4 py-1 rounded-2xl cursor-pointer text-black  text-center"
            to="kitchen-panel"
          >
            {t("Enter")}
          </Link>
        </div>
      ),
    },
    { header: "Panels.Printer", accessorKey: "printer", id: "5" },
    {
      header: "Panels.Action",
      id: "6",
      cell: () => (
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-x-2 ">
            <button
              className="text-[#EB3D4D] bg-[#FFECE4] rounded-md"
              onClick={() => setIsDeleteModalOpen(true)}
            >
              <RiDeleteBin6Fill />
            </button>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="bg-white p-5 rounded-md">
      <div className="px-4">
        <p className="font-bold text-xl">{t("Panels.Kitchen Panel")}</p>
      </div>
      <div className="my-4 flex justify-between items-center px-4">
        <SearchComponent />
        <div className="flex items-center gap-x-10">
          <DownloadComponent />

          <div
            className="bg-primary_button hover:bg-primary_button_hover flex justify-center items-center p-1.5 rounded-md gap-x-1 cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <FaPlus className="text-white text-sm" />
            <span className="text-white text-sm">
              {t("Panels.Add Kitchen")}
            </span>
          </div>
        </div>
      </div>
      <CustomTable data={KITCHEN_DATA} columns={columns} />
      <AddKitchenModal isOpen={isOpen} onCloseModal={() => setIsOpen(false)} />
      <DeleteModal
        confirm={handleDelete}
        onClose={() => setIsDeleteModalOpen(false)}
        openModal={isDeleteModalOpen}
        title={t("Panels.Kitchen.Kitchen")}
      />
    </div>
  );
};

export default KitchenList;
