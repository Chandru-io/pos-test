import { NavLink } from "react-router";

const Tabs = () => {
  const tabs = [
    { name: "Ingredient Units", path: "/admin/pos/items/ingredient-units" },
    {
      name: "Ingredient Category",
      path: "/admin/pos/items/ingredient-category",
    },
    { name: "Ingredients List", path: "/admin/pos/items/ingredient-list" },
    { name: "Modifiers", path: "/admin/pos/items/modifiers" },
    { name: "Food Menu Category", path: "/admin/pos/items/food-menu-category" },
    { name: "Food Menu", path: "/admin/pos/items/food-menu" },
    { name: "Pre-made Food", path: "/admin/pos/items/pre-made-food" },
  ];

  return (
    <div className="flex gap-4 justify-evenly  space-x-4 shadow-md rounded-full bg-white p-1 my-4 ">
      {tabs.map((tab) => (
        <NavLink
          to={tab.path}
          key={tab.name}
          className={({ isActive }) =>
            isActive
              ? "text-white bg-[#064E79] rounded-full py-2 px-8 font-bold  "
              : "text-gray-600 hover:text-white hover:bg-green-500 rounded-full p-2 py-2 px-8"
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Tabs;
