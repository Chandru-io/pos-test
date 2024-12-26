/* eslint-disable react/prop-types */
import { useState } from "react";
import SplitBill from "./SplitBill";
import FinalizeSales from "./FinalizeSales";
import { Modal } from "flowbite-react";
import OverAllBill from "./OverAllBill";

const BillPopup = ({ onCloseModal, isOpen }) => {
  const [activeTab, setActiveTab] = useState("SplitBill");

  function handleComponents() {
    switch (activeTab) {
      case "Split Bill":
        return <OverAllBill />;
      case "over all Bill":
        return <SplitBill onCloseModal={onCloseModal} />;
      case "Finalize Sales":
        return <FinalizeSales onCloseModal={onCloseModal} />;
      default:
        return null;
    }
  }
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="4xl" popup onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="flex flex-col items-center w-full">
          <div className="flex space-x-4 mb-4">
            <button
              className="p-2 bg-blue-500 text-white rounded-md"
              onClick={() => setActiveTab("over all Bill")}
            >
              Over all Bill
            </button>
            <button
              className="p-2 bg-blue-500 text-white rounded-md"
              onClick={() => setActiveTab("Split Bill")}
            >
              SplitBill
            </button>

            <button
              className="p-2 bg-blue-500 text-white rounded-md"
              onClick={() => setActiveTab("Finalize Sales")}
            >
              FinalizeSales
            </button>
          </div>

          <div className="w-full h-full">{handleComponents()}</div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default BillPopup;
