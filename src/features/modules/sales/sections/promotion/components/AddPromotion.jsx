/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import { IoDuplicateOutline } from "react-icons/io5";

const AddPromotionModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    type: "Discount",
    title: "",
    startDate: null,
    endDate: null,
    status: "",
    foodMenu: "",
    discountPercent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header>
        {" "}
        <div className="flex justify-between items-center ">
          <div className="p-3 rounded-full bg-gray-100">
            <IoDuplicateOutline size={24} />
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        {/* Header */}

        {/* Title */}
        <h2 className="text-2xl font-semibold">Add Promotion</h2>
        <p className="text-gray-500 mb-6">Add the promotion details</p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Type */}
            <div>
              <label className="block text-sm mb-2">Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              >
                <option>Discount</option>
                <option>Free Item</option>
              </select>
            </div>

            {/* Title */}
            <div>
              <label className="block text-sm mb-2">Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
                placeholder="Enter title"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm mb-2">Start Date</label>
              <input
                type="date"
                name="startdate"
                className="border rounded-md p-2 w-full"
                placeholder=""
              />
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm mb-2">End Date</label>
              <input
                type="date"
                name="enddate"
                className="border rounded-md p-2 w-full"
                placeholder=""
              />
            </div>

            {formData.type === "Free Item" && (
              <>
                <div>
                  <label className="block text-sm mb-2">Buy</label>
                  <select name="type" className="border rounded-md p-2 w-full">
                    <option>buy</option>
                    <option>Item</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Buy Quantity</label>
                  <input
                    type="number"
                    name="title"
                    className="border rounded-md p-2 w-full"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Get</label>
                  <select name="type" className="border rounded-md p-2 w-full">
                    <option>get</option>
                    <option>Free Item</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Get Quabtity</label>
                  <input
                    type="number"
                    name="title"
                    className="border rounded-md p-2 w-full"
                    placeholder="Enter title"
                  />
                </div>
              </>
            )}

            {/* Status */}
            <div>
              <label className="block text-sm mb-2 w-full">Status</label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="border rounded-md p-2 w-full"
              >
                <option value="">Select status</option>
                <option value="Active">Enable</option>
                <option value="Inactive">Disable</option>
              </select>
            </div>

            {formData.type === "Discount" && (
              <>
                <div>
                  <label className="block text-sm mb-2">Food Menu</label>
                  <select
                    name="foodMenu"
                    value={formData.foodMenu}
                    onChange={handleChange}
                    className="border rounded-md p-2 w-full"
                  >
                    <option value="">Select menu</option>
                    <option value="Appetizers">Appetizers</option>
                    <option value="Main Course">Main Course</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Discount %</label>
                  <input
                    type="number"
                    name="discountPercent"
                    value={formData.discountPercent}
                    onChange={handleChange}
                    className="border rounded-md p-2 w-full"
                    placeholder="Enter discount %"
                  />
                </div>
              </>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="border border-gray-400 text-gray-700 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primary_button hover:bg-primary_button_hover text-white px-4 py-2 rounded-md"
            >
              Confirm
            </button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddPromotionModal;
