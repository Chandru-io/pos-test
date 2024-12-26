/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

const AddVarient = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Do not render the modal if `isOpen` is false

  return (
    <Modal show={isOpen} size="xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-lg font-semibold">Add Variation</h2>
        </div>

        {/* Content */}
        <div className="mt-4  ">
          <p className="text-sm text-gray-600 mb-4">
            Add variation in the food menu offered.
          </p>

          <form className="grid gap-4 grid-cols-1 md:grid-cols-2">
            {/* Variation Name and Code */}
            <div>
              <label>Variation Name</label>
              <input
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter name"
              />
            </div>
            <div>
              <label>Code</label>
              <input
                type="text"
                className="border p-2 w-full rounded"
                placeholder="Enter code"
              />
            </div>

            {/* Sale Prices */}
            <div>
              <label>Sale Price (Dine In)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label>Sale Price (Take Away)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter price"
              />
            </div>

            {/* Sale Price (Delivery) */}
            <div className="md:col-span-2">
              <label>Sale Price (Delivery)</label>
              <div className="grid gap-2">
                {[
                  "Tim Hortons",
                  "Uber Eats",
                  "Door Dash",
                  "Grub Hub",
                  "Pathao Food Rider",
                ].map((label, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 items-center gap-4"
                  >
                    <span>{label}</span>
                    <input
                      type="number"
                      className="border p-2 w-full rounded"
                      placeholder="Enter price"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Ingredient Consumption Dropdown */}
            <div className="md:col-span-2">
              <label>Ingredient Consumption</label>
              <select className="border p-2 w-full rounded">
                <option value="">Select</option>
                <option value="ingredient1">Ingredient 1</option>
                <option value="ingredient2">Ingredient 2</option>
              </select>
            </div>

            {/* Tax Rates */}
            <div>
              <label>CGST (%)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter %"
              />
            </div>
            <div>
              <label>SGST (%)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter %"
              />
            </div>
            <div>
              <label>IGST (%)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter %"
              />
            </div>
            <div>
              <label>VAT (%)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter %"
              />
            </div>
            <div>
              <label>Royalty Points</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter points"
              />
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Confirm
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddVarient;
