/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

function NoticePopup({ isOpen, onClose }) {
  const handleConfirm = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <Modal show={isOpen} size="md" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white rounded-lg  p-6 w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </div>
                <h2 className="text-lg font-semibold">Notice</h2>
              </div>
            </div>

            <div className="bg-blue-50 text-gray-700 text-sm rounded-lg p-4 mb-6">
              You must enter the Quantity/Amount in the Unit showing just right
              after the Quantity/Amount field, otherwise Stock will not match.
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-medium"
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

export default NoticePopup;
