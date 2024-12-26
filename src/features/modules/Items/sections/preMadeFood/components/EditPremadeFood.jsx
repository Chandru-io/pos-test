/* eslint-disable react/prop-types */
import { useState } from "react";

const EditPremadeFoodPopup = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [category, setCategory] = useState("");
  const [ingredientConsumption, setIngredientConsumption] = useState([]);
  const [consumptionUnit, setConsumptionUnit] = useState("");
  const [costPerUnit, setCostPerUnit] = useState("");
  const [lowQuantity, setLowQuantity] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      code,
      category,
      ingredientConsumption,
      consumptionUnit,
      costPerUnit,
      lowQuantity,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 transition-opacity">
      <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6 popup_cards_admin">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Edit Pre-made Food
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Edit Mention about pre-made food available.
        </p>

        {/* Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Code
            </label>
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ingredient Consumption
            </label>
            <select
              value={ingredientConsumption}
              onChange={(e) => setIngredientConsumption(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Ingredient Consumption</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Consumption Unit
            </label>
            <select
              value={consumptionUnit}
              onChange={(e) => setConsumptionUnit(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Consumption Unit</option>
              <option value="unit1">Unit 1</option>
              <option value="unit2">Unit 2</option>
            </select>
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cost per Unit
            </label>
            <input
              type="number"
              value={costPerUnit}
              onChange={(e) => setCostPerUnit(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="form-group">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Low Quantity
            </label>
            <input
              type="number"
              value={lowQuantity}
              onChange={(e) => setLowQuantity(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Table Section */}
        <table className="mt-6 w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border border-gray-300">Sr No.</th>
              <th className="px-4 py-2 border border-gray-300">Ingredients</th>
              <th className="px-4 py-2 border border-gray-300">Consumption</th>
              <th className="px-4 py-2 border border-gray-300">Total</th>
              <th className="px-4 py-2 border border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody>{/* Dynamic Rows */}</tbody>
        </table>

        {/* Button Group */}
        <div className="flex justify-center  mt-6 space-x-4">
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={handleSubmit}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPremadeFoodPopup;
