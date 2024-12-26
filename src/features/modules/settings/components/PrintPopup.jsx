import { useState } from "react";

import { toast } from "react-hot-toast";
import { Modal } from "flowbite-react";

// eslint-disable-next-line react/prop-types
const PrintPopup = ({ type, onCloseModal, isOpen }) => {
  const [printData, setPrintData] = useState({
    title: "",
    print_type: "Browser Popup Print",
    character_per_Line: "",
    print_ip: "",
    share_name: "",
    print_port: "",
  });

  function handleOnChange(e) {
    const { name, value } = e.target;

    setPrintData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    if (type === "create") {
      toast.success("Print Added");
    } else {
      toast.success("Edited.");
    }
    onCloseModal();
  }
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="2xl" popup onClose={onCloseModal}>
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
        <div className="bg-white p-2 rounded-md md:w-[30vw]">
          <h2 className=" text-xl font-semibold text-black px-2">
            {type} Printer
          </h2>
          <div className="flex  gap-2 p-6">
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054]">
                Title( to add printer easily)
              </label>
              <input
                value={printData.title}
                name="title"
                onChange={handleOnChange}
                className="p-1 rounded-md border bg-white focus:outline-blue-500"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054]">Printer type</label>
              <select
                name="print_type"
                value={printData.print_type}
                onChange={handleOnChange}
                className="p-1 rounded-md border bg-white focus:outline-blue-500"
              >
                <option value={"Browser Popup Print"}>
                  Browser Popup Print
                </option>
                <option value={"Direct Print"}>Direct Print</option>
              </select>
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054]">Character per Line</label>
              <input
                value={printData.character_per_Line}
                name="character_per_Line"
                onChange={handleOnChange}
                className="p-1 rounded-md border bg-white focus:outline-blue-500"
              />
            </div>
            {printData.print_type === "Direct Print" && (
              <div className="flex flex-col gap-y-1">
                <label className="text-[#344054]">Printer IP Address</label>
                <input
                  value={printData.print_ip}
                  name="print_ip"
                  onChange={handleOnChange}
                  className="p-1 rounded-md border bg-white focus:outline-blue-500"
                />
              </div>
            )}

            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054]">Share Name</label>
              <input
                value={printData.share_name}
                name="share_name"
                onChange={handleOnChange}
                className="p-1 rounded-md border bg-white focus:outline-blue-500"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054]">Printer Port Address</label>
              <input
                value={printData.print_port}
                name="print_port"
                onChange={handleOnChange}
                className="p-1 rounded-md border bg-white focus:outline-blue-500"
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
              className="p-2 text-center border text-white w-full rounded-md bg-primary_button  hover:bg-primary_button_hover duration-200 cursor-pointer
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

export default PrintPopup;
