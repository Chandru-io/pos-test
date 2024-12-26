/* eslint-disable react/prop-types */
import { useState } from "react";

function UploadCustomerPopup({ isOpen, onClose }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = () => {};

  if (!isOpen) return null;

  return (
    <>
      <div onClick={onClose} className="modal-wrapper_Dashboard"></div>
      <div className=" popup_cards_admin rounded-lg z-50 shadow-md bg-white p-4">
        <div className="bg-white rounded-lg w-96">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Upload Customer</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 8.586L15.95 2.636a1 1 0 011.414 1.414L11.414 10l5.95 5.95a1 1 0 01-1.414 1.414L10 11.414l-5.95 5.95a1 1 0 01-1.414-1.414L8.586 10 2.636 4.05a1 1 0 011.414-1.414L10 8.586z" />
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-4">
            Choose a document of uploading your Customer.
          </p>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center mb-4">
            <input
              type="file"
              accept="image/svg+xml, image/png, image/jpeg, image/gif"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
            />
            <label
              htmlFor="fileUpload"
              className="text-blue-600 hover:underline cursor-pointer text-sm"
            >
              Click to upload or drag and drop
            </label>
            <p className="text-xs text-gray-400 mt-1">
              SVG, PNG, JPG or GIF (max. 800×400px)
            </p>
          </div>
          <div className="flex justify-between items-center mt-4">
            <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium flex items-center">
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M4 4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5h6a1 1 0 110 2H7a1 1 0 110-2zm0 4h4a1 1 0 110 2H7a1 1 0 110-2z" />
              </svg>
              Download Sample
            </button>
            <div className="flex space-x-2">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UploadCustomerPopup;
