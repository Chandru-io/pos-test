/* eslint-disable react/prop-types */
import { useState } from "react";

const initialNotifications = [
  {
    id: 1,
    message:
      "Token Number: 121324234,Order:aLL230521-001 has been modified. Modified item: Massaman Beef Curry, Modified item qty:2",
  },
  {
    id: 2,
    message:
      "Token Number: 121324235,Order:aLL230521-002 has been modified. Modified item: Pad Thai, Modified item qty:1",
  },
];

export default function NotificationModal({ onCloseModal }) {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [selected, setSelected] = useState([]);

  const toggleSelectAll = () => {
    if (selected.length === notifications.length) {
      setSelected([]);
    } else {
      setSelected(notifications.map((notif) => notif.id));
    }
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const deleteSelected = () => {
    setNotifications((prev) =>
      prev.filter((notif) => !selected.includes(notif.id))
    );
    setSelected([]);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white rounded-lg p-4 w-2/3 min-w-[50vw] overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">Notification Order</h2>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              onChange={toggleSelectAll}
            />
            <span>Select All</span>
          </label>
        </div>
        <ul className="space-y-2">
          {notifications.length !== 0 ? (
            notifications.map((notif) => (
              <li
                key={notif.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={selected.includes(notif.id)}
                    onChange={() => toggleSelect(notif.id)}
                  />
                  <span>{notif.message}</span>
                </label>
                <button
                  onClick={() =>
                    setNotifications((prev) =>
                      prev.filter((n) => n.id !== notif.id)
                    )
                  }
                  className="bg-red-100 text-red-600 px-4 py-1 rounded-md"
                >
                  Delete
                </button>
              </li>
            ))
          ) : (
            <li>No Data</li>
          )}
        </ul>
        <div className="flex justify-end mt-4">
          <button
            onClick={onCloseModal}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md mr-2"
          >
            Close
          </button>
          <button
            onClick={deleteSelected}
            className="bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
