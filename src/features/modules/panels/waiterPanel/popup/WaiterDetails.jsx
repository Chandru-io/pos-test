/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const WaiterDetails = ({ isOpen, onClose, data }) => {
  const [notifications, setNotifications] = useState(data);
  const [selected, setSelected] = useState([]);
  const { t } = useTranslation();

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
    <Modal show={isOpen} size="7xl" onClose={onClose} popup>
      <Modal.Header>Waiter Details</Modal.Header>
      <Modal.Body>
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
                  className="text-black bg-[#CAF6B7] px-4 py-1 rounded-md text-center"
                >
                  {t("Panels.Collect")}
                </button>
              </li>
            ))
          ) : (
            <li>No Data</li>
          )}
        </ul>

        <div className="flex justify-end">
          <button
            onClick={deleteSelected}
            className="bg-red-500 text-white px-2 py-1 rounded-md m-2"
          >
            {t("Panels.Remove")}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default WaiterDetails;
