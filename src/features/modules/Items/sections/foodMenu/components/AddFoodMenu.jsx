/* eslint-disable react/prop-types */
import { useState } from "react";

import AddVarient from "./AddVariant";
import { Modal } from "flowbite-react";
import WastNotice from "../../../components/WasteNotice";

const AddFoodMenuPopup = ({ isOpen, onClose }) => {
  const [ingredients, setIngredients] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleIngredientChange = (index, field, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index][field] = value;

    // Update cost and total cost
    updatedIngredients[index].total =
      (updatedIngredients[index].consumption || 0) *
      (updatedIngredients[index].cost || 0);

    setIngredients(updatedIngredients);

    const newTotalCost = updatedIngredients.reduce(
      (acc, ingredient) => acc + (ingredient.total || 0),
      0
    );
    setTotalCost(newTotalCost.toFixed(2));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted");
    console.log({ ingredients, totalCost });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="4xl" popup onClose={onClose}>
      <Modal.Header />
      <Modal.Body>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">Add Food Menu</h2>
            <p className="text-sm text-gray-500">
              Add the food menu in the respective category.
            </p>
          </div>
        </div>
        <div className="flex justify-self-end">
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
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="text-sm text-gray-700">Food Menu Type</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Code</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md p-2 mt-1"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Category</label>
              <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
                <option>Category 1</option>
                <option>Category 2</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-gray-700">
                Ingredient cunsumption
              </label>
              <select className="w-full border border-gray-300 rounded-md p-2 mt-1">
                <option>Ingredient 1</option>
                <option>Ingredient 2</option>
              </select>
            </div>
          </div>

          {/* Ingredient Table */}
          <table className="w-full border text-sm mb-6">
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
              {ingredients.map((ingredient, index) => (
                <tr key={ingredient.id}>
                  <td className="border px-2 py-1 text-center">
                    {ingredient.id}
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="text"
                      className="w-full border rounded-md p-1"
                      value={ingredient.name}
                      onChange={(e) =>
                        handleIngredientChange(index, "name", e.target.value)
                      }
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="number"
                      className="w-full border rounded-md p-1"
                      value={ingredient.consumption}
                      onChange={(e) =>
                        handleIngredientChange(
                          index,
                          "consumption",
                          e.target.value
                        )
                      }
                    />
                  </td>
                  <td className="border px-2 py-1">
                    <input
                      type="number"
                      className="w-full border rounded-md p-1"
                      value={ingredient.cost}
                      onChange={(e) =>
                        handleIngredientChange(index, "cost", e.target.value)
                      }
                    />
                  </td>
                  <td className="border px-2 py-1 text-center">
                    {ingredient.total || 0}
                  </td>
                  <td className="border px-2 py-1 text-center">
                    <button
                      type="button"
                      onClick={() =>
                        setIngredients((prev) =>
                          prev.filter((_, i) => i !== index)
                        )
                      }
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right font-semibold text-red-500 mb-4">
            Total Cost: ${totalCost}
          </div>

          <div className="flex items-center   justify-between">
            <div>
              <label>Sale Price (Dine In)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter price"
              />
            </div>
            <div>
              <label>Sale Price (Take Away)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter price"
              />
            </div>
          </div>
          {/* Sale Price (Delivery) Fields */}
          <div className="md:col-span-2">
            <label>Sale Price (Delivery)</label>
            <div className="grid gap-2">
              {[
                "Tim Hortons",
                "Uber Eats",
                "Door Dash",
                "Grub Hub",
                "Pathao Food Rider",
              ].map((label, index) => (
                <div
                  key={index}
                  className="grid grid-cols-2 items-center gap-4"
                >
                  <span>{label}</span>
                  <input
                    type="number"
                    className="border p-2 w-full rounded"
                    placeholder="Enter price"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label>Description</label>
            <textarea
              className="border p-2 w-full rounded"
              rows="3"
              placeholder="Enter description"
            />
          </div>

          {/* Photo */}
          <div>
            <label>Photo</label>
            <input type="file" className="border p-2 w-full rounded" />
          </div>

          {/* Tax Rates */}
          <div className="flex items-center gap-2">
            <div>
              <label>CGST (%)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter %"
              />
            </div>
            <div>
              <label>SGST (%)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter %"
              />
            </div>
            <div>
              <label>IGST (%)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter %"
              />
            </div>
            <div>
              <label>VAT (%)</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter %"
              />
            </div>

            {/* Royalty Points */}
            <div>
              <label>Royalty Points</label>
              <input
                type="number"
                className="border p-2 w-full rounded"
                placeholder="Enter points"
              />
            </div>
          </div>

          {/* Dropdowns */}
          <div className="flex items-center  justify-between">
            <div>
              <label>Category</label>
              <select className="border p-2 w-full rounded">
                <option value="">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
            </div>
            <div>
              <label>Is it vegetarian?</label>
              <select className="border p-2 w-full rounded">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <label>Is it Beverage?</label>
              <select className="border p-2 w-full rounded">
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <label>Food Menu</label>
            <input type="text " className="border p-2 " />
          </div>
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm mb-4"
          >
            Add Varient
          </button>

          {/* Action Buttons */}
          <div className="flex justify-center items-center gap-4">
            <button
              type="button"
              className=" text-gray-600 bg-white  border  px-4 py-2 rounded-md text-sm"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className=" text-white px-4 py-2 rounded-md text-sm bg-primary_button hover:bg-primary_button_hover"
            >
              Submit
            </button>
          </div>
        </form>
        <WastNotice
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
        <AddVarient isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      </Modal.Body>
    </Modal>
  );
};

export default AddFoodMenuPopup;
