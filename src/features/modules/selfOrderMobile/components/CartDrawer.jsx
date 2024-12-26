/* eslint-disable react/prop-types */
import { Drawer } from "flowbite-react";
import { useState } from "react";

export function CartDrawer({ isOpen, onClose, handleConfirm }) {
  const [modifiers, setModifiers] = useState({
    bread: "Extra Large",
    size: "Medium",
    variant: ["Garlic Pizza - $120"],
    preparationNotes: "",
    quantity: 1,
  });

  const handleCheckboxChange = (type, value) => {
    setModifiers((prev) => {
      if (type === "variant") {
        const updatedVariant = prev.variant.includes(value)
          ? prev.variant.filter((item) => item !== value)
          : [...prev.variant, value];
        return { ...prev, [type]: updatedVariant };
      }
      return { ...prev, [type]: value };
    });
  };

  const handleQuantityChange = (change) => {
    setModifiers((prev) => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + change),
    }));
  };

  return (
    <>
      <Drawer open={isOpen} onClose={onClose} position="bottom">
        <Drawer.Header />
        <Drawer.Items>
          <div className="max-w-lg mx-auto p-4 border rounded-md shadow-lg ">
            {/* Image and Title */}
            <div className="text-center mb-4">
              <img
                src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                alt="Turkey Burger"
                className="w-full rounded-md"
              />
              <h2 className="text-2xl font-bold mt-2">Turkey Burger</h2>
            </div>

            {/* Modifiers */}
            <div>
              <h3 className="font-semibold mb-2">Modifier</h3>

              {/* Bread */}
              <div>
                <h4 className="text-gray-700">Bread</h4>
                <label>
                  <input
                    type="checkbox"
                    name="bread"
                    checked={modifiers.bread === "Extra Large"}
                    onChange={() =>
                      handleCheckboxChange("bread", "Extra Large")
                    }
                    className="rounded text-primary "
                  />
                  Extra Large
                </label>
                <label className="ml-4">
                  <input
                    type="checkbox"
                    name="bread"
                    checked={modifiers.bread === "Gluten Large"}
                    onChange={() =>
                      handleCheckboxChange("bread", "Gluten Large")
                    }
                    className="rounded text-primary "
                  />
                  Gluten Large
                </label>
              </div>

              {/* Size */}
              <div className="mt-3">
                <h4 className="text-gray-700">Size</h4>
                {["Small", "Medium", "Large", "Giants Slice"].map((size) => (
                  <label key={size} className="mr-4">
                    <input
                      type="checkbox"
                      name="size"
                      checked={modifiers.size === size}
                      onChange={() => handleCheckboxChange("size", size)}
                      className="rounded text-primary "
                    />
                    {size}
                  </label>
                ))}
              </div>

              {/* Variant */}
              <div className="mt-3">
                <h4 className="text-gray-700">Variant</h4>
                {["Garlic Pizza - $120", "Garlic Pizza - $120"].map(
                  (variant, idx) => (
                    <label key={idx} className="mr-4">
                      <input
                        type="checkbox"
                        checked={modifiers.variant.includes(variant)}
                        onChange={() =>
                          handleCheckboxChange("variant", variant)
                        }
                        className="rounded text-primary "
                      />
                      {variant}
                    </label>
                  )
                )}
              </div>

              {/* Preparation Notes */}
              <div className="mt-4">
                <h4 className="text-gray-700">Preparation Notes</h4>
                <textarea
                  className="w-full border rounded p-2"
                  placeholder="Write your instruction here"
                  value={modifiers.preparationNotes}
                  onChange={(e) =>
                    setModifiers({
                      ...modifiers,
                      preparationNotes: e.target.value,
                    })
                  }
                ></textarea>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <button
                  className="border px-3 py-1 text-lg rounded text-white "
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <span className="mx-3">{modifiers.quantity}</span>
                <button
                  className="border px-3 py-1 text-lg rounded text-white"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-green-500 text-white px-6 py-2 rounded"
                onClick={handleConfirm}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
