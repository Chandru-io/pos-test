import PropTypes from "prop-types";
import { Outlet } from "react-router";
import NavFooter from "../components/Footer";

const MobileLayout = ({ children }) => {
  return (
    <div>
      <main>
        {children}

        <Outlet />
      </main>
      <div className="sticky bottom-0 bg-white shadow-md">
        <NavFooter />
      </div>
    </div>
  );
};

export default MobileLayout;

MobileLayout.propTypes = {
  children: PropTypes.node,
};
