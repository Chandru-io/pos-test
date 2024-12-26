/* eslint-disable react/prop-types */
import { useState } from "react";

import { IoFastFoodOutline } from "react-icons/io5";

import { Modal } from "flowbite-react";
import WastNotice from "../../../components/WasteNotice";

const EditModifiersModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    ingredientConsumption: "",
    description: "",
    cgst: "",
    sgst: "",
    igst: "",
    vat: "",
    ingredients: [],
  });
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = formData.ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [field]: value } : ingredient
    );
    setFormData((prev) => ({ ...prev, ingredients: updatedIngredients }));
  };

  const handleDeleteIngredient = (index) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    onClose(); // Close modal after submission
  };

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        {/* Header */}
        <div className="flex justify-between p-2">
          <p className="p-2 border rounded-md">
            <IoFastFoodOutline size={30} />
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Edit Modifiers</h2>
            <p className="text-sm text-gray-500">
              Edit modifiers in the food menu offered.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsPopupOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Read Me First
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              className="border border-gray-300 rounded-md p-2"
            />
            <select
              name="ingredientConsumption"
              value={formData.ingredientConsumption}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Ingredient Consumption</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="border border-gray-300 rounded-md p-2 col-span-2"
            ></textarea>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            <input
              type="number"
              name="cgst"
              value={formData.cgst}
              onChange={handleChange}
              placeholder="CGST %"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="sgst"
              value={formData.sgst}
              onChange={handleChange}
              placeholder="SGST %"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="igst"
              value={formData.igst}
              onChange={handleChange}
              placeholder="IGST %"
              className="border border-gray-300 rounded-md p-2"
            />
            <input
              type="number"
              name="vat"
              value={formData.vat}
              onChange={handleChange}
              placeholder="VAT %"
              className="border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table-auto w-full border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">Sr. No.</th>
                  <th className="border px-2 py-1">Ingredients</th>
                  <th className="border px-2 py-1">Consumption</th>
                  <th className="border px-2 py-1">Cost</th>
                  <th className="border px-2 py-1">Total</th>
                  <th className="border px-2 py-1">Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.ingredients.map((ingredient, index) => (
                  <tr key={index}>
                    <td className="border px-2 py-1">{index + 1}</td>
                    <td className="border px-2 py-1">
                      <input
                        type="text"
                        value={ingredient.ingredient}
                        onChange={(e) =>
                          handleIngredientChange(
                            index,
                            "ingredient",
                            e.target.value
                          )
                        }
                        className="border border-gray-300 rounded-md p-1 w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="number"
                        value={ingredient.consumption}
                        onChange={(e) =>
                          handleIngredientChange(
                            index,
                            "consumption",
                            e.target.value
                          )
                        }
                        className="border border-gray-300 rounded-md p-1 w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="number"
                        value={ingredient.cost}
                        onChange={(e) =>
                          handleIngredientChange(index, "cost", e.target.value)
                        }
                        className="border border-gray-300 rounded-md p-1 w-full"
                      />
                    </td>
                    <td className="border px-2 py-1">
                      <input
                        type="number"
                        value={ingredient.total}
                        onChange={(e) =>
                          handleIngredientChange(index, "total", e.target.value)
                        }
                        className="border border-gray-300 rounded-md p-1 w-full"
                      />
                    </td>
                    <td className="border px-2 py-1 text-center">
                      <button
                        type="button"
                        onClick={() => handleDeleteIngredient(index)}
                        className="text-red-500 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Cost */}
          <div className="text-right text-red-500 font-semibold mb-4">
            Total Cost
          </div>

          {/* Buttons */}
          <div className="flex justify-center gap-4 items-center">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 border border-gray-300 px-4 py-2 rounded-md text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md text-sm"
            >
              Update
            </button>
          </div>
        </form>
        <WastNotice
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditModifiersModal;
