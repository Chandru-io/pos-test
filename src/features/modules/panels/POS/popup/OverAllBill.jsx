import { useState } from "react";

const OverAllBill = () => {
  const [expandedCustomer, setExpandedCustomer] = useState(null);

  const customers = [
    {
      name: "John",
      orders: [
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
      ],
      discount: 0.0,
      charges: 0.0,
      tax: 1.2,
      totalPayable: 20.16,
    },
    {
      name: "Alice",
      orders: [
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
      ],
      discount: 0.0,
      charges: 0.0,
      tax: 0.88,
      totalPayable: 9.67,
    },
  ];

  const toggleExpand = (name) => {
    setExpandedCustomer(expandedCustomer === name ? null : name);
  };

  // Calculate the overall total
  const overallTotal = customers.reduce(
    (sum, customer) => sum + customer.totalPayable,
    0
  );

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold mb-4 text-[#064E79]">Customer Orders</h3>
      <div className="border border-primary rounded-lg">
        {customers.map((customer, index) => (
          <div key={index} className="border-b border-green-300">
            <div
              className="flex justify-between p-4 cursor-pointer bg-primary text-white"
              onClick={() => toggleExpand(customer.name)}
            >
              <span>{customer.name}</span>
              <span>{expandedCustomer === customer.name ? "▲" : "▼"}</span>
            </div>
            {expandedCustomer === customer.name && (
              <div className="p-4">
                <h4 className="text-lg font-bold mb-2 text-[#064E79]">
                  Order Details
                </h4>
                <table className="w-full text-left border border-primary rounded-lg">
                  <thead>
                    <tr className="bg-primary text-white">
                      <th className="p-2 border-b">Items</th>
                      <th className="p-2 border-b">Quantity</th>
                      <th className="p-2 border-b">Price</th>
                      <th className="p-2 border-b">Discount</th>
                      <th className="p-2 border-b">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customer.orders.map((order, idx) => (
                      <tr
                        key={idx}
                        className="text-gray-700 border-b border-primary"
                      >
                        <td className="p-2">{order.item}</td>
                        <td className="p-2 text-center">{order.quantity}</td>
                        <td className="p-2 text-right">
                          ${order.price.toFixed(2)}
                        </td>
                        <td className="p-2 text-right">
                          ${order.discount.toFixed(2)}
                        </td>
                        <td className="p-2 text-right">
                          ${order.total.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="text-gray-700 pt-6">
                  <p className="p-1 border-b border-primary ">
                    Discount:{" "}
                    <span className="float-right">
                      ${customer.discount.toFixed(2)}
                    </span>
                  </p>
                  <p className="p-1 border-b border-primary">
                    Charges:{" "}
                    <span className="float-right">
                      ${customer.charges.toFixed(2)}
                    </span>
                  </p>
                  <p className="p-1 border-b border-primary">
                    Tax:{" "}
                    <span className="float-right">
                      ${customer.tax.toFixed(2)}
                    </span>
                  </p>
                  <p className="p-1 font-bold text-blue-600">
                    Total Payable:{" "}
                    <span className="float-right">
                      ${customer.totalPayable.toFixed(2)}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end">
                  <button className="bg-white p-2 border border-primary rounded-md hover:bg-primary_hover hover:text-white">
                    Pay Now
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <h4 className="text-xl font-bold text-[#064E79]">Overall Total</h4>
        <p className="text-gray-700 font-bold">
          Total Payable by Customers:{" "}
          <span className="float-right text-blue-600">
            ${overallTotal.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OverAllBill;
