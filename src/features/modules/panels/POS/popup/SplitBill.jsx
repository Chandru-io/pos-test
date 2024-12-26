import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";

const SplitBill = () => {
  const [splitCount, setSplitCount] = useState(4);
  const [remainingAmount, setRemainingAmount] = useState(22.47);
  const [payments, setPayments] = useState(
    Array(splitCount).fill({ method: "Cash", amount: 7.48, paid: false })
  );

  const handleSplitChange = (value) => {
    const newCount = Math.max(1, splitCount + value);

    setSplitCount(newCount);

    setPayments((prevPayments) => {
      if (newCount > prevPayments.length) {
        const additionalPayments = Array(newCount - prevPayments.length).fill({
          method: "Cash",
          amount: 7.48,
          paid: false,
        });
        return [...prevPayments, ...additionalPayments];
      }

      return prevPayments.slice(0, newCount);
    });
  };

  const handlePaymentChange = (index, key, value) => {
    setPayments((prevPayments) => {
      return prevPayments.map((payment, i) =>
        i === index ? { ...payment, [key]: value } : payment
      );
    });
  };

  return (
    <div className="    ">
      <div className="bg-white w-full">
        <div className=" ">
          <div className="  pr-4">
            <h3 className="text-lg font-bold mb-2 text-[#064E79]">
              Order Details
            </h3>
            <table className="w-full text-left border border-green-300 rounded-lg">
              <thead className="">
                <tr className="bg-green-500 text-gray-600 ">
                  <th className="p-2 border-b  text-white">Items</th>
                  <th className="p-2 border-b  text-white">Quantity</th>
                  <th className="p-2 border-b  text-white">Price</th>
                  <th className="p-2 border-b  text-white">Discount</th>
                  <th className="p-2 border-b  text-white">Total</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    item: "Coca Cola",
                    quantity: 1,
                    price: 2.0,
                    discount: 0.0,
                    total: 2.0,
                  },
                  {
                    item: "All Mix Salad",
                    quantity: 1,
                    price: 4.98,
                    discount: 0.0,
                    total: 4.98,
                  },
                  {
                    item: "Chinese Combo",
                    quantity: 1,
                    price: 12.98,
                    discount: 0.0,
                    total: 12.98,
                  },
                  {
                    item: "Hot Soup",
                    quantity: 1,
                    price: 3.17,
                    discount: 0.0,
                    total: 3.17,
                  },
                  {
                    item: "Desert",
                    quantity: 1,
                    price: 5.62,
                    discount: 0.0,
                    total: 5.62,
                  },
                ].map((item, index) => (
                  <tr
                    key={index}
                    className="text-gray-700 border-b border-green-300"
                  >
                    <td className="p-2 ">{item.item}</td>
                    <td className="p-2  text-center">{item.quantity}</td>
                    <td className="p-2  text-right">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="p-2  text-right">
                      ${item.discount.toFixed(2)}
                    </td>
                    <td className="p-2 text-right">${item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className=" text-gray-700 pt-6 border-r border-l border-b border-green-300">
              <p className="p-1 border-b border-green-300">
                Discount: <span className="float-right">$0.00</span>
              </p>
              <p className="p-1 border-b border-green-300">
                Charges: <span className="float-right">$0.00</span>
              </p>
              <p className="p-1 border-b border-green-300">
                Tax: <span className="float-right">$1.20</span>
              </p>
              <p className="p-1 font-bold text-blue-600">
                Total Payable: <span className="float-right">$29.95</span>
              </p>
            </div>
          </div>
          <div className="py-2 flex justify-end px-4">
            <button className="border border-primary rounded-md p-2 bg-white  hover:bg-primary  hover:text-white ">
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitBill;
