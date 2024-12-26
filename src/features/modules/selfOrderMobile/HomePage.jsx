import { useState } from "react";
import Food from "./pages/food/Food";
import MainCart from "./pages/cart/CartItems";
import OrderConfirmation from "./pages/orders/OrderConfemation";
import Orders from "./pages/orders/Orders";
import OrderModify from "./pages/orders/Modifier";

const HomePage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger Mexican", price: 12.3, discount: 12, qty: 1 },
    { id: 2, name: "Burger Mexican", price: 12.3, discount: 12, qty: 1 },
    { id: 3, name: "Burger Mexican", price: 12.3, discount: 12, qty: 1 },
  ]);

  // Function to update quantity
  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
      )
    );
  };

  const orderItems = [
    {
      name: "Burger Mexican",
      price: 24.6,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
    {
      name: "Burger Mexican",
      price: 24.6,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
    {
      name: "Burger Mexican",
      price: 24.6,
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
  ];

  const orderDetail = {
    id: "125151515",
    customerName: "James Vasanth",
    table: "VIP Table one",
    type: "Dine-In",
    waiter: "Anthony dos",
  };

  const summary = {
    totalItems: 3,
    subTotal: 0,
    discount: 0.0,
    totalDiscount: 0.0,
    tax: 0.0,
    charges: 0.0,
    totalAmount: 25.9,
  };

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Burger Mexican",
      status: "Cooking",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
    {
      id: 2,
      name: "Burger Mexican",
      status: "Modify",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
    {
      id: 3,
      name: "Burger Mexican",
      status: "Modify",
      image:
        "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
    },
  ]);

  return (
    <div>
      <Food />
      <MainCart cartItems={cartItems} updateQuantity={updateQuantity} />

      <Orders
        orderItems={orderItems}
        orderDetails={orderDetail}
        summary={summary}
      />
      <OrderModify items={items} setItems={setItems} />
    </div>
  );
};

export default HomePage;
