/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

const GenerateBarcodeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render the modal if `isOpen` is false

  return (
    <Modal show={isOpen} size="xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Generate Barcode</h2>
        </div>

        {/* Form Content */}
        <div className="mt-4">
          <p className="text-sm text-gray-600 mb-4">
            Customize barcode of your food menu list
          </p>
          <form className="grid gap-4 grid-cols-2">
            <div>
              <label>Barcode Width</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter width"
              />
            </div>
            <div>
              <label>Barcode Height</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter height"
              />
            </div>
            <div className="col-span-2">
              <button
                type="button"
                className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
              >
                Generate Now
              </button>
            </div>
          </form>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-y-auto max-h-[300px]">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-200 px-4 py-2">Select</th>
                <th className="border border-gray-200 px-4 py-2">Code</th>
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Category</th>
                <th className="border border-gray-200 px-4 py-2">Sale Price</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 10 }).map((_, index) => (
                <tr key={index}>
                  <td className="border border-gray-200 px-4 py-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-gray-200 px-4 py-2">112</td>
                  <td className="border border-gray-200 px-4 py-2">
                    Wonton Soup
                  </td>
                  <td className="border border-gray-200 px-4 py-2">American</td>
                  <td className="border border-gray-200 px-4 py-2">$0.00</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="mt-4 flex justify-center gap-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Generate Now
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default GenerateBarcodeModal;
