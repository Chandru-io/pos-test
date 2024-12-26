/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import NoticePopup from "./NotificationPopup";
import { Modal } from "flowbite-react";

const EditPurchase = ({ isOpen, onClose }) => {
  const [noticePopup, setNoticePopup] = useState(false);

  if (!isOpen) return null;
  return (
    <>
      <Modal show={isOpen} size="4xl" popup onClose={onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="bg-white p-8 w-full">
            {/* Header Section */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Edit Purchase</h2>
              <div className=" flex gap-2 items-center">
                <button
                  onClick={() => {
                    setNoticePopup(true);
                  }}
                  className="bg-[#064E79] text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Read Me First
                </button>
              </div>
            </div>
            <p className="text-gray-500 mb-8">
              Add description about purchase made
            </p>

            {/* Input Fields */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <input
                type="text"
                placeholder="Reference Number"
                className="border border-gray-300 rounded p-2"
              />
              <input
                type="date"
                placeholder="Date"
                className="border border-gray-300 rounded p-2"
              />
              <select className="border border-gray-300 rounded p-2">
                <option>Responsible Person</option>
                {/* Add more options as needed */}
              </select>

              <div className="flex items-center border rounded ">
                <input type="text" placeholder="Supplier" className="  p-2" />
                <button className="bg-blue-500 text-white px-2  rounded hover:bg-blue-600 ">
                  +
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <select className="border border-gray-300 rounded p-2 flex-1">
                  <option>Ingredients</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-100 text-left text-gray-600 uppercase text-xs">
                    <th className="py-2 px-4">Sr No.</th>
                    <th className="py-2 px-4">Ingredients</th>
                    <th className="py-2 px-4">Unit Price</th>
                    <th className="py-2 px-4">Quantity</th>
                    <th className="py-2 px-4">Total</th>
                    <th className="py-2 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 px-4">1</td>
                    <td className="py-2 px-4">Olive Oil</td>
                    <td className="py-2 px-4">$1200</td>
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">$14440</td>
                    <td className="py-2 px-4 text-red-500 cursor-pointer">
                      <FaTrashAlt
                        className="bg-red-500 p-1.5 text-3xl rounded-lg text-white  cursor-pointer"
                        title="Delete"
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 px-4">2</td>
                    <td className="py-2 px-4">Salt</td>
                    <td className="py-2 px-4">$1200</td>
                    <td className="py-2 px-4">12</td>
                    <td className="py-2 px-4">$14440</td>
                    <td className="py-2 px-4 text-red-500 cursor-pointer">
                      <FaTrashAlt
                        className="bg-red-500 p-1.5 text-3xl rounded-lg text-white  cursor-pointer"
                        title="Delete"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary Section */}
            <div className="flex flex-col justify-between items-end mb-6">
              <div>
                <p className="text-gray-700 font-semibold">Grand Total</p>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full mt-1"
                  value="$14440"
                  readOnly
                />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Paid</p>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full mt-1"
                />
              </div>
              <div>
                <p className="text-gray-700 font-semibold">Due</p>
                <input
                  type="text"
                  className="border border-gray-300 rounded p-2 w-full mt-1"
                />
              </div>
              <div className="">
                <p className="text-gray-700 font-semibold">Payment Method</p>
                <select className="border border-gray-300 rounded p-2 w-full mt-1">
                  <option>Select</option>
                  {/* Add more options as needed */}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
              <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded hover:bg-gray-300">
                Cancel
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                Update
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <NoticePopup isOpen={noticePopup} onClose={() => setNoticePopup(false)} />
    </>
  );
};

export default EditPurchase;
