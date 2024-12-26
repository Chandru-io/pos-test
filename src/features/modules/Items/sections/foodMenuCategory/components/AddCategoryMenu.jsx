/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

function AddMenuCategoryPopup({ isOpen, onClose }) {
  const handleConfirm = () => {
    // Handle confirm logic here
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal show={isOpen} size="xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white rounded-lg w-full">
            <div className="flex justify-between items-center mb-4">
              {/* Left Section: Title and Description */}
              <div className="flex flex-col items-center text-center flex-1">
                <h2 className="text-lg font-semibold">Add Food Menu</h2>
                <p className="text-sm text-gray-500">
                  Add new category of your food menu
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1  mb-6">
              <div>
                <label className="text-sm text-gray-700 font-bold">
                  Name of Category
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
              </div>

              <div className="col-span-2">
                <label className="text-sm text-gray-700 font-bold">
                  Description
                </label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  rows="3"
                  placeholder="Add a note"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium"
              >
                Save
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddMenuCategoryPopup;
