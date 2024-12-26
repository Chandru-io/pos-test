/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";
import { FiAlertCircle } from "react-icons/fi";

const ResetSales = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <Modal show={isOpen} size="xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className=" flex flex-col gap-2 items-center justify-between">
            <FiAlertCircle className=" text-5xl text-[#064E79]" />
            <p className=" text-xl text-gray-600">Are You Sure?</p>
            <div className=" flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-1 rounded-md bg-red-300 text-red-600"
              >
                Cancel
              </button>
              <button className="flex-1 px-4 py-1 rounded-md bg-green-400 text-white">
                OK
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResetSales;
