/* eslint-disable react/prop-types */
import { useState } from "react";
import { TiPlus } from "react-icons/ti";
import { TiMinus } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";

import FoodOrderCardModal from "./FoodOrderCard";
import { Modal } from "flowbite-react";

function Counter({ amount, onChange }) {
  const [count, setCount] = useState(amount ? amount : 0);

  const handleIncrement = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      onChange(newCount);
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCount((prev) => {
      const newCount = Math.max(prev - 1, 0);
      onChange(newCount);
      return newCount;
    });
  };

  return (
    <div className="inline-flex gap-x-3 items-center">
      <div
        className="inline-flex justify-center items-center p-1 border rounded-md cursor-pointer"
        onClick={handleDecrement}
      >
        <TiMinus />
      </div>
      <span>{count}</span>
      <div
        className="inline-flex justify-center items-center p-1 border rounded-md cursor-pointer"
        onClick={handleIncrement}
      >
        <TiPlus />
      </div>
    </div>
  );
}

const OrderCard = ({ id, name, amount, discount, quantity, setOrders }) => {
  const [totalAmount, setTotalAmount] = useState(amount * quantity);
  const [isModifierOpen, setIsModifierOpen] = useState(false);

  const handleQuantityChange = (newQuantity) => {
    setTotalAmount(amount * newQuantity);
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, quantity: newQuantity } : order
      )
    );
  };

  return (
    <div className="w-full">
      <div className="flex w-full items-center gap-x-3">
        {/* <img src={image} alt="Ordered food" className="h-14 w-16 rounded-md" /> */}
        <div className="flex flex-col gap-y-1 flex-grow">
          <div className="flex justify-between items-center w-full">
            <span className="text-lg font-semibold">{name}</span>
            <span className="text-lg font-semibold text-[#3FB547]">
              ${totalAmount?.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span>${amount?.toFixed(2)}</span>
            <span>Discount: {discount}</span>

            <div
              className="cursor-pointer flex justify-center items-center gap-x-1 underline decoration-[#3FB547]"
              onClick={() => setIsModifierOpen(true)}
            >
              <CiEdit className="text-[#3FB547] mt-1" />
              <span className="text-[#3FB547]">Edit</span>
            </div>

            <Modal
              size="3xl"
              show={isModifierOpen}
              onClose={() => setIsModifierOpen(false)}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="scale-95">
                  <FoodOrderCardModal
                    productName={name}
                    productPrice={amount}
                    productId={id}
                  />
                </div>
              </Modal.Body>
            </Modal>
            <div>
              <Counter amount={quantity} onChange={handleQuantityChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
