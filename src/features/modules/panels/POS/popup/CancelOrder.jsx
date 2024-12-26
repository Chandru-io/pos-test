/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";

const CancelOrderModal = ({ onCloseModal, setRunningOrders, isOpen }) => {
  const [selectedReason, setSelectedReason] = useState("");

  const reasons = [
    "Reason 1 - dummy text",
    "Reason 2 - dummy text",
    "Reason 3 - dummy text",
    "Reason 4 - dummy text",
  ];

  const handleReasonChange = (e) => {
    setSelectedReason(e.target.value);
  };

  const handleSubmit = () => {
    if (selectedReason) {
      setRunningOrders([]);
      onCloseModal();
    } else {
      alert("Please select a reason for cancellation");
    }
  };

  if (!isOpen) return null;
  return (
    <Modal show={isOpen} size="md" popup onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <h2 className="text-xl font-semibold text-blue-700">Cancel Order</h2>
        <hr className="my-4" />
        <p className="text-gray-700 ">Write your reason for cancellation</p>
        <div className="space-y-3">
          {reasons.map((reason, index) => (
            <label
              key={index}
              className="block border border-gray-300 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              <input
                type="radio"
                name="cancelReason"
                value={reason}
                checked={selectedReason === reason}
                onChange={handleReasonChange}
                className="mr-2"
              />
              {reason}
            </label>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={onCloseModal}
            className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CancelOrderModal;
