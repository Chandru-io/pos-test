/* eslint-disable react/prop-types */
import { useState } from "react";

const NotificationList = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New Self Order has been placed, Order No, 1234434" },
    { id: 2, text: "New Self Order has been placed, Order No, 1234434" },
    { id: 3, text: "New Self Order has been placed, Order No, 1234434" },
    { id: 4, text: "New Self Order has been placed, Order No, 1234434" },
    { id: 5, text: "New Self Order has been placed, Order No, 1234434" },
  ]);

  const [selected, setSelected] = useState([]);

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelected(notifications.map((n) => n.id));
    } else {
      setSelected([]);
    }
  };

  const handleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleRemoveSelected = () => {
    setNotifications((prev) =>
      prev.filter((notification) => !selected.includes(notification.id))
    );
    setSelected([]);
  };

  return (
    <div className=" flex items-center justify-center">
      <div className="bg-white rounded-lg  w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-lg font-semibold">Notification List</h1>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selected.length === notifications.length}
              onChange={handleSelectAll}
              className="mr-2"
            />
            <span>Select All</span>
          </div>
          <ul className="space-y-2 max-h-80 overflow-x-scroll">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="flex items-center justify-between gap-x-2 px-4 py-2"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={selected.includes(notification.id)}
                    onChange={() => handleSelect(notification.id)}
                    className="mr-2"
                  />
                  <span className="text-xs">{notification.text}</span>
                </div>
                <button className="bg-green-500 text-white text-sm px-4 py-1 rounded hover:bg-green-600">
                  Serve/Deliver
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={handleRemoveSelected}
          disabled={selected.length === 0}
          className={`mt-4 inline-block text-left text-sm p-2 rounded-lg ${
            selected.length > 0
              ? "bg-red-500 text-white hover:bg-red-600"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default NotificationList;
