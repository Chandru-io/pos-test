/* eslint-disable react/prop-types */
import { useState } from "react";

const FinalizeSales = ({ onCloseModal }) => {
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [payable, setPayable] = useState(57.8);

  const [paid, setPaid] = useState(44.0);
  const [due, setDue] = useState(payable - paid);

  const handleAddPayment = () => {};

  const handleDiscount = (discount) => {
    setPayable(payable - discount);
    setDue(payable - paid);
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white rounded-lg w-full ">
        <h2 className="text-lg font-bold mb-4">Finalize Sales</h2>
        <div className="flex w-full">
          <div className="w-1/4 pr-4 border-r border-gray-200">
            <h3 className="text-sm font-bold mb-2 text-[#064E79] ">
              Payment Method
            </h3>
            <div className="flex flex-col space-y-2">
              {[
                "Cash",
                "Credit Card",
                "Cheque",
                "Bank Transfer",
                "Loyalty Points",
              ].map((method) => (
                <button
                  key={method}
                  className={`py-2 px-4 rounded text-left ${
                    paymentMethod === method
                      ? "bg-green-500 text-white"
                      : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setPaymentMethod(method)}
                >
                  {method}
                </button>
              ))}
            </div>
            <div className="mt-4">
              <select className="w-full text-sm text-green-600 border border-green-600 py-2 rounded">
                <option value="">Change Currency</option>
              </select>
              <button className="w-full text-sm text-blue-600 mt-2 bg-white">
                Cart Item Details
              </button>
            </div>
          </div>

          <div className="w-3/4 pl-4">
            <div className="flex justify-end items-center gap-x-2 mb-3">
              <button className="text-sm text-green-600 border bg-white border-green-600 mt-2 text-center p-2 rounded-md cursor-pointer">
                Send Message
              </button>
              <button className="text-sm text-green-600 border bg-white border-green-600 mt-2 text-center p-2 rounded-md cursor-pointer">
                Cart Item Details
              </button>
            </div>
            <div className="flex justify-around items-center mb-4 bg-[#FCFCFF] p-2 border border-gray-300 rounded-lg">
              <div className="flex justify-centerv items-center flex-col">
                <span>Payable</span>{" "}
                <span className="text-green-600 text-2xl font-bold">
                  ${payable.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-centerv items-center flex-col">
                <span>Paid</span>{" "}
                <span className="text-gray-600 text-2xl font-bold">
                  {" "}
                  ${paid.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-centerv items-center flex-col">
                <span>Due</span>{" "}
                <span className="text-red-600 text-2xl font-bold">
                  {" "}
                  ${due.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="flex flex-col justify-start">
                <label className="text-base">Given Amount</label>
                <input
                  type="text"
                  placeholder="Given Amount"
                  className="border border-gray-300 p-1.5 rounded"
                />
              </div>
              <div className="flex flex-col justify-start">
                <label className="text-base">Given Amount</label>
                <input
                  type="text"
                  placeholder=""
                  className="border border-gray-300 p-1.5 rounded"
                />
              </div>
              <div className="flex flex-col justify-start">
                <label className="text-base">Given Amount</label>
                <input
                  type="text"
                  placeholder="0"
                  className="border border-gray-300 p-1.5 rounded"
                />
              </div>

              <button
                className="bg-[#064E79] self-end  text-white py-2 px-4 rounded"
                onClick={handleAddPayment}
              >
                Add
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="">
                <h4 className="font-semibold mb-2">Payment History</h4>
                <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
                  <span>{paymentMethod}</span>
                  <span>${paid.toFixed(2)}</span>
                  <button className="text-gray-500 hover:text-red-600 bg-gray-100">
                    &times;
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {[10, 20, 30, 40, 50, 100].map((discount) => (
                    <button
                      key={discount}
                      className="bg-gray-100 text-gray-700 py-2 rounded"
                      onClick={() => handleDiscount(discount)}
                    >
                      {discount}
                    </button>
                  ))}
                </div>

                <button
                  className="bg-gray-100 text-gray-700 py-2 rounded"
                  onClick={() => setPayable(payable)}
                >
                  Clear
                </button>
                <div className="flex justify-end mt-6 gap-x-4">
                  <button className="bg-green-600 text-white p-2 rounded-md">
                    Submit
                  </button>
                  <button
                    onClick={onCloseModal}
                    className="border border-orange-500 text-orange-500  p-2 rounded-md bg-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizeSales;
