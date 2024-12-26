/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const AreaFloor = ({ type, onCloseModal, isOpen }) => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");

  function handleSubmit() {
    if (type === "create") {
      toast.success("Table Added");
    } else {
      toast.success("Edited.");
    }
    onCloseModal();
  }

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="xl" popup onClose={onCloseModal}>
      <Modal.Header>
        <p className="p-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 3V21"
              stroke="#666666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </p>
      </Modal.Header>
      <Modal.Body>
        <div className="bg-white px-2 rounded-md md:w-[25vw]">
          <h2 className=" text-xl font-semibold text-black px-2">
            {type} Area/ Floor
          </h2>
          <div className="grid grid-cols-1 gap-2 p-6">
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">
                Area/ Floor name
              </label>
              <input
                type="text"
                value={name}
                name="symbol"
                onChange={(e) => setName(e.target.value)}
                className="p-1 rounded border bg-white focus:outline-blue-500"
                placeholder="Enter Area/Floor "
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
                className="p-1 rounded border bg-white focus:outline-blue-500"
                placeholder="Description "
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
              className="p-2 text-center border text-white w-full rounded-md bg-primary  hover:bg-primary_hover duration-200 cursor-pointer
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

export default AreaFloor;
