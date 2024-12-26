import { useState } from "react";

import { GoDotFill } from "react-icons/go";
import TimePicker from "./TimePicker";
import { Link } from "react-router";
import ReservationForm from "./ReservationForm";
const TableReservation = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

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
  ];

  const openPopup = (table) => {
    setSelectedTable(table);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedTable(null);
  };

  return (
    <div className="w-[61vw]">
      <div className="bg-white rounded-lg  p-6">
        <div className="flex gap-4 mb-4">
          <input
            type="date"
            className="border rounded-md px-3 py-2 w-1/3 focus:outline-none"
          />
          <TimePicker />
          <select className="border rounded-md px-3 py-2 w-1/3 focus:outline-none">
            <option>Ground Floor</option>
            <option>First Floor</option>
          </select>
        </div>

        {/* Table List */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
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
                <Link
                  to="#"
                  className="text-sm text-[#008000] underline mt-2 inline-block"
                >
                  Table detail &rarr;
                </Link>
              </div>

              {/* Status Check */}
              {table.status === "Available" ? (
                <div
                  className="mt-2 text-green-500 font-semibold flex items-center justify-start gap-x-3 cursor-pointer"
                  onClick={() => openPopup(table)}
                >
                  <GoDotFill className="text-green-500" />
                  <span className="text-xl">Available</span>
                </div>
              ) : (
                <div className="p-4 flex justify-center items-center gap-x-5">
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

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <ReservationForm selectedTable={selectedTable} onClose={closePopup} />
        </div>
      )}
    </div>
  );
};

export default TableReservation;
