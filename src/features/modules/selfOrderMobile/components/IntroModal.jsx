/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";

const IntroModal = ({ isOpen, onCloseModal, handleConfirm, name }) => {
  return (
    <Modal
      show={isOpen}
      size="md"
      position="center"
      onClose={onCloseModal}
      popup
    >
      <Modal.Header>Welcome!!</Modal.Header>
      <Modal.Body>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Enter Your name "
            className="p-2 rounded-md"
            onChange={(e) => name(e.target.value)}
            required
          />
          <button onClick={handleConfirm} className="text-white rounded-md p-2">
            Done
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default IntroModal;
