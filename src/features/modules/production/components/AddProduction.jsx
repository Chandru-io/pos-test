/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";

const AddProduction = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.perventDefault();
    const formdata = new FormData(e.target);
    const data = Object.entries(formdata.entries());
  };

  const [rows, setRows] = useState([
    { id: 1, name: "Beef Bulgogi (130)", quantity: 1, unit: "Kg" },
    { id: 2, name: "Marinated Roast Chicken (128)", quantity: 2, unit: "Kg" },
  ]);

  // Function to handle quantity change
  const handleQuantityChange = (id, value) => {
    const updatedRows = rows.map((row) =>
      row.id === id ? { ...row, quantity: value } : row
    );
    setRows(updatedRows);
  };

  // Function to delete a row
  const handleDelete = (id) => {
    const filteredRows = rows.filter((row) => row.id !== id);
    setRows(filteredRows);
  };
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="2xl" onClose={onClose} popup>
      <div className="bg-white w-full   p-6 rounded-lg  ">
        {/* Header */}
        <Modal.Header>
          <div className="flex flex-col justify-between items-start mb-4">
            <h2 className="text-xl font-semibold">Add Production</h2>
            <p className="text-gray-600 text-sm">
              Add details about production
            </p>
          </div>
        </Modal.Header>
        {/* Subheading */}

        <Modal.Body>
          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Reference Number and Date */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-1">
                  Reference Number
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Status and Pre Made Food Item */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-gray-700 mb-1">Status</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-1">
                  Pre Made Food Item
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  <option value="">Select</option>
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300 text-left">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">Sr No.</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Ingredients/Product
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Quantity Amount
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, index) => (
                    <tr key={row.id}>
                      <td className="border border-gray-300 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 flex items-center">
                        <input
                          type="number"
                          value={row.quantity}
                          onChange={(e) =>
                            handleQuantityChange(
                              row.id,
                              parseInt(e.target.value, 10) || 0
                            )
                          }
                          className="w-16 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <span className="ml-2">{row.unit}</span>
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => handleDelete(row.id)}
                          className="text-red-500 hover:text-red-700 text-lg font-bold bg-white"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default AddProduction;
