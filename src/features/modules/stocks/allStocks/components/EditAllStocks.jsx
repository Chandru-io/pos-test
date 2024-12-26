/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";

const EditAllStockModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    stockName: "",
    code: "",
    category: "",
    unit: "",
    conversionRate: "",
    purchasePrice: "",
    costPerUnit: "",
    stockInHand: "Yes",
    quantity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal show={isOpen} size="3xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white rounded-lg  w-full relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-blue-700">
                Edit Stocks
              </h2>
            </div>

            {/* Form */}
            <form>
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Stock Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Stocks Name
                  </label>
                  <input
                    type="text"
                    name="stockName"
                    value={formData.stockName}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Code */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Code
                  </label>
                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Groceries">Groceries</option>
                  </select>
                </div>
                {/* Unit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Unit
                  </label>
                  <select
                    name="unit"
                    value={formData.unit}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Unit</option>
                    <option value="Kg">Kg</option>
                    <option value="Litre">Litre</option>
                    <option value="Piece">Piece</option>
                  </select>
                </div>
                {/* Conversion Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Conversion Rate
                  </label>
                  <input
                    type="number"
                    name="conversionRate"
                    value={formData.conversionRate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Purchase Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Purchase Price
                  </label>
                  <input
                    type="number"
                    name="purchasePrice"
                    value={formData.purchasePrice}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Cost Per Unit */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cost Per Unit
                  </label>
                  <input
                    type="number"
                    name="costPerUnit"
                    value={formData.costPerUnit}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Low Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Low Quantity
                  </label>
                  <input
                    type="number"
                    name="lowQuantity"
                    value={formData.lowQuantity}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Stock In Hand */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Do you have Stock in your hand
                  </label>
                  <select
                    name="stockInHand"
                    value={formData.stockInHand}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  >
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                {/* Quantity */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-red-500 text-red-500 rounded hover:bg-red-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditAllStockModal;
