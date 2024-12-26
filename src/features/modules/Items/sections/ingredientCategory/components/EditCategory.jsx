/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

function EditCategoryPopup({ isOpen, onClose }) {
  const handleConfirm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal show={isOpen} size="lg" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white rounded-lg w-full">
            <div className="flex justify-between items-center mb-4">
              {/* Left Section: Title and Description */}
              <div className="flex flex-col items-center text-center flex-1">
                <h2 className="text-lg font-semibold">Add Category</h2>
                <p className="text-sm text-gray-500">
                  Add new category of your ingredients
                </p>
              </div>
            </div>
            <form onSubmit={handleConfirm}>
              <div className="grid grid-cols-1  mb-6">
                <div>
                  <label className="text-sm text-gray-700 font-bold">
                    Name of Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  />
                </div>

                <div className="col-span-2">
                  <label className="text-sm text-gray-700 font-bold">
                    Description
                  </label>
                  <textarea
                    className="w-full border border-gray-300 rounded-md p-2 mt-1"
                    rows="3"
                    name="discription"
                    placeholder="Add a note"
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <button
                  onClick={onClose}
                  className="text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditCategoryPopup;
