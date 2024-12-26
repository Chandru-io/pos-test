/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const AddTable = ({ type, onCloseModal, isOpen }) => {
  const [des, setDes] = useState("");
  const [tableName, setTableName] = useState("");
  const [capacity, setCapacity] = useState(0);

  function handleSubmit() {
    if (type === "create") {
      toast.success("Table Added");
    } else {
      toast.success("Edited.");
    }
    onCloseModal();
  }

  return (
    <Modal show={isOpen} size="2xl" popup onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="bg-white px-2 rounded-md   md:w-[30vw]">
          <h2 className=" text-xl font-semibold text-black px-2">
            {type} Table
          </h2>
          <div className="grid grid-cols-1 gap-2 p-2">
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">Table name</label>
              <select
                value={tableName}
                onChange={(e) => setTableName(e.target.value)}
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
              >
                <option value={""} disabled>
                  Select Floor
                </option>
                <option value={"First Floor"}>First Floor</option>
                <option value={"Second Floor"}>Second Floor</option>
                <option value={"Third Floor"}>Third Floor</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">Table name</label>
              <input
                type="text"
                value={tableName}
                name="table name"
                placeholder="Enter The Table Name "
                onChange={(e) => setTableName(e.target.value)}
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">
                Seat capacity
              </label>
              <input
                type="text"
                value={capacity}
                name="symbol"
                onChange={(e) => setCapacity(e.target.value)}
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">
                Description
              </label>
              <textarea
                rows={3}
                name="des"
                value={des}
                onChange={(e) => setDes(e.target.value)}
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
                placeholder="Description"
              />
            </div>
          </div>
          <div className="flex items-center justify-between gap-x-4 px-4">
            <button
              className="p-2 text-center border bg-white w-full rounded-md border-gray-200 hover:bg-gray-100 duration-200 cursor-pointer
        "
              onClick={onCloseModal}
            >
              Back
            </button>
            <button
              className="p-2 text-center border text-white w-full rounded-md bg-primary_button hover:bg-primary_button_hover duration-200 cursor-pointer
        "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddTable;
