import { Route, Routes } from "react-router";
import PosRoute from "./features/routes/PosRoute.jsx";
import MobileRoute from "./features/modules/selfOrderMobile/routes/MobileRoute.jsx";
import "./i18n.js";

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<PosRoute />} />
      <Route path="mobile/*" element={<MobileRoute />} />
    </Routes>
  );
};

export default App;
