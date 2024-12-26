/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoMdArrowRoundBack } from "react-icons/io";
import TableDetails from "./TableDetails";
import { Modal } from "flowbite-react";
const tables = [
  { id: 1, name: "Ground Floor - Table1", capacity: 8, status: "Available" },
  {
    id: 2,
    name: "Ground Floor - Table2",
    capacity: 8,
    orderId: "123456789",
    persons: 6,
  },
  { id: 3, name: "Ground Floor - Table3", capacity: 8, status: "Available" },
  {
    id: 4,
    name: "Ground Floor - Table4",
    capacity: 8,
    orderId: "987654321",
    persons: 4,
  },
  { id: 3, name: "Ground Floor - Table3", capacity: 8, status: "Available" },
  {
    id: 4,
    name: "Ground Floor - Table4",
    capacity: 8,
    orderId: "987654321",
    persons: 4,
  },
  { id: 3, name: "Ground Floor - Table3", capacity: 8, status: "Available" },
  {
    id: 4,
    name: "Ground Floor - Table4",
    capacity: 8,
    orderId: "987654321",
    persons: 4,
  },

  { id: 3, name: "Ground Floor - Table3", capacity: 8, status: "Available" },
  {
    id: 4,
    name: "Ground Floor - Table4",
    capacity: 8,
    orderId: "987654321",
    persons: 4,
  },

  { id: 3, name: "Ground Floor - Table3", capacity: 8, status: "Available" },
  {
    id: 4,
    name: "Ground Floor - Table4",
    capacity: 8,
    orderId: "987654321",
    persons: 4,
  },

  { id: 3, name: "Ground Floor - Table3", capacity: 8, status: "Available" },
  {
    id: 4,
    name: "Ground Floor - Table4",
    capacity: 8,
    orderId: "987654321",
    persons: 4,
  },

  { id: 3, name: "Ground Floor - Table3", capacity: 8, status: "Available" },
  {
    id: 4,
    name: "Ground Floor - Table4",
    capacity: 8,
    orderId: "987654321",
    persons: 4,
  },
];

const DineInPosPopup = ({ onCloseModal, isOpen }) => {
  const [showTable, setShowTable] = useState(false);
  const [selectedTable, setSelectedTable] = useState(false);
  function selectedTableFN() {
    setSelectedTable(!selectedTable);
  }

  if (!isOpen) return null;
  return (
    <Modal show={isOpen} size="7xl" onClose={onCloseModal}>
      <Modal.Body>
        <div className="flex justify-between items-center w-full pb-4 border-b">
          <div className="flex items-center justify-start gap-x-1">
            {showTable && (
              <IoMdArrowRoundBack onClick={() => setShowTable(false)} />
            )}

            <h2 className="text-lg font-bold ">
              {!showTable ? "Dine In / Table" : "Ground Floor - Table 1"}
            </h2>
          </div>
          <div className="flex items-center justify-center relative">
            <select className="p-1 mr-9 focus:outline-blue-500 w-52 border rounded-sm">
              <option>Ground Floor</option>
              <option>First Floor</option>
            </select>
            <FaXmark
              className="absolute top-1 text-lg right-0 hover:text-red-500 cursor-pointer"
              onClick={onCloseModal}
            />
          </div>
        </div>
        {!showTable ? (
          <div className="flex gap-x-2">
            <div
              className={`flex gap-x-2 h-full overflow-hidden  ${
                selectedTable ? "w-3/4" : "w-full"
              }`}
            >
              <div
                className={`grid grid-cols-2  ${
                  selectedTable ? "md:grid-cols-3" : "md:grid-cols-4"
                } gap-4 overflow-y-scroll w-full h-[60vh]`}
              >
                {tables.map((table) => (
                  <div
                    key={table.id}
                    className="p-4 border rounded-md shadow-sm hover:shadow-lg transition"
                  >
                    <h3 className="text-lg font-medium text-[#777980]">
                      {table.name}
                    </h3>
                    <div className="flex items-center justify-between border-b pb-4">
                      <p className="text-sm text-gray-600">
                        Capacity: {table.capacity}
                      </p>
                      <p
                        className="text-sm text-[#008000] underline mt-2 inline-block cursor-pointer"
                        onClick={() => setShowTable(true)}
                      >
                        Table detail &rarr;
                      </p>
                    </div>

                    {table.status === "Available" ? (
                      <div
                        className="mt-2 text-green-500 font-semibold flex items-center justify-start gap-x-3 cursor-pointer"
                        onClick={onCloseModal}
                      >
                        <GoDotFill className="text-green-500" />
                        <span className="text-xl">Available</span>
                      </div>
                    ) : (
                      <div
                        className="p-4 flex justify-center items-center gap-x-5"
                        onClick={selectedTableFN}
                      >
                        <div className="text-sm text-gray-600 flex flex-col items-center">
                          <span className="text-black font-semibold text-lg">
                            Order ID
                          </span>
                          <span>{table.orderId}</span>
                        </div>
                        <div className="border h-11"></div>
                        <div className="text-sm text-gray-600 flex flex-col items-center">
                          <span className="text-black font-semibold text-lg">
                            Persons
                          </span>
                          <span>{table.persons}</span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {selectedTable && (
              <div className="w-1/4 overflow-hidden">
                <div className="w-full border rounded-lg shadow-lg p-4 bg-white">
                  <div className="flex justify-between items-center mb-4 border-b pb-4 ">
                    <h2 className="font-semibold text-lg">Order details</h2>
                    <span className="bg-green-500 text-white text-sm py-1 px-3 rounded-md">
                      12 Persons
                    </span>
                  </div>

                  <div className="mb-4">
                    <p>
                      <span className="font-semibold">Customer Name:</span>{" "}
                      James Kumar
                    </p>
                    <p>
                      <span className="font-semibold">Order id:</span> 12345689
                      | <span className="font-semibold">Waiter:</span> Kumaran
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex justify-between">
                      <p>All Mix Salad x 1</p>
                      <p>$4.90</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Summer Fruit Mix x 1</p>
                      <p>$4.90</p>
                    </div>
                  </div>

                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between">
                      <p>Total Items:</p>
                      <p>4</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Sub Total:</p>
                      <p>$19.36</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Discount:</p>
                      <p>0.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Total Discount:</p>
                      <p>0.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Tax:</p>
                      <p>0.00</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Charges:</p>
                      <p>0.00</p>
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <p className="font-semibold text-lg bg-green-100 text-green-700 py-2 rounded">
                      Total Payable: $19.36
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="bg-green-500 text-white py-2 rounded">
                      Transfer table
                    </button>
                    <button className="bg-green-500 text-white py-2 rounded">
                      Modify Order
                    </button>
                    <button className="bg-green-500 text-white py-2 rounded">
                      Cancel order
                    </button>
                  </div>
                </div>
                <p
                  className="text-green-500 underline cursor-pointer text-center mt-3"
                  onClick={selectedTableFN}
                >
                  Close
                </p>
              </div>
            )}
          </div>
        ) : (
          <TableDetails />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default DineInPosPopup;
