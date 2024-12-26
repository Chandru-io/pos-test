/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

const AddAdjustStock = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <>
      <Modal show={isOpen} size="xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white rounded-lg  w-full">
            <div className="">
              <h2 className="text-lg font-semibold">Update Stock</h2>
            </div>
            <div className=" space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Stocks Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Stocks
                  </label>
                  <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="">Select</option>
                  </select>
                </div>

                {/* Current Stocks */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Current stocks
                  </label>
                  <input
                    type="text"
                    value="12pcs"
                    readOnly
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                {/* Date Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                {/* Responsible Person Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Responsible Person
                  </label>
                  <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="">Select</option>
                  </select>
                </div>

                {/* Quantity Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Quantity
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                      pcs
                    </span>
                  </div>
                </div>

                {/* Consumption Status Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Consumption Status
                  </label>
                  <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                    <option value="">Select</option>
                    <option value="Minus">Minus</option>
                    <option value="Plus">Plus</option>
                  </select>
                </div>
              </div>

              {/* Notes Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Note
                </label>
                <textarea
                  rows="3"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Add a note..."
                ></textarea>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-2 border-t p-4">
              <button className="px-4 py-2 bg-green-500 text-white text-sm font-medium rounded-md shadow-sm hover:bg-green-600">
                Update
              </button>
              <button className="px-4 py-2 bg-red-100 text-red-600 text-sm font-medium rounded-md shadow-sm hover:bg-red-200">
                Cancel
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddAdjustStock;
