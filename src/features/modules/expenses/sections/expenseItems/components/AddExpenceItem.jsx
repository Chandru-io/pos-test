/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

function AddExpenseItemPopup({ isOpen, onClose }) {
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
              <div className="flex items-center space-x-2">
                <div className=" flex flex-col items-center">
                  <h2 className="text-lg font-semibold">Add Expense Item</h2>
                  <p className="text-sm text-gray-500">Add New Expense Item</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1  mb-6">
              <div>
                <label className="text-sm text-gray-700 font-semibold">
                  Expense Item Name
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
              </div>

              <div className="col-span-2">
                <label className="text-sm text-gray-700 font-semibold">
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
                className="text-white bg-primary_button hover:bg-primary_button_hover px-4 py-2 rounded-md text-sm font-medium"
              >
                Confirm
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddExpenseItemPopup;
