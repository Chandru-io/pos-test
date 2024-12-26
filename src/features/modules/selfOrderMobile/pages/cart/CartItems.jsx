import { useState } from "react";
import CartSummary from "../../components/CartSummary";
import CartItem from "./CartItem";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const cartItem = [
  {
    name: "hari",
    items: [
      {
        id: 1,
        name: "Burger Mexican",
        price: 12.3,
        discount: 12,
        qty: 1,
        img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      },
      {
        id: 2,
        name: "Burger Mexican",
        price: 12.3,
        discount: 12,
        qty: 1,
        img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      },
    ],
  },
  {
    name: "rps",
    items: [
      {
        id: 3,
        name: "Burger Mexican",
        price: 12.3,
        discount: 12,
        qty: 1,
        img: "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
      },
    ],
  },
];

const MainCart = () => {
  const [cartItems, setCartItems] = useState(
    cartItem.map((customer) => ({ ...customer, confirmed: false }))
  );
  const [selectedCustomer, setSelectedCustomer] = useState(cartItems[0].name); // Default to the first customer
  const navigate = useNavigate();

  // Update quantity for a specific customer's item
  const updateQuantity = (customerName, id, delta) => {
    setCartItems((prev) =>
      prev.map((customer) =>
        customer.name === customerName
          ? {
              ...customer,
              items: customer.items.map((item) =>
                item.id === id
                  ? { ...item, qty: Math.max(1, item.qty + delta) }
                  : item
              ),
            }
          : customer
      )
    );
  };

  // Confirm order for a specific customer
  const confirmOrder = (customerName) => {
    setCartItems((prev) =>
      prev.map((customer) =>
        customer.name === customerName
          ? { ...customer, confirmed: true }
          : customer
      )
    );
    toast.success(`Order confirmed for ${customerName}`);
  };

  // Confirm all orders
  const confirmAllOrders = () => {
    setCartItems((prev) =>
      prev.map((customer) => ({ ...customer, confirmed: true }))
    );
    toast.success("All orders confirmed successfully!");
    navigate("confirm");
  };

  // Get the selected customer's details
  const currentCustomer = cartItems.find(
    (customer) => customer.name === selectedCustomer
  );

  const subTotal = currentCustomer.items.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const discount = currentCustomer.items.reduce(
    (total, item) => total + (item.discount / 100) * item.price * item.qty,
    0
  );

  const totalAmount = subTotal - discount;

  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-md h-screen">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Cart
      </h2>

      {/* Dropdown for selecting a customer */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Customer:
        </label>
        <select
          value={selectedCustomer}
          onChange={(e) => setSelectedCustomer(e.target.value)}
          className="block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-200"
        >
          {cartItems.map((customer) => (
            <option key={customer.name} value={customer.name}>
              {customer.name}
            </option>
          ))}
        </select>
      </div>

      {/* Render the selected customer's cart */}
      {currentCustomer && (
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Customer: {currentCustomer.name}
          </h3>

          <div className="space-y-4">
            {currentCustomer.items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={(id, delta) =>
                  !currentCustomer.confirmed &&
                  updateQuantity(currentCustomer.name, id, delta)
                }
              />
            ))}
          </div>

          <div className="mt-4 border-t pt-4">
            <CartSummary
              subTotal={subTotal}
              discount={discount}
              totalAmount={totalAmount}
              handleConfirm={() => confirmOrder(currentCustomer.name)}
              disabled={currentCustomer.confirmed}
            />
            {currentCustomer.confirmed && (
              <p className="text-green-500 mt-2">Order Confirmed</p>
            )}
          </div>
        </div>
      )}

      {/* Confirm All Button */}
      <div className="mt-6">
        <button
          onClick={confirmAllOrders}
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
        >
          Confirm All Orders
        </button>
      </div>
    </div>
  );
};

export default MainCart;
