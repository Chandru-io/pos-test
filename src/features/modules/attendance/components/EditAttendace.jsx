/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

const EditAttendanceModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    referenceDate: "",
    date: "",
    name: "",
    inTime: "",
    outTime: "",
    note: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal show={isOpen} size="xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white rounded-lg  w-full relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-600 text-lg" />
                <h2 className="text-xl font-semibold">Update Attendance</h2>
              </div>
            </div>
            <p className="text-gray-500 mb-6">Update attendance details</p>

            {/* Form */}
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* Reference Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Reference Date
                  </label>
                  <input
                    type="date"
                    name="referenceDate"
                    value={formData.referenceDate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Name */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <select
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Name</option>
                  <option value="John Doe">John Doe</option>
                  <option value="Jane Smith">Jane Smith</option>
                  <option value="David Johnson">David Johnson</option>
                </select>
              </div>

              {/* In Time and Out Time */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                {/* In Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    In Time
                  </label>
                  <input
                    type="time"
                    name="inTime"
                    value={formData.inTime}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
                {/* Out Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Out Time
                  </label>
                  <input
                    type="time"
                    name="outTime"
                    value={formData.outTime}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Note */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Note
                </label>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditAttendanceModal;
