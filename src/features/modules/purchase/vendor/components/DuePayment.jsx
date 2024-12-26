/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";

function DuePaymentPopup({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    date: "",
    supplier: "",
    purchase: "",
    amount: "",
    paymentType: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle submit logic here
  };

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
                  <label className="block text-sm font-bold mb-1">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-bold mb-1">
                    Supplier
                  </label>
                  <select
                    name="supplier"
                    value={formData.supplier}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                  >
                    <option value="">Select Supplier</option>
                    {/* Add options here */}
                  </select>
                </div>
              </div>

              {/* Purchase Field */}
              <div>
                <label className="block text-sm font-bold mb-1">
                  Select the purchase you want to pay
                </label>
                <select
                  name="purchase"
                  value={formData.purchase}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                >
                  <option value="">Select the purchase you want to pay</option>
                  {/* Add options here */}
                </select>
              </div>

              {/* Amount and Payment Type Fields */}
              <div className="flex space-x-4">
                <div className="w-full">
                  <label className="block text-sm font-bold mb-1">Amount</label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleChange}
                    placeholder="Enter Amount"
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-bold mb-1">
                    Payment Type
                  </label>
                  <select
                    name="paymentType"
                    value={formData.paymentType}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm"
                  >
                    <option value="">Select Payment Type</option>
                    {/* Add options here */}
                  </select>
                </div>
              </div>

              {/* Notes Field */}
              <div>
                <label className="block text-sm font-bold mb-1">Notes</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Enter Notes"
                  className="border border-gray-300 rounded-lg px-3 py-2 w-full text-sm h-20 resize-none"
                ></textarea>
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

export default DuePaymentPopup;
