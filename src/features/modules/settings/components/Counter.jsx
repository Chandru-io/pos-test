/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Counter = ({ type, onCloseModal, isOpen }) => {
  const [counter, SetCounter] = useState({
    counter_name: "",
    invoice_printer: "",
    bill_printer: "",
    description: "",
  });

  function handleOnChange(e) {
    const { name, value } = e.target;

    SetCounter((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    if (type === "create") {
      toast.success("Counter Added");
    } else {
      toast.success("Edited.");
    }
    onCloseModal();
  }

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="2xl" popup onClose={onCloseModal}>
      <Modal.Header>
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
      </Modal.Header>
      <Modal.Body>
        <div className="bg-white p-2 rounded-md md:w-[30vw]">
          <h2 className="mt-4 text-xl font-semibold text-black px-2">
            {type}Add Counter
          </h2>
          <div className="grid grid-cols-1 gap-2 p-6">
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">
                Counter Name
              </label>
              <input
                type="text"
                value={counter.counter_name}
                name="counter_name"
                onChange={handleOnChange}
                placeholder="Enter the counter name  "
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
              />
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">
                Invoice Printer
              </label>
              <select
                value={counter.invoice_printer}
                name="invoice_printer"
                onChange={handleOnChange}
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
              >
                <option value={""}>Select Printer</option>
                <option value={"Printer 1"}>Printer 1</option>
                <option value={"Printer 2"}>Printer 2</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">
                Bill Printer
              </label>
              <select
                value={counter.bill_printer}
                name="bill_printer"
                onChange={handleOnChange}
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
              >
                <option value={""}>Select Printer</option>
                <option value={"Printer 1"}>Printer 1</option>
                <option value={"Printer 2"}>Printer 2</option>
              </select>
            </div>

            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054] font-semibold">
                Description
              </label>
              <textarea
                name="description"
                placeholder="D escription"
                value={counter.description}
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
              className="p-2 text-center border text-white w-full rounded-md  bg-primary_button hover:bg-primary_button_hover duration-200 cursor-pointer
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

export default Counter;
