/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";
import { CiDollar } from "react-icons/ci";

function EditExpensePopup({ isOpen, onClose }) {
  const handleConfirm = () => {
    // Handle confirm logic here
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center">
                <CiDollar className=" text-xl" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">Edit Expense</h2>
                <p className="text-sm text-gray-500">
                  Add description about expenses
                </p>
              </div>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="bg-white rounded-lg w-full">
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="text-sm text-gray-700">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">Amount</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  placeholder="Enter amount"
                />
              </div>
              <div>
                <label className="text-sm text-gray-700">
                  Responsible Person
                </label>
                <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
                  <option>Select person</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div>
                <label className="text-sm text-gray-700">Category</label>
                <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
                  <option>Select category</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-sm text-gray-700">Payment Method</label>
                <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
                  <option>Select payment method</option>
                  {/* Add more options here */}
                </select>
              </div>
              <div className="col-span-2">
                <label className="text-sm text-gray-700">Note</label>
                <textarea
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  rows="3"
                  placeholder="Add a note"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-between">
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
                Confirm
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditExpensePopup;
