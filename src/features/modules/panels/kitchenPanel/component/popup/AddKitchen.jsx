/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function AddKitchenModal({ onCloseModal, isOpen }) {
  const [kitchenName, setKitchenName] = useState("");
  const [selectedPrinter, setSelectedPrinter] = useState("");
  const [categories, setCategories] = useState([
    { id: 1, name: "Category 1", selected: false },
    { id: 2, name: "Category 2", selected: false },
    { id: 3, name: "Category 3", selected: false },
  ]);
  const [selectAll, setSelectAll] = useState(false);
  const { t } = useTranslation();
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setCategories(
      categories.map((cat) => ({ ...cat, selected: newSelectAll }))
    );
  };

  const handleCategoryChange = (id) => {
    const updatedCategories = categories.map((cat) =>
      cat.id === id ? { ...cat, selected: !cat.selected } : cat
    );
    setCategories(updatedCategories);
    setSelectAll(updatedCategories.every((cat) => cat.selected));
  };

  const handleConfirm = () => {
    const selectedCategories = categories.filter((cat) => cat.selected);
    alert(`
      Kitchen Name: ${kitchenName}
      Printer: ${selectedPrinter}
      Selected Categories: ${selectedCategories
        .map((cat) => cat.name)
        .join(", ")}
    `);
  };
  if (!isOpen) return null;
  return (
    <Modal show={isOpen} size="md" popup onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            {t("Panels.Kitchen.Add Kitchen")}
          </h2>
        </div>
        <p className="text-gray-500 mb-4">
          {t("Panels.Kitchen.Add Kitchen for your POS System")}{" "}
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("Panels.Kitchen.Name of Kitchen")}
          </label>
          <input
            type="text"
            value={kitchenName}
            onChange={(e) => setKitchenName(e.target.value)}
            placeholder={t("Enter kitchen name")}
            className="w-full border rounded px-3 py-2 text-gray-700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("Panels.Kitchen.Printer")}
          </label>
          <select
            value={selectedPrinter}
            onChange={(e) => setSelectedPrinter(e.target.value)}
            className="w-full border rounded px-3 py-2 text-gray-700"
          >
            <option value="" disabled>
              None
            </option>
            <option value="Printer 1">Printer 1</option>
            <option value="Printer 2">Printer 2</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            {t("Panels.Kitchen.Categories")}
            <span className="ml-2 text-blue-500 cursor-pointer">?</span>
          </label>
          <div>
            <label className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                checked={selectAll}
                onChange={handleSelectAll}
              />
              {t("Panels.Kitchen.Select All")}
            </label>
            <ul className="mt-2">
              {categories.map((cat) => (
                <li key={cat.id} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={cat.selected}
                    onChange={() => handleCategoryChange(cat.id)}
                    className="mr-2"
                  />
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCloseModal}
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded"
          >
            {t("Panels.Kitchen.Cancel")}
          </button>
          <button
            onClick={handleConfirm}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            {t("Panels.Kitchen.Confirm")}
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
}
