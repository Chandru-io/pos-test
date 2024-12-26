/* eslint-disable react/prop-types */
// src/features/plan/components/delete.js
import { Modal } from "flowbite-react";
import { IoIosWarning } from "react-icons/io";

const Delete = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <Modal show={isOpen} size="xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="p-4">
            <p className=" mb-2">
              Are you sure you want to delete this{" "}
              <span className=" font-bold">Food menu Category</span> ?
            </p>

            <div className=" p-2 bg-red-100 border-l-4 border-red-500">
              <div className=" flex justify-start items-center gap-2">
                <IoIosWarning className=" text-red-600" />
                <p className=" text-red-600">Warning</p>
              </div>

              <p className=" text-xs text-red-600">
                {"  By deleting this you won't access this again"}
              </p>
            </div>

            <div className=" flex items-center gap-2 mt-2">
              <button className=" w-full px-4 py-1 rounded-lg bg-red-600 text-white">
                Delete
              </button>
              <button
                onClick={onClose}
                className=" w-full px-4 py-1 rounded-lg bg-yellow-600 text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Delete;
