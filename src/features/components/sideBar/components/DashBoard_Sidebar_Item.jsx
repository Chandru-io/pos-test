import { hasAccess } from "../../../helper/helper";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { MdOutlineDashboard } from "react-icons/md";
import { DASHBOARD_SIDEBAR } from "../../../data/Permissiondata";
import { MenuItem } from "react-pro-sidebar";
import { useTranslation } from "react-i18next";

const DashBoard_Sidebar_Item = () => {
  const permission = useSelector((state) => state.permission.permissions);
  const { t } = useTranslation();

  return (
    <>
      {hasAccess(permission, DASHBOARD_SIDEBAR) && (
        <MenuItem
          component={<Link to="/Dashboard" />}
          icon={<MdOutlineDashboard />}
        >
          {t("sidebar.Dashboard")}
        </MenuItem>
      )}
    </>
  );
};

export default DashBoard_Sidebar_Item;
