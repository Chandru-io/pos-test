/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";

const AddSupplierModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    contactPerson: "",
    phone: "",
    email: "",
    companyAddress: "",
    billingAddress: "",
    description: "",
    image: null,
    sameAsCompany: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal show={isOpen} size="4xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white w-[790px] p-6 rounded-lg ">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="p-2 rounded-md border border-gray-400">
                <IoPersonOutline />
              </div>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-xl font-semibold">Add Supplier</h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              {/* Name and Contact Person */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-bold mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Contact Person</label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    placeholder="Enter contact person"
                  />
                </div>
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-bold mb-1">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border p-2 rounded w-full"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              {/* Company and Billing Address */}
              <div className="mb-4">
                <label className="block font-bold mb-1">Company Address</label>
                <textarea
                  type="text"
                  name="companyAddress"
                  value={formData.companyAddress}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="Enter company address"
                />
              </div>

              <div className="mb-4">
                <label className="block font-bold mb-1">Billing Address</label>
                <textarea
                  type="text"
                  name="billingAddress"
                  value={formData.billingAddress}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  placeholder="Enter billing address"
                />
              </div>

              {/* Same as Company Address Checkbox */}
              <div className="flex items-center mb-4">
                <input
                  type="checkbox"
                  name="sameAsCompany"
                  checked={formData.sameAsCompany}
                  onChange={handleChange}
                  className="mr-2"
                />
                <label>Same as company address</label>
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block font-bold mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border p-2 rounded w-full"
                  rows="4"
                  placeholder="Enter description"
                ></textarea>
              </div>

              {/* File Upload */}
              <div className="mb-4">
                <label className="block font-bold mb-1">Upload Image</label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="border p-2 rounded w-full"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded"
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

export default AddSupplierModal;
