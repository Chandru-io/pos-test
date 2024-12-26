/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";

const KitchenOrderTicket = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };
  if (!isOpen) return null;
  return (
    <Modal show={isOpen} size="md" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <h2 className="text-2xl font-bold">KOT: Kitchen Panel</h2>
        <div className="my-4">
          <p>
            <span className="font-semibold">Order Type:</span> Dine In
          </p>
          <p>
            <span className="font-semibold">Order Number:</span> aWE241114-001
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <span className="font-semibold">Customer:</span> Mr Joe
          </p>
          <p>
            <span className="font-semibold">Waiter:</span> Robert A. Bush
          </p>
        </div>
        <p className="my-2">
          <span className="font-semibold">Date:</span> 2024/11/14 10:44:06
        </p>
        <div className="border-t border-b my-4 py-2">
          <div className="flex justify-between">
            <span># 1: Coca Cola 400ml</span>
            <span>1</span>
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white py-2 px-4 rounded my-4"
        >
          Print
        </button>
        <p className="text-xs text-gray-500">
          Please follow these steps before you print for the first time:
        </p>
        <ol className="text-xs text-left text-gray-500 list-decimal ml-5">
          <li>Disable Header and Footer in{" browser's "}print setting</li>
          <li>
            For Firefox: File &gt; Page Setup &gt; Margins &amp; Header/Footer
            &gt; Headers &amp; Footers &gt; Make all --blank--
          </li>
          <li>
            For Chrome: Menu &gt; Print &gt; Uncheck Header/Footer in More
            Options
          </li>
        </ol>
      </Modal.Body>
    </Modal>
  );
};

export default KitchenOrderTicket;
