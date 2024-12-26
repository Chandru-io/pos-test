/* eslint-disable react/prop-types */

import { Modal } from "flowbite-react";

const ViewProduction = ({ open, onClose, data }) => {
  if (!open) return null;

  return (
    <Modal show={open} size="2xl" onClose={onClose} popup>
      <div className="bg-white rounded-lg  p-6 shadow-lg ">
        {/* Header */}
        <Modal.Header>
          <div className="flex justify-between items-center   ">
            <h2 className="text-xl font-semibold">Production Details</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          {/* Content */}
          <div className="mt-4">
            <div className="mb-4 flex justify-between">
              <div>
                <p className="text-sm text-gray-600">Reference No. :</p>
                <p className="font-medium">{data.referenceNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status :</p>
                <p className="font-medium">{data.status}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date :</p>
                <p className="font-medium">{data.date}</p>
              </div>
            </div>

            {/* Table */}
            <table className="w-full border-collapse border border-gray-300 text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2">Sr No.</th>
                  <th className="border border-gray-300 px-4 py-2">
                    Ingredients/Product
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    Quantity Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.products.map((product, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.name}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {product.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            >
              Close
            </button>
            <button
              onClick={() => alert("Edit functionality here!")}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Edit
            </button>
          </div>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default ViewProduction;
