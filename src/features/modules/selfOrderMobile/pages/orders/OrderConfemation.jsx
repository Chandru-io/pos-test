/* eslint-disable react/prop-types */
import { GiCheckMark } from "react-icons/gi";
import { Link } from "react-router";
import { GoDownload } from "react-icons/go";

const orderDetails = {
  amount: 12351,
  paymentStatus: "Unpaid", // or "Paid"
  orderId: "125151515",
  customerName: "James Vasanth",
  table: "VIP Table one",
  orderType: "Dine-In",
  waiterName: "Anthony dos",
};

const OrderConfirmation = () => {
  const {
    amount,
    paymentStatus,
    orderId,
    customerName,
    table,
    orderType,
    waiterName,
  } = orderDetails;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* Confirmation Icon */}
      <div className="bg-green-100 rounded-full p-4 mb-4 animate-bounce text-green-500">
        <GiCheckMark size={30} />
      </div>

      {/* Header */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Order Confirmed
      </h2>
      <p className="text-gray-500 mb-6">Your order has been confirmed.</p>

      {/* Order Details */}
      <div className="w-full  bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Amount</p>
          <p className="text-lg font-semibold">${amount}</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-600">Payment Status</p>
          <span
            className={`px-2 py-1 text-sm font-medium rounded-full ${
              paymentStatus === "Paid"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {paymentStatus}
          </span>
        </div>
        <hr className="my-2" />
        <div className="text-sm text-gray-700 space-y-2">
          <div className="flex justify-between">
            <span>Order ID</span>
            <span className="font-semibold">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span>Customer Name</span>
            <span className="font-semibold">{customerName}</span>
          </div>
          <div className="flex justify-between">
            <span>Table</span>
            <span className="font-semibold">{table}</span>
          </div>
          <div className="flex justify-between">
            <span>Order Type</span>
            <span className="font-semibold">{orderType}</span>
          </div>
          <div className="flex justify-between">
            <span>Waiter</span>
            <span className="font-semibold">{waiterName}</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className=" w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-10 ">
        <button className="flex items-center justify-center w-full py-4 mb-3 text-white border bg-primary_button hover:bg-primary_button_hover rounded-lg  hover:text-white transition duration-300">
          <GoDownload size={25} />
          Download Invoice
        </button>
        <Link to="food">
          <button className="w-full py-4 bg-secondary_button  text-white rounded-lg hover:bg-secondary_button_hover transition duration-300">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderConfirmation;
