/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";

const Draftpopup = ({ onCloseModal, isOpen }) => {
  const [draftNumber, setDraftNumber] = useState("");
  function handleSubmit() {
    if (draftNumber === "") {
      toast.error("Enter Draft Number.");
      return null;
    }

    onCloseModal();
  }
  if (!isOpen) return null;
  return (
    <Modal show={isOpen} onClose={onCloseModal}>
      <Modal.Header>
        <h3 className=" text-xl font-semibold text-[#064E79] text-center p-4">
          Draft
        </h3>
      </Modal.Header>
      <Modal.Body>
        <div className="bg-white w-full   rounded-lg   relative ">
          <div className="px-14  py-3 flex flex-col gap-y-2 justify-start">
            <label className="text-xl font-semibold text-[#607171]">
              Draft Number
            </label>
            <input
              type="number"
              placeholder=""
              value={draftNumber}
              onChange={(e) => setDraftNumber(e.target.value)}
              className="rounded-md  p-2 border focus:outline-green-500"
            />
          </div>
          <div className="flex justify-end gap-x-2  p-4 ">
            <button
              onClick={handleSubmit}
              className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer"
            >
              Submit
            </button>
            <button
              onClick={onCloseModal}
              className="border  bg-white px-4 py-2 rounded-md cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Draftpopup;
