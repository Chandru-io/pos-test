import { Route, Routes } from "react-router";

import Unauthorized from "../../../components/Unauthorized";
import { hasAccess } from "../../../helper/helper";
import { useSelector } from "react-redux";
import {
  ITEMS_INGREDIENT_UNIT,
  ITEMS_INGREDIENT_CATEGORY,
  ITEMS_INGREDIENTS_LIST,
  ITEMS_MODIFIER,
  ITEMS_FOOD_MENU_CATEGORY,
  ITEMS_FOOD_MENU,
  ITEMS_PRE_MADE_FOOD,
} from "../../../data/Permissiondata";
import IngredientUnits from "../sections/ingredientUnit/IngredientUnit";
import IngredientCategory from "../sections/ingredientCategory/IngredientCategory";
import IngredientsList from "../sections/ingredientsList/IngredientsList";
import Modifiers from "../sections/modifier/Modifier";
import FoodMenuCategory from "../sections/foodMenuCategory/FoodmenuCategory";
import FoodMenu from "../sections/foodMenu/FoodMenu";
import PremadeFood from "../sections/preMadeFood/PreMadeFood";
import AddFoodMenuPopup from "../sections/foodMenu/components/AddFoodMenu";
import EditFoodMenuPopup from "../sections/foodMenu/components/EditFoodMenu";

const ItemRoute = () => {
  const permission = useSelector((state) => state.permission.permissions);

  const routes = [
    {
      path: "/ingredient-unit",
      element: <IngredientUnits />,
      permission: `${ITEMS_INGREDIENT_UNIT}.view`,
    },
    {
      path: "/ingredient-category",
      element: <IngredientCategory />,
      permission: `${ITEMS_INGREDIENT_CATEGORY}.view`,
    },
    {
      path: "/ingredient-list",
      element: <IngredientsList />,
      permission: `${ITEMS_INGREDIENTS_LIST}.view`,
    },
    {
      path: "/ingredient-modifier",
      element: <Modifiers />,
      permission: `${ITEMS_MODIFIER}.view`,
    },
    {
      path: "/food-menu-category",
      element: <FoodMenuCategory />,
      permission: `${ITEMS_FOOD_MENU_CATEGORY}.view`,
    },
    {
      path: "/food-menu/*",
      element: <FoodMenu />,
      permission: `${ITEMS_FOOD_MENU}.view`,
    },
    {
      path: "/food-menu/create",
      element: <AddFoodMenuPopup />,
      permission: `${ITEMS_FOOD_MENU}.create`,
    },
    {
      path: "/food-menu/edit",
      element: <EditFoodMenuPopup />,
      permission: `${ITEMS_FOOD_MENU}.edit`,
    },
    {
      path: "/pre-made-food",
      element: <PremadeFood />,
      permission: `${ITEMS_PRE_MADE_FOOD}.view`,
    },
  ];

  const accessibleRoutes = routes.filter((route) =>
    hasAccess(permission, route.permission)
  );

  return (
    <Routes>
      {accessibleRoutes.length > 0 ? (
        accessibleRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))
      ) : (
        <Route path="*" element={<Unauthorized />} />
      )}
      {/* <Route path="*" element={<Unauthorized />} /> */}
    </Routes>
  );
};

export default ItemRoute;
