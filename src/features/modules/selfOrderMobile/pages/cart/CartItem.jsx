/* eslint-disable react/prop-types */

const CartItem = ({ item, updateQuantity }) => {
  const discountedPrice = item.price - (item.discount / 100) * item.price;

  return (
    <div className="flex items-center justify-between border-b py-4">
      {/* Product Image */}
      <img src={item.img} alt={item.name} className="w-14 h-14 rounded-md" />

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h4 className="text-lg font-semibold">{item.name}</h4>
        <p className="text-gray-600 text-sm">
          ${item.price.toFixed(2)} | Discount: {item.discount}%
        </p>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded hover:bg-gray-300"
        >
          -
        </button>
        <span className="w-6 text-center">{item.qty}</span>
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="w-8 h-8 flex items-center justify-center bg-secondary_button text-white rounded hover:bg-secondary_button_hover"
        >
          +
        </button>
      </div>

      {/* Price */}
      <p className="text-green-500 font-semibold ml-4">
        ${(discountedPrice * item.qty).toFixed(2)}
      </p>
    </div>
  );
};

export default CartItem;
