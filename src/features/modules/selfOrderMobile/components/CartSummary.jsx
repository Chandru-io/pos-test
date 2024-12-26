/* eslint-disable react/prop-types */

const CartSummary = ({ subTotal, discount, totalAmount, handleConfirm }) => {
  return (
    <>
      <div className="  border-t mt-6 pt-4 text-gray-700  flex-col justify-between  items-end">
        <div>
          <hr className="mb-4" />

          {/* Summary Details */}
          <p className="text-sm mb-2 flex justify-between ">
            <span className="font-medium">Total Items:</span>{" "}
            {subTotal > 0 ? (subTotal / 12.3).toFixed(0) : 0}
          </p>
          <p className="text-sm mb-2 flex justify-between ">
            <span className="font-medium">Sub Total:</span> $
            {subTotal.toFixed(2)}
          </p>
          <p className="text-sm mb-2 flex justify-between ">
            <span className="font-medium">Discount:</span> $
            {discount.toFixed(2)}
          </p>
          <p className="text-lg mt-4 font-semibold flex justify-between ">
            Total Amount:{" "}
            <strong className="text-green-600">
              ${totalAmount.toFixed(2)}
            </strong>
          </p>
        </div>
        <div>
          {/* Place Order Button */}
          <button
            className=" w-full mt-56  py-4 bg-primary_button text-white text-center rounded-md hover:bg-primary_button_hover transition duration-300"
            onClick={handleConfirm}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSummary;
