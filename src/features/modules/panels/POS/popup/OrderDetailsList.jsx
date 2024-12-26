/* eslint-disable react/prop-types */
import { FaXmark } from "react-icons/fa6";

const orderDetailsList = [
  { item: "Coca Cola 400ml", price: 2.0, qty: 1, discount: "5%", total: 1.9 },
  { item: "Pepsi 500ml", price: 2.5, qty: 2, discount: "10%", total: 4.5 },
  { item: "Water 1L", price: 1.0, qty: 3, discount: "0%", total: 3.0 },
  {
    item: "Orange Juice 500ml",
    price: 3.0,
    qty: 1,
    discount: "15%",
    total: 2.55,
  },
  { item: "Lemonade 330ml", price: 1.8, qty: 4, discount: "20%", total: 5.76 },
];

const calculateTotalItems = () =>
  orderDetailsList.reduce((sum, item) => sum + item.qty, 0);

const calculateSubTotal = () =>
  orderDetailsList
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

const calculateTotalDiscount = () =>
  (
    calculateSubTotal() -
    orderDetailsList.reduce((sum, item) => sum + item.total, 0)
  ).toFixed(2);

const OrderDetails = ({ onCloseModal }) => {
  return (
    <div className="bg-white w-full max-w-lg md:min-w-[40vw] rounded-lg shadow-lg relative">
      <h3 className="text-xl font-semibold text-[#064E79] text-center p-4">
        Cart Items Details
      </h3>
      <FaXmark
        className="absolute top-5 text-lg right-4 hover:text-red-500 cursor-pointer"
        onClick={onCloseModal}
      />
      <div className="border-b my-2" />

      <div className="px-5 py-2 grid grid-cols-3">
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Order Type :</span>
          <span>Dine In</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Order Number :</span>
          <span>awqdsf3</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Waiter :</span>
          <span>Robin</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Customer :</span>
          <span>DJ Black</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Table :</span>
          <span>None</span>
        </div>
      </div>

      <div className="px-5 py-2">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-green-600 text-white">
              <th className="py-2 px-4 font-semibold">Item</th>
              <th className="py-2 px-4 font-semibold">Price</th>
              <th className="py-2 px-4 font-semibold">Qty</th>
              <th className="py-2 px-4 font-semibold">Discount</th>
              <th className="py-2 px-4">Total</th>
            </tr>
          </thead>
          <tbody>
            {orderDetailsList.map((promo, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{promo.item}</td>
                <td className="py-2 px-4">${promo.price.toFixed(2)}</td>
                <td className="py-2 px-4">{promo.qty}</td>
                <td className="py-2 px-4">{promo.discount}</td>
                <td className="py-2 px-4">${promo.total.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="px-5 grid grid-cols-3 gap-2">
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Total Items :</span>
          <span>{calculateTotalItems()}</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Sub Total :</span>
          <span>${calculateSubTotal()}</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Discount :</span>
          <span>${calculateTotalDiscount()}</span>
        </div>
      </div>

      <div className="px-5 grid grid-cols-4 gap-2">
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Total Discount :</span>
          <span>${calculateTotalDiscount()}</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Tax :</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Charge :</span>
          <span>$0.00</span>
        </div>
        <div className="flex justify-start gap-x-3 py-1">
          <span className="font-semibold">Tips :</span>
          <span>$0.00</span>
        </div>
      </div>

      <div className="border-b py-2" />
      <div className="flex justify-end gap-x-2 p-4">
        <button
          onClick={onCloseModal}
          className="border border-orange-500 text-orange-500 px-4 py-2 rounded-md cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
