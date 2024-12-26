/* eslint-disable react/prop-types */
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Modal } from "flowbite-react";

const AddCustomerModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>
        <div className="flex justify-between items-center  ">
          <h2 className="text-xl font-semibold">Add Customer</h2>
        </div>
      </Modal.Header>
      <Modal.Body>
        {/* Form */}
        <form className="grid grid-cols-2 gap-6 ">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Enter name"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-medium">Date of Birth</label>
            <input type="date" className="w-full border rounded p-2 mt-1" />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium">
              Phone <span className="text-red-500">*</span>
            </label>
            <PhoneInput
              className="w-full  rounded px-2 mt-1"
              value={phone}
              onChange={setPhone}
              defaultCountry="IN"
              placeholder="Enter phone number"
            />
          </div>

          {/* Date of Anniversary */}
          <div>
            <label className="block text-sm font-medium">
              Date of Anniversary
            </label>
            <input type="date" className="w-full border rounded p-2 mt-1" />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded p-2 mt-1"
              placeholder="Enter email"
            />
          </div>

          {/* Default Discount */}
          <div>
            <label className="block text-sm font-medium">
              Default Discount (Flat/Percentage)
            </label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="10 or 10%"
            />
          </div>

          {/* Same or Different State */}
          <div>
            <label className="block text-sm font-medium">
              Same or Different State <span className="text-red-500">*</span>
            </label>
            <select className="w-full border rounded p-2 mt-1">
              <option>Same State</option>
              <option>Different State</option>
            </select>
          </div>

          {/* GST Number */}
          <div>
            <label className="block text-sm font-medium">
              GST Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border rounded p-2 mt-1"
              placeholder="Enter GST number"
            />
          </div>

          {/* Delivery Address */}
          <div className="col-span-2">
            <label className="block text-sm font-medium">
              Delivery Address
            </label>

            <input
              type="text"
              className="w-full border rounded p-2 mt-2"
              placeholder="Enter new address"
            />
          </div>
        </form>

        {/* Buttons */}
        <div className="flex justify-end mt-8 gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border bg-white  rounded hover:bg-gray-300"
          >
            Cancel
          </button>
          <button className="px-6 py-2 bg-primary_button text-white rounded hover:bg-primary_button_hover">
            Add
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default AddCustomerModal;
