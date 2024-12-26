/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router";

const orderItems = [
  {
    customerName: "hari",
    items: [
      {
        name: "Burger Mexican",
        price: 24.6,
        image:
          "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      },
      {
        name: "Burger Classic",
        price: 20.0,
        image:
          "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      },
    ],
  },
  {
    customerName: "rps",
    items: [
      {
        name: "Burger Veggie",
        price: 18.5,
        image:
          "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      },
    ],
  },
];

const orderDetails = [
  {
    id: "125151515",
    customerName: "hari",
    table: "VIP Table One",
    type: "Dine-In",
    waiter: "Anthony Dos",
  },
  {
    id: "125151516",
    customerName: "rps",
    table: "VIP Table Two",
    type: "Dine-In",
    waiter: "John Doe",
  },
];

const Orders = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(
    orderDetails[0].customerName
  );

  const handleCustomerChange = (e) => {
    setSelectedCustomer(e.target.value);
  };

  // Find the selected customer's order details and items
  const customerOrderDetails = orderDetails.find(
    (order) => order.customerName === selectedCustomer
  );
  const customerOrderItems = orderItems.find(
    (order) => order.customerName === selectedCustomer
  );

  // Calculate summary for the selected customer's items
  const calculateSummary = (items) => {
    const subTotal = items.reduce((total, item) => total + item.price, 0);
    const discount = 0.1 * subTotal; // Example: 10% discount
    const totalAmount = subTotal - discount;
    return {
      totalItems: items.length,
      subTotal,
      discount,
      totalAmount,
    };
  };

  const summary = calculateSummary(customerOrderItems?.items || []);

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">Orders</h2>
      </div>

      {/* Dropdown for selecting customers */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Customer:
        </label>
        <select
          value={selectedCustomer}
          onChange={handleCustomerChange}
          className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
        >
          {orderDetails.map((order) => (
            <option key={order.id} value={order.customerName}>
              {order.customerName}
            </option>
          ))}
        </select>
      </div>

      {/* Order Details */}
      {customerOrderDetails && (
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Order ID</span>
              <span className="font-semibold">{customerOrderDetails.id}</span>
            </div>
            <div className="flex justify-between">
              <span>Customer Name</span>
              <span className="font-semibold">
                {customerOrderDetails.customerName}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Table</span>
              <span className="font-semibold">
                {customerOrderDetails.table}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Order Type</span>
              <span className="font-semibold">{customerOrderDetails.type}</span>
            </div>
            <div className="flex justify-between">
              <span>Waiter</span>
              <span className="font-semibold">
                {customerOrderDetails.waiter}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Order Items */}
      {customerOrderItems && (
        <div className="mb-6">
          <div className="flex justify-between px-1 items-center">
            <h3 className="text-lg font-semibold mb-2">Order Items</h3>
            <Link to="modifier">
              <button className="bg-red-100 text-red-500 text-sm font-medium px-4 py-1 rounded-full hover:bg-red-200">
                Modify
              </button>
            </Link>
          </div>
          {customerOrderItems.items.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center p-2 bg-white rounded-lg shadow-sm mb-2"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-12 w-12 rounded-lg mr-4"
                />
                <p className="text-gray-800">{item.name}</p>
              </div>
              <p className="text-green-500 font-semibold">${item.price}</p>
            </div>
          ))}
        </div>
      )}

      {/* Summary Section */}
      <div className="bg-white rounded-lg shadow-md p-4 space-y-2 text-sm">
        <div className="flex justify-between">
          <span>Total Items :</span>
          <span>{summary.totalItems}</span>
        </div>
        <div className="flex justify-between">
          <span>Sub Total :</span>
          <span>${summary.subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Discount :</span>
          <span>${summary.discount.toFixed(2)}</span>
        </div>
        <hr />
        <div className="flex justify-between text-lg font-semibold">
          <span>Total Amount :</span>
          <span>${summary.totalAmount.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default Orders;
