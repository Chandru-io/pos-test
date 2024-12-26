import { Outlet } from "react-router";
import PropTypes from "prop-types";

const SettingLayout = ({ children }) => {
  return (
    <div>
      <main className="h-screen w-full items-center justify-center p-6">
        {children} <Outlet />
      </main>
    </div>
  );
};

export default SettingLayout;
SettingLayout.propTypes = {
  children: PropTypes.node,
};
