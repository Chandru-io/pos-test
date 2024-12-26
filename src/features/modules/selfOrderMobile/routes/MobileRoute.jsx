import { Navigate, Route, Routes } from "react-router";
import MobileLayout from "../layout/Layout";
import Orders from "../pages/orders/Orders";
import MainCart from "../pages/cart/CartItems";
import Food from "../pages/food/Food";
import OrderConfirmation from "../pages/orders/OrderConfemation";
import OrderModify from "../pages/orders/Modifier";

const MobileRoute = () => {
  return (
    <MobileLayout>
      <Routes>
        <Route path="/" element={<Navigate to="food" />} />
        <Route path="food" element={<Food />} />
        <Route path="cart" element={<MainCart />} />
        <Route path="orders" element={<Orders />} />
        <Route path="cart/confirm" element={<OrderConfirmation />} />
        <Route path="cart/confirm/food" element={<Food />} />
        <Route path="orders/modifier" element={<OrderModify />} />
      </Routes>
    </MobileLayout>
  );
};

export default MobileRoute;
