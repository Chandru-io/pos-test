/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

const AddIngredientList = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  };

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="3xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Add Ingredient</h2>
            <p className="text-sm text-gray-500">Add the new ingredient</p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input
                type="text"
                name="Name"
                placeholder="What is your ingredient"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Code</label>
              <input
                type="text"
                name="Code"
                placeholder="eg1232"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Category</label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                name="category"
              >
                <option value="1">Select</option>
                <option value="2">Select</option>
                <option value="3">Select</option>
                <option value="4">Select</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-700">Purchase Unit</label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                name="purchase unit"
              >
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-700">Consumption Unit</label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                name="cunsumption unit "
              >
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-700">Conversion Rate</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                name="conversion rate "
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Purchase Price</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                name="purchase price"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Cost per Unit</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                name="cost p[er unit "
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Low Quantity</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
                name="low quantity"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium"
            >
              Save
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddIngredientList;
