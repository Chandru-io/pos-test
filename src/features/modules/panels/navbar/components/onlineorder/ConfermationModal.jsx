/* eslint-disable react/prop-types */
const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md">
        <p>Are you sure?</p>
        <div className="flex justify-end space-x-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
