/* eslint-disable react/prop-types */
import { Modal } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { currencyData } from "../../../data/currencyData";

const Currency = ({ type, onCloseModal, isOpen }) => {
  const [currency, setCurrency] = useState({ symbol: "", rate: "" });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setCurrency((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit() {
    if (type === "create") {
      toast.success("Currency Added");
    } else {
      toast.success("Edited.");
    }
    onCloseModal();
  }

  const decodeHtmlEntity = (str) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  };

  return (
    <Modal show={isOpen} size="xl" onClose={onCloseModal} popup>
      <Modal.Header />

      <Modal.Body>
        <h2 className="text-xl font-semibold text-black px-2">
          {type} Currency
        </h2>
        <div className="grid grid-cols-1 gap-2 p-6">
          {/* Currency Symbol */}
          <div className="flex flex-col gap-y-1">
            <label className="text-[#344054] font-semibold">
              Currency symbol
            </label>

            <select
              value={currency.symbol}
              name="symbol"
              onChange={handleOnChange}
              className="p-2 rounded-md border bg-white focus:outline-blue-500"
            >
              <option value="" disabled>
                Select the symbol
              </option>
              {currencyData.map((item) => (
                <option key={item.abbreviation} value={item.abbreviation}>
                  {`${decodeHtmlEntity(item.symbol)} ${item.currency}`}
                </option>
              ))}
            </select>
          </div>

          {/* Conversion Rate */}
          <div className="flex flex-col gap-y-1">
            <label className="text-[#344054] font-semibold">
              Conversion rate
            </label>
            <input
              type="text"
              name="rate"
              value={currency.rate}
              onChange={handleOnChange}
              className="p-1 rounded-md border bg-white focus:outline-blue-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between gap-x-4 px-4">
          <button
            className="p-2 text-center border bg-white w-full rounded-md border-gray-200 hover:bg-gray-100 duration-200 cursor-pointer"
            onClick={onCloseModal}
          >
            Back
          </button>
          <button
            className="p-2 text-center border text-white w-full rounded-md bg-green-500 border-green-500 hover:bg-green-600 duration-200 cursor-pointer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Currency;
