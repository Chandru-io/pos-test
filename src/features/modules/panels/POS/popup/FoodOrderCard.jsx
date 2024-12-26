/* eslint-disable react/prop-types */

import { useState } from "react";

function OrderOptions({
  optionTitle,
  optionMenus = [],
  gridCols = 3,
  selectedOption,
  setSelectedOption,
  type = "Primary",
}) {
  return (
    <div className="my-2">
      <h5 className="text-[#777980] text-left text-lg font-semibold">
        {optionTitle}
      </h5>
      <div className={`grid grid-cols-${gridCols} gap-3`}>
        {type === "Primary"
          ? optionMenus.map(({ id, name }) => (
              <p
                key={id}
                className={`p-2 rounded-3xl my-2 cursor-pointer text-center border  ${
                  selectedOption?.id === id
                    ? "text-[#064E79] bg-gradient-to-r from-white to-custom-blue border-custom-blue border-2 text-[]"
                    : "bg-white text-[#607171]  border-2 "
                }`}
                onClick={() => setSelectedOption({ id, name })}
              >
                {name}
              </p>
            ))
          : optionMenus.map(({ id, name, price }) => (
              <div
                key={id}
                className={`py-2 px-4 rounded-3xl my-2 cursor-pointer flex justify-between items-center border  ${
                  selectedOption?.id === id
                    ? "text-[#064E79] bg-gradient-to-r from-white to-custom-blue border-custom-blue border-2 text-[]"
                    : "bg-white text-[#607171]  border-2 "
                }`}
                onClick={() => setSelectedOption({ id, name })}
              >
                <span>{name}</span>
                <span>${price}</span>
              </div>
            ))}
      </div>
    </div>
  );
}

function ModifierGroup({ category, selectedItems, onToggle }) {
  return (
    <div className="w-full md:w-1/2 p-2">
      <h3 className="font-semibold text-gray-700">{category.category}</h3>
      <div className="rounded-md p-2">
        {category.items.map((item) => (
          <ModifierItem
            key={item.id}
            item={item}
            isSelected={selectedItems.includes(item.id)}
            onChange={onToggle}
          />
        ))}
      </div>
    </div>
  );
}

function ModifierItem({ item, isSelected, onChange }) {
  return (
    <div className="flex items-center justify-between my-1">
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onChange(item.id)}
          className="text-green-500 focus:ring-0"
        />
        <span>{item.name}</span>
      </label>
      <span className="text-gray-700">${item.price.toFixed(2)}</span>
    </div>
  );
}

function ActionButtons({ onAddToCart, handleCancel }) {
  return (
    <div className="flex justify-end gap-x-2  pb-4">
      <button
        onClick={onAddToCart}
        className="bg-green-500 text-white px-4 py-2 rounded-md"
      >
        Add to Cart
      </button>
      <button
        onClick={handleCancel}
        className="border  px-4 py-2 rounded-md bg-white"
      >
        Cancel
      </button>
    </div>
  );
}

function PreparationNote({ note, setNote }) {
  return (
    <div className="mb-4">
      <label className="text-gray-600 block mb-1">Preparation Note</label>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-green-500"
        placeholder="Add any preparation notes here"
      />
    </div>
  );
}

function Total({ total }) {
  return (
    <div className="flex justify-between mb-4">
      <span className="text-gray-600 font-semibold">Total</span>
      {/* <span className="text-blue-600 font-semibold">{`$${total.toFixed(2)}`}</span> */}
      <span className="text-blue-600 font-semibold">{total}</span>
    </div>
  );
}

function Discount({ discount, promoDiscount }) {
  return (
    <div className="flex justify-between mb-2">
      <span className="text-gray-600">Discount</span>
      <span>{discount ? `$${discount}` : ""}</span>
      <span className="text-orange-500">{`Promo Discount $${promoDiscount.toFixed(
        2
      )}`}</span>
    </div>
  );
}

const CATEGORY_LIST = [
  { id: "C1", name: "Extra Large" },
  { id: "C2", name: "Gluten Free" },
];

const SUB_CATEGORY_LIST = [
  { id: "SC1", name: "Small" },
  { id: "SC2", name: "Medium" },
  { id: "SC3", name: "Large" },
  { id: "SC4", name: "Giant Slice" },
];

const VARIANT_LIST = [
  { id: "V1", name: "Garlic Pizza", price: 6.8 },
  { id: "V2", name: "XL BBQ Chicken", price: 8.5 },
  { id: "V3", name: "Margherita", price: 7.2 },
  { id: "V4", name: "Veggie Delight", price: 7.5 },
  { id: "V5", name: "Hawaiian", price: 8.0 },
  { id: "V6", name: "XL Aussie", price: 9.0 },
];

const EXTRA_MODIFIERS = [
  {
    category: "Others",
    items: [
      { id: "O1", name: "Vegan Cheese", price: 1.0 },
      { id: "O2", name: "Pizza Sauce", price: 1.0 },
      { id: "O3", name: "Broccoli", price: 1.0 },
      { id: "O4", name: "Vegan Aioli", price: 1.0 },
    ],
  },
  {
    category: "Cheese",
    items: [
      { id: "C1", name: "Cheese", price: 1.0 },
      { id: "C2", name: "Fetta Cheese", price: 1.0 },
      { id: "C3", name: "Mozzarella Cheese", price: 1.0 },
      { id: "C4", name: "Buffalo Cheese", price: 1.0 },
    ],
  },
  {
    category: "Sauces",
    items: [
      { id: "S1", name: "Tomato Base", price: 1.0 },
      { id: "S2", name: "BBQ Sauce", price: 1.0 },
      { id: "S3", name: "Peri Peri Sauce", price: 1.0 },
      { id: "S4", name: "Yoghurt Mint", price: 1.0 },
    ],
  },
  {
    category: "Veggies",
    items: [
      { id: "V1", name: "Mushrooms", price: 1.0 },
      { id: "V2", name: "Spanish Onion", price: 1.0 },
      { id: "V3", name: "Capsicum", price: 1.0 },
      { id: "V4", name: "Capers", price: 1.0 },
    ],
  },
];

const FoodOrderCardModal = ({
  productName,
  onCloseModal,
  productPrice,
  setOrders,
}) => {
  const [category, setCategory] = useState();
  const [subcategory, setSubCategory] = useState();
  const [variant, setVariant] = useState();
  const [modifierTitle, setModifierTitle] = useState("Show Extra Modifiers");
  const [showExtraModifier, setShowExtraModifier] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [note, setNote] = useState("");
  const promoDiscount = 2.0;
  const total = productPrice;

  const handleAddToCart = () => {
    const randomNumber = Math.random() * 100 + 1;

    let newCart = {
      id: `ORDER${randomNumber}`,
      name: productName,
      amount: Number(productPrice),
      discount: "2%",
      quantity: 1,
    };

    setOrders((prev) => [...prev, newCart]);
    onCloseModal();
  };

  const handleCancel = () => {
    onCloseModal();
  };

  const handleToggle = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const toggleExtraModifier = () => {
    setShowExtraModifier(!showExtraModifier);
    setModifierTitle(
      showExtraModifier ? "Show Extra Modifiers" : "Hide Extra Modifiers"
    );
  };
  return (
    <div className="bg-white  w-full    rounded-lg  relative ">
      <h3 className=" text-xl font-semibold text-[#064E79] text-center ">
        {productName}
      </h3>

      <div className=" " />
      <div className="h-[55vh] overflow-y-scroll scrollbar-hide ">
        <div className="   mx-auto ">
          <div className="border-4 border-dashed border-[#3FB547] pt-2 pb-3 bg-[#E9FAF7] rounded-3xl">
            <h5 className="text-center text-lg text-[#3FB547] font-semibold">
              Flat Amount Offer !{" "}
            </h5>
            <p className="text-center pb-1 text-[#777980] font-thin">
              2% discount is available for this order
            </p>
          </div>
        </div>
        <div className="">
          <OrderOptions
            optionTitle="Category"
            optionMenus={CATEGORY_LIST}
            selectedOption={category}
            setSelectedOption={setCategory}
            gridCols={3}
            type="Primary"
          />

          <OrderOptions
            optionTitle="SubCategory"
            optionMenus={SUB_CATEGORY_LIST}
            selectedOption={subcategory}
            setSelectedOption={setSubCategory}
            gridCols={4}
            type="Primary"
          />

          <OrderOptions
            optionTitle="Variant"
            optionMenus={VARIANT_LIST}
            selectedOption={variant}
            setSelectedOption={setVariant}
            gridCols={3}
            type="Secondary"
          />
          <div className="flex justify-between items-center pr-2">
            <h5 className="text-[#777980] text-left text-lg font-semibold ">
              Modifiers
            </h5>
            <button
              className="rounded-md border-2 border-[#3FB547] text-center text-[#3FB547] cursor-pointer p-1 text-sm bg-white"
              onClick={toggleExtraModifier}
            >
              {modifierTitle}
            </button>
          </div>
          <div className="flex flex-wrap">
            {(showExtraModifier ? EXTRA_MODIFIERS : [EXTRA_MODIFIERS[0]]).map(
              (category) => (
                <ModifierGroup
                  key={category.category}
                  category={category}
                  selectedItems={selectedItems}
                  onToggle={handleToggle}
                />
              )
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col   mt-2">
        <Discount promoDiscount={promoDiscount} />
        <Total total={total} />
        <div className="border-b-2 mb-2" />
        <PreparationNote note={note} setNote={setNote} />
        <ActionButtons onAddToCart={handleAddToCart} onCancel={handleCancel} />
      </div>
    </div>
  );
};

export default FoodOrderCardModal;
