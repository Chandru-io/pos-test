/* eslint-disable react/prop-types */
import { useReducer, useState } from "react";

import Select from "react-select";
import WastNotice from "./WasteNotice";
import { Modal } from "flowbite-react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "ADD_LOSS_ENTRY":
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          {
            name: action.payload.name,
            quantity: action.payload.quantity,
            lossAmount: action.payload.lossAmount,
          },
        ],
        totalLoss: state.totalLoss + action.payload.lossAmount,
      };
    case "UPDATE_INGREDIENTS_LIST":
      return {
        ...state,
        foodMenu: action.payload.foodMenu,
        ingredient: "",
        selectedCommodity: null,
      };
    default:
      return state;
  }
};

const AddWaste = ({ isOpen, onClose, initialState }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [isQtyPopUpOpen, setIsQtyPopUpOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmitPopup = (quantity) => {
    const lossAmount = quantity * popupData.lossPerUnit;
    dispatch({
      type: "ADD_LOSS_ENTRY",
      payload: {
        name: popupData.name,
        quantity: Number(quantity),
        lossAmount,
      },
    });
    setIsQtyPopUpOpen(false);
  };

  return (
    <Modal show={isOpen} size="3xl" popup onClose={onClose}>
      <Modal.Header />

      <Modal.Body>
        <div className="bg-white     p-6 rounded-lg   relative">
          <h2 className="text-xl font-semibold mb-2">Add Waste</h2>
          <div className="flex justify-end items-center">
            <p
              className="p-2 text-white bg-[#064E79] rounded-md cursor-pointer "
              onClick={() => setIsPopupOpen(true)}
            >
              Read Me First
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label>Reference Number</label>
              <input
                type="text"
                value={state.referenceNumber}
                disabled
                className="col-span-1 border p-2 rounded"
              />
            </div>
            <div className="flex flex-col">
              <label>Date</label>
              <input
                type="date"
                value={state.date}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "date",
                    value: e.target.value,
                  })
                }
                className="col-span-1 border p-2 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label>Ingredients</label>
              <Select
                options={initialState.ingredient}
                value={initialState.ingredients.find(
                  (option) => option.value === state.selectedIngredient
                )}
                onChange={(selectedOption) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "selectedIngredient",
                    value: selectedOption?.value || "",
                  })
                }
                className="col-span-1 p-2 rounded"
                isDisabled={state.selectedFoodMenu}
              />
            </div>

            <div className="flex flex-col">
              <label>Food Menu</label>
              <Select
                options={initialState.foodMenu}
                value={initialState.foodMenu.find(
                  (option) => option.value === state.selectedFoodMenu
                )}
                onChange={(selectedOption) => {
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "selectedFoodMenu",
                    value: selectedOption?.value || "",
                  });
                  setIsQtyPopUpOpen(true);
                }}
                className="col-span-1 p-2 rounded"
                isDisabled={state.selectedIngredient}
              />
            </div>

            <div className="flex flex-col">
              <label>Food Menu Waste Quantity</label>
              <input
                type="text"
                placeholder="Food Menu Waste Quantity"
                value={state.foodMenuWasteQuantity}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "foodMenuWasteQuantity",
                    value: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              />
            </div>

            <div className="flex flex-col">
              <label>Responsible Person</label>
              <input
                type="text"
                placeholder="Responsible Person"
                value={state.responsiblePerson}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_FIELD",
                    field: "responsiblePerson",
                    value: e.target.value,
                  })
                }
                className="w-full border p-2 rounded"
              />
            </div>
          </div>

          <table className="w-full mt-6 border">
            <thead>
              <tr>
                <th className="border p-2">SN</th>
                <th className="border p-2">Ingredient/Menu</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Loss Amount</th>
              </tr>
            </thead>
            <tbody>
              {state.ingredients.map((item, index) => (
                <tr key={index}>
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.quantity}</td>
                  <td className="border p-2">{item.lossAmount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              value={`Total Loss ${state.totalLoss.toFixed(2)}`}
              disabled
              className="col-span-1 border p-2 rounded"
            />
            <textarea
              placeholder="Note"
              value={state.note}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "note",
                  value: e.target.value,
                })
              }
              className="col-span-1 border p-2 rounded"
            ></textarea>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Back
            </button>
            <button
              onClick={() => {
                console.log("Submitted Data:", state);
                onClose();
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Submit
            </button>
          </div>
        </div>

        {isQtyPopUpOpen && (
          <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg">
              <h3 className="text-lg mb-2">
                Enter Quantity for {popupData.name}
              </h3>
              <input
                type="number"
                min="1"
                className="border p-2 rounded mb-2"
                onChange={(e) =>
                  setPopupData({ ...popupData, quantity: e.target.value })
                }
              />
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setIsQtyPopUpOpen(false)}
                  className="px-4 py-2 bg-gray-300 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSubmitPopup(popupData.quantity)}
                  className="px-4 py-2 bg-blue-500 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}

        <WastNotice
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AddWaste;
