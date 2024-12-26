/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill, RiEdit2Fill } from "react-icons/ri";
import AreaFloor from "../components/AreaFloor";
import { useState } from "react";
import DownloadComponent from "../../../components/DownloadComponent";
import SearchComponent from "../../../components/SearchComponent";
import DeleteModel from "../../../components/Delete";
import CustomTable from "../../../ui/table/CustomTable";

const FLOOR_DATA = [
  {
    sno: 1,
    name: "Ground Floor",
    description:
      "Reliable and fast delivery service for small and large packages.",
  },
  {
    sno: 2,
    name: "First Floor",
    description: "Office spaces available for rent with high-speed internet.",
  },
  {
    sno: 3,
    name: "Second Floor",
    description: "Fitness center and wellness lounge with modern equipment.",
  },
  {
    sno: 4,
    name: "Third Floor",
    description:
      "Conference rooms and meeting spaces with video conferencing tools.",
  },
  {
    sno: 5,
    name: "Fourth Floor",
    description:
      "Co-working spaces with access to coffee bar and networking events.",
  },
  {
    sno: 6,
    name: "Fifth Floor",
    description:
      "Private apartments with stunning city views and premium amenities.",
  },
  {
    sno: 7,
    name: "Sixth Floor",
    description:
      "Rooftop garden and recreational area for relaxation and events.",
  },
  {
    sno: 8,
    name: "Seventh Floor",
    description:
      "Cafeteria serving a variety of healthy and gourmet food options.",
  },
  {
    sno: 9,
    name: "Eighth Floor",
    description:
      "Creative studio spaces for artists, photographers, and designers.",
  },
  {
    sno: 10,
    name: "Ninth Floor",
    description:
      "Tech labs with cutting-edge equipment for research and development.",
  },
];

const AreaTable = () => {
  const [addFloorOpen, setAddFloorOpen] = useState(false);
  const [editFloorOpen, setEditFloorOpen] = useState(false);
  const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);

  const handleDeleteConfirm = () => {
    setIsDeleteModelOpen(false);
  };

  const columns = [
    { header: "Sr No.", accessorKey: "sno" },
    { header: "Floor Name", accessorKey: "name" },
    { header: "Description", accessorKey: "description" },
    {
      header: "Action",
      cell: ({ value }) => (
        <div className="flex justify-center items-center py-2">
          <div className="flex items-center gap-x-2">
            <button
              className="text-[#1AB69D] bg-[#E9FAF7] rounded-md p-2"
              onClick={() => setEditFloorOpen(true)}
            >
              <RiEdit2Fill />
              {value}
              {console.log(value)}
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
        <p className="text-xl font-bold ">Area/Floor Settings </p>
      </div>
      <div className="my-4 flex justify-between items-center">
        <div className="px-4">
          <SearchComponent />
        </div>
        <div className="flex items-center gap-x-10 px-5">
          <DownloadComponent />

          <div
            className=" flex justify-center items-center p-2.5  rounded gap-x-1 cursor-pointer bg-primary_button hover:bg-primary_button_hover"
            onClick={() => setAddFloorOpen(true)}
          >
            <FaPlus className="text-white text-xs" />
            <span className="text-white text-xs">Add Area/Floor</span>
          </div>
        </div>
      </div>

      <CustomTable data={FLOOR_DATA} columns={columns} />

      <AreaFloor
        type="Create"
        isOpen={addFloorOpen}
        onCloseModal={() => setAddFloorOpen(false)}
      />
      <AreaFloor
        type="Edit"
        isOpen={editFloorOpen}
        onCloseModal={() => setEditFloorOpen(false)}
      />
      <DeleteModel
        confirm={handleDeleteConfirm}
        onClose={() => setIsDeleteModelOpen(false)}
        openModal={isDeleteModelOpen}
        title="Area/Floor"
      />
    </>
  );
};

export default AreaTable;
