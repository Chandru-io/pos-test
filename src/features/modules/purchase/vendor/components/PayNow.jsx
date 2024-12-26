/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";

function PayDuePopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    amount: "",
    paymentType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {};

  if (!isOpen) return null;

  return (
    <>
      <Modal show={isOpen} size="xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white rounded-lg  p-4 ">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
            </div>

            <h2 className="text-lg font-semibold">Due payment</h2>

            {/* Form Fields with Labels */}
            <div className="space-y-4">
              {/* Date and Supplier Fields */}
              <div className="flex space-x-4">
                <div className="w-full">
                  <label className="block text-sm font-bold mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                  />
                </div>

                <div className="w-full">
                  <label className="block text-sm font-bold mb-1">Number</label>
                  <input
                    type="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                <div className=" w-full">
                  <label className="block text-sm font-bold mb-1">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                  />
                </div>

                <div className=" w-full">
                  <label className="block text-sm font-bold mb-1">
                    Payment Type
                  </label>
                  <select
                    name="paymentType"
                    value={formData.paymentType}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                  >
                    <option value="">Cash</option>
                    <option value="">Card</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 items-center mt-6">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-bold"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-bold"
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

export default PayDuePopup;
