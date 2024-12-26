/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";

const FilterPopup = ({ isOpen, onClose }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <Modal show={isOpen} size="xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <h2 className="text-lg font-semibold mb-4 text-gray-800">Filter By</h2>
        <div className="space-y-3">
          {[
            { id: "chinese", label: "Chinese" },
            { id: "mexican", label: "Mexican" },
            { id: "desert", label: "Desert" },
            { id: "fastFood", label: "Fast Food" },
            { id: "bengali", label: "Bengali" },
          ].map(({ id, label }) => (
            <div key={id} className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={id}
                  checked={selectedCategories.includes(label)}
                  onChange={() => handleCategoryChange(label)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-gray-700">{label}</span>
              </label>
              <span className="text-gray-500 text-sm">12 items</span>
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-end space-x-4 gap-2">
          <button
            className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
            onClick={onClose}
          >
            Confirm
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default FilterPopup;
