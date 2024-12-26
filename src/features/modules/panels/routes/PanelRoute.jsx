import { Route, Routes } from "react-router";
import PosLayout from "../layout/PosLayout";
import WaiterPanel from "../waiterPanel/WaiterPanel";
import KitchenList from "../kitchenPanel/KitchenList";
import KitchenPanel from "../kitchenPanel/component/KitchenPanel";

const PanelRoute = () => {
  return (
    <Routes>
      <Route path="main" element={<PosLayout />} />

      <Route path="kitchen-lists" element={<KitchenList />} />
      <Route path="kitchen-lists/kitchen-panel" element={<KitchenPanel />} />
      <Route path="waiter-panel" element={<WaiterPanel />} />
    </Routes>
  );
};

export default PanelRoute;
