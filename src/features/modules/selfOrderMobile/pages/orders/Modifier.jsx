/* eslint-disable react/prop-types */

import { useState } from "react";
import toast from "react-hot-toast";
import { ModifyDrawer } from "../../components/ModifierDrawer";

const OrderModify = () => {
  // Sample dynamic data for order items
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

  // Handle status modification
  const handleModify = (id) => {
    setIsOpen(true);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, status: "Cooking" } : item
      )
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const handleConfirm = () => {
    toast.success("Modifier added Successfully");

    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="p-5 h-screen">
      <h2 className="text-2xl font-bold mb-2 text-center">Modify</h2>
      <h4 className="text-lg font-semibold mb-4">Order Items</h4>

      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center mb-4 border-b border-gray-200 pb-2"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-12 h-12 mr-4 rounded"
          />
          <div className="flex-1">
            <span className="text-gray-800 font-medium">{item.name}</span>
          </div>
          {item.status === "Cooking" ? (
            <button className="bg-blue-50 text-blue-500 border border-blue-300 px-3 py-1 rounded">
              • Cooking
            </button>
          ) : (
            <button
              onClick={() => handleModify(item.id)}
              className="bg-gray-100 text-gray-700 border border-gray-300 px-3 py-1 rounded hover:bg-gray-200"
            >
              Modify
            </button>
          )}
        </div>
      ))}

      <ModifyDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        handleConfirm={handleConfirm}
      />
    </div>
  );
};

export default OrderModify;
