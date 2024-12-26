/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const DeliveryPartner = ({ type, onCloseModal, isOpen }) => {
  const [name, setName] = useState("");
  const [des, setDes] = useState("");
  const [file, setFile] = useState();

  function handleSubmit() {
    if (type === "create") {
      toast.success("Currency Added");
    } else {
      toast.success("Edited.");
    }
    onCloseModal();
  }

  return (
    <Modal show={isOpen} size="2xl" onClose={onCloseModal} popup>
      <Modal.Header />
      <Modal.Body>
        <div className="bg-white p-2 rounded-md md:w-[30vw]">
          <h2 className=" text-xl font-semibold text-black px-2">
            {type === "create"
              ? "Add Delivery Partner"
              : "Edit Delivery Partner"}
          </h2>
          <div className="grid grid-cols-1 gap-2 p-6">
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054]">Name</label>
              <input
                type="text"
                value={name}
                name="symbol"
                onChange={(e) => setName(e.target.value)}
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
                placeholder="Enter the Delevery Partner Name"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054]">
                Site Logo{" "}
                <span className="text-sm font-light">
                  (width :240 px , height 50 px)
                </span>
              </label>
              <input
                type="file"
                name="file"
                value={file}
                onChange={(e) => setFile(e.target.files[0])}
                className="p-2rounded-md border bg-white focus:outline-blue-500"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <label className="text-[#344054]">Conversion rate</label>
              <input
                type="text"
                name="des"
                value={des}
                onChange={(e) => setDes(e.target.value)}
                className="p-2 rounded-md border bg-white focus:outline-blue-500"
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

export default DeliveryPartner;
