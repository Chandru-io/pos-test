/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";

const Invoice = ({ isOpen, onClose }) => {
  const handlePrint = () => {
    window.print();
  };
  if (!isOpen) return null;
  return (
    <Modal show={isOpen} size="4xl" onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <div className="flex justify-center items-center">
            {/* <img src={logo} alt="logo" className="h-28" /> */}
          </div>
          <p>Address: House No: 5, Road No: 4, Nikunja 2, Khilkhet, Dhaka</p>
          <p>Phone: +8801812391633</p>
          <p>Local Taxes: 32132587</p>
          <p>Invoice No: 12323444</p>
          <p>Order Type: Dine In</p>
        </div>

        <hr className="my-4" />

        <div className="flex justify-between">
          <div>
            <p>Date: 2024-05-23 10:34:44 AM</p>
            <p>Sales Associate: Admin User</p>
            <p>Customer: Donald PB 432226663</p>
            <p>Customer Address: Street 992 United States</p>
            <p>Waiter: Ds Waiter</p>
          </div>
          <div>
            <p>Date: 23/05/2024</p>
            <p>Time: 05:30 PM</p>
            <p>Invoice No: 12323444</p>
          </div>
        </div>

        <h2 className="text-xl font-bold mt-6 mb-4 text-center">INVOICE</h2>

        <table className="w-full border border-gray-300 mb-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Serial No.</th>
              <th className="border p-2">Item Description</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2 text-center">1</td>
              <td className="border p-2 text-center">All Mix Salad</td>
              <td className="border p-2 text-center">4</td>
              <td className="border p-2 text-center">$4.90</td>
            </tr>
            <tr>
              <td className="border p-2 text-center">2</td>
              <td className="border p-2 text-center">All Mix Salad</td>
              <td className="border p-2 text-center">4</td>
              <td className="border p-2 text-center">$4.90</td>
            </tr>
            <tr>
              <td className="border p-2 text-center">3</td>
              <td className="border p-2 text-center">All Mix Salad</td>
              <td className="border p-2 text-center">4</td>
              <td className="border p-2 text-center">$4.90</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between mb-4">
          <p>Total Items:</p>
          <p>12</p>
        </div>

        <div className="flex justify-between mb-4">
          <p>Sub Total:</p>
          <p>$4.90</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>VAT:</p>
          <p>$4.90</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>IGST:</p>
          <p>$4.90</p>
        </div>
        <div className="flex justify-between mb-4 font-bold">
          <p>Grand Total:</p>
          <p>$4.90</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Paid Amount:</p>
          <p>$4.90</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Given Amount:</p>
          <p>$4.90</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Change Amount:</p>
          <p>$4.90</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Total Payable:</p>
          <p>$4.90</p>
        </div>
        <div className="flex justify-between mb-4">
          <p>Payment Method:</p>
          <p>Cash</p>
        </div>
        <div className="flex justify-between mb-4 font-bold">
          <p>Cash</p>
          <p>$4.90</p>
        </div>

        <p className="text-center my-6">Thank you for visiting us!</p>

        <button
          onClick={handlePrint}
          className="bg-blue-500 text-white py-2 px-4 rounded my-4"
        >
          Print
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default Invoice;
