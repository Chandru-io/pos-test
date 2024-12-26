import PropTypes from "prop-types";
import { Outlet } from "react-router";

const ReportLayout = ({ children }) => {
  return (
    <div className="w-full">
      {children}
      <Outlet />
    </div>
  );
};

export default ReportLayout;

ReportLayout.propTypes = {
  children: PropTypes.node,
};
