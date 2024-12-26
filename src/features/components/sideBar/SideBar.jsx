import { useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router";
import { LuPanelBottom } from "react-icons/lu";
import { RiAlignItemLeftLine } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { GiExpense } from "react-icons/gi";
import { GiNuclearWaste } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { TbReportSearch } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import { IoPricetagsOutline } from "react-icons/io5";
import { AiOutlineProduct } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import { hasAccess } from "../../helper/helper";
import {
  ATTENDANCE_SIDEBAR,
  EXPENSES_EXPENSE_ITEM,
  EXPENSES_EXPENSES,
  EXPENSES_SIDEBAR,
  ITEMS_FOOD_MENU,
  ITEMS_FOOD_MENU_CATEGORY,
  ITEMS_INGREDIENT_CATEGORY,
  ITEMS_INGREDIENT_UNIT,
  ITEMS_INGREDIENTS_LIST,
  ITEMS_MODIFIER,
  ITEMS_PRE_MADE_FOOD,
  ITEMS_SIDEBAR,
  PANELS_KITCHEN,
  PANELS_POS_DASHBOARD,
  PANELS_SIDEBAR,
  PANELS_WAITER,
  PRODUCTION_SIDEBAR,
  PURCHASE_DUE_PAYMENTS,
  PURCHASE_PURCHASE,
  PURCHASE_SIDEBAR,
  PURCHASE_SUPPLIER,
  REPORTS_REGISTER,
  REPORTS_SIDEBAR,
  REPORTS_Z_REPORT,
  SALES_CUSTOMER,
  SALES_PROMOTION,
  SALES_SALES,
  SALES_SIDEBAR,
  STOCKS_ALL_STOCKS,
  STOCKS_LOW_STOCKS,
  STOCKS_SIDEBAR,
  STOCKS_SLOW_MOVING_STOCKS,
  STOCKS_STOCKS_ADJUSTMENTS,
  WASTE_LIST_SIDEBAR,
  REPORTS_PRODUCTION_ANALYSIS_REPORT,
  REPORTS_DAILY_SUMMARY_REPORT,
  REPORTS_FOOD_SALE_REPORT,
  REPORTS_DAILY_SALES_REPORT,
  REPORTS_DETAILED_SALES_REPORT,
  REPORTS_CONSUMPTION_REPORT,
  REPORTS_STOCK_REPORT,
  REPORTS_LOW_STOCK_REPORT,
  REPORTS_PROFIT_LOSS_REPORT,
  REPORTS_SUPPLIER_DUE_REPORT,
  REPORTS_CUSTOMER_LEDGER_REPORT,
  REPORTS_CUSTOMER_DUE_REPORT,
  REPORTS_PURCHASE_REPORT,
  REPORTS_EXPENSE_REPORT,
  REPORTS_WASTE_REPORT,
  REPORTS_TAX_REPORT,
  REPORTS_ATTENDANCE_REPORT,
  REPORTS_FOOD_MENU_SALES_BY_CATEGORY,
  REPORTS_AVAILABLE_LOYALTY_POINT,
  REPORTS_USAGE_LOYALTY_POINT,
  REPORTS_PRODUCTION_REPORT,
  USER_MANAGEMENT_SIDEBAR,
  USER_MANAGEMENT_USER,
  USER_MANAGEMENT_ROLES,
  SETTINGS_SIDEBAR,
  SETTINGS_SYSTEM_SETTINGS,
  SETTINGS_PRINTER,
  SETTINGS_COUNTER,
  SETTINGS_TAX_SETTING,
  SETTINGS_MULTIPLE_CURRENCY,
  SETTINGS_SELF_ORDER_SETTING,
  SETTINGS_RESERVATION_SETTING,
  SETTINGS_PAYMENT_METHODS,
  SETTINGS_DELIVERY_PARTNER,
  SETTINGS_AREA_FLOOR,
  SETTINGS_TABLE,
} from "../../data/Permissiondata";
import DashBoard_Sidebar_Item from "./components/DashBoard_Sidebar_Item";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const [openSubMenu, setOpenSubMenu] = useState("");
  const [collapsed, setCollapsed] = useState(true);

  const handleSubMenuClick = (submenuLabel) => {
    setOpenSubMenu((prev) => (prev === submenuLabel ? "" : submenuLabel));
  };

  const { t } = useTranslation();

  const permission = useSelector((state) => state.permission.permissions);

  return (
    <>
      <Sidebar
        backgroundColor="white"
        style={{ height: "100vh ", position: "sticky", top: 0, zIndex: 10 }}
        collapsed={!collapsed}
      >
        <Menu className="scrollbar-hide h-screen">
          <MenuItem onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <FaAngleLeft /> : <FaAngleRight />}
          </MenuItem>
          <DashBoard_Sidebar_Item />
          {hasAccess(permission, PANELS_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.Panels.Panels")}
              open={openSubMenu === "Panels"}
              onClick={() => handleSubMenuClick("Panels")}
              icon={<LuPanelBottom />}
            >
              {hasAccess(permission, `${PANELS_POS_DASHBOARD}.view`) && (
                <MenuItem component={<Link to="/panels/main" />}>
                  {t("sidebar.Panels.Pos Dashboard")}
                </MenuItem>
              )}
              {hasAccess(permission, `${PANELS_WAITER}.view`) && (
                <MenuItem component={<Link to="/panels/waiter-panel " />}>
                  {t("sidebar.Panels.Waiter")}
                </MenuItem>
              )}
              {hasAccess(permission, `${PANELS_KITCHEN}.view`) && (
                <MenuItem component={<Link to="/panels/kitchen-lists" />}>
                  {t("sidebar.Panels.Kitchen")}
                </MenuItem>
              )}
            </SubMenu>
          )}
          {hasAccess(permission, ITEMS_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.Item.Item")}
              open={openSubMenu === "Item"}
              onClick={() => handleSubMenuClick("Item")}
              icon={<RiAlignItemLeftLine />}
            >
              {hasAccess(permission, `${ITEMS_INGREDIENT_UNIT}.view`) && (
                <MenuItem component={<Link to="/items/ingredient-unit" />}>
                  {t("sidebar.Item.ingredient unit")}
                </MenuItem>
              )}
              {hasAccess(permission, `${ITEMS_INGREDIENT_CATEGORY}.view`) && (
                <MenuItem component={<Link to="/items/ingredient-category" />}>
                  {t("sidebar.Item.ingredient Category")}
                </MenuItem>
              )}
              {hasAccess(permission, `${ITEMS_INGREDIENTS_LIST}.view`) && (
                <MenuItem component={<Link to="/items/ingredient-list" />}>
                  {t("sidebar.Item.ingredient list")}
                </MenuItem>
              )}
              {hasAccess(permission, `${ITEMS_MODIFIER}.view`) && (
                <MenuItem component={<Link to="/items/ingredient-modifier" />}>
                  {t("sidebar.Item.Modifier")}
                </MenuItem>
              )}
              {hasAccess(permission, `${ITEMS_FOOD_MENU_CATEGORY}.view`) && (
                <MenuItem component={<Link to="/items/food-menu-category" />}>
                  {t("sidebar.Item.FoodMenu category")}
                </MenuItem>
              )}
              {hasAccess(permission, `${ITEMS_FOOD_MENU}.view`) && (
                <MenuItem component={<Link to="/items/food-menu" />}>
                  {t("sidebar.Item.Food Menu")}
                </MenuItem>
              )}
              {hasAccess(permission, `${ITEMS_PRE_MADE_FOOD}.view`) && (
                <MenuItem component={<Link to="/items/pre-made-food" />}>
                  {t("sidebar.Item.Pre Made Food")}
                </MenuItem>
              )}
            </SubMenu>
          )}
          {hasAccess(permission, STOCKS_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.Stocks.Stocks")}
              open={openSubMenu === "Stocks"}
              onClick={() => handleSubMenuClick("Stocks")}
              icon={<AiOutlineStock />}
            >
              {hasAccess(permission, `${STOCKS_ALL_STOCKS}.view`) && (
                <MenuItem component={<Link to="/stocks/all-stocks" />}>
                  {t("sidebar.Stocks.All Stocks")}
                </MenuItem>
              )}
              {hasAccess(permission, `${STOCKS_LOW_STOCKS}.view`) && (
                <MenuItem component={<Link to="/stocks/low-stocks" />}>
                  {t("sidebar.Stocks.Low Stocks")}
                </MenuItem>
              )}
              {hasAccess(permission, `${STOCKS_SLOW_MOVING_STOCKS}.view`) && (
                <MenuItem component={<Link to="/stocks/slow-stocks" />}>
                  {t("sidebar.Stocks.Slow Moving Stocks")}
                </MenuItem>
              )}
              {hasAccess(permission, `${STOCKS_STOCKS_ADJUSTMENTS}.view`) && (
                <MenuItem component={<Link to="/stocks/adjust-stocks" />}>
                  {t("sidebar.Stocks.Stock Adjustment")}
                </MenuItem>
              )}
            </SubMenu>
          )}

          {hasAccess(permission, PURCHASE_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.Purchase.Purchase")}
              open={openSubMenu === "Purchase"}
              onClick={() => handleSubMenuClick("Purchase")}
              icon={<BiPurchaseTagAlt />}
            >
              {hasAccess(permission, `${PURCHASE_PURCHASE}.view`) && (
                <MenuItem component={<Link to="/purchase/purchase" />}>
                  {t("sidebar.Purchase.Purchase")}
                </MenuItem>
              )}
              {hasAccess(permission, `${PURCHASE_SUPPLIER}.view`) && (
                <MenuItem component={<Link to="/purchase/supplier" />}>
                  {t("sidebar.Purchase.Supplier")}
                </MenuItem>
              )}
              {hasAccess(permission, `${PURCHASE_DUE_PAYMENTS}.view`) && (
                <MenuItem
                  component={<Link to="/purchase/vendor-due-payment" />}
                >
                  {t("sidebar.Purchase.Due Payment")}
                </MenuItem>
              )}
            </SubMenu>
          )}
          {hasAccess(permission, PRODUCTION_SIDEBAR) && (
            <MenuItem
              component={<Link to="/production" />}
              icon={<AiOutlineProduct />}
            >
              {t("sidebar.Production")}
            </MenuItem>
          )}
          {hasAccess(permission, SALES_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.sales.sales")}
              open={openSubMenu === "Sales"}
              onClick={() => handleSubMenuClick("Sales")}
              icon={<IoPricetagsOutline />}
            >
              {hasAccess(permission, `${SALES_SALES}.view`) && (
                <MenuItem component={<Link to="/sales/sales" />}>
                  {t("sidebar.sales.sales")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SALES_CUSTOMER}.view`) && (
                <MenuItem component={<Link to="/sales/customer" />}>
                  {t("sidebar.sales.Customer")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SALES_PROMOTION}.view`) && (
                <MenuItem component={<Link to="/sales/promotion" />}>
                  {t("sidebar.sales.Promotion")}
                </MenuItem>
              )}
            </SubMenu>
          )}
          {hasAccess(permission, EXPENSES_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.Expense.Expense")}
              open={openSubMenu === "Expense"}
              onClick={() => handleSubMenuClick("Expense")}
              icon={<GiExpense />}
            >
              {hasAccess(permission, `${EXPENSES_EXPENSE_ITEM}.view`) && (
                <MenuItem component={<Link to="/expense/expense" />}>
                  {t("sidebar.Expense.Expense Item")}
                </MenuItem>
              )}

              {hasAccess(permission, `${EXPENSES_EXPENSES}.view`) && (
                <MenuItem component={<Link to="/expense/expense-items" />}>
                  {t("sidebar.Expense.Expense")}
                </MenuItem>
              )}
            </SubMenu>
          )}
          {hasAccess(permission, WASTE_LIST_SIDEBAR) && (
            <MenuItem
              component={<Link to="/waste-list" />}
              icon={<GiNuclearWaste />}
            >
              {t("sidebar.Waste List")}
            </MenuItem>
          )}
          {hasAccess(permission, ATTENDANCE_SIDEBAR) && (
            <MenuItem
              component={<Link to="/attendance" />}
              icon={<IoIosPeople />}
            >
              {t("sidebar.Attendance")}
            </MenuItem>
          )}
          {hasAccess(permission, REPORTS_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.Reports.Reports")}
              open={openSubMenu === "Reports"}
              onClick={() => handleSubMenuClick("Reports")}
              icon={<TbReportSearch />}
            >
              {hasAccess(permission, `${REPORTS_REGISTER}.view`) && (
                <MenuItem component={<Link to="/reports/register-report" />}>
                  {t("sidebar.Reports.Register")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_Z_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/z-report" />}>
                  {t("sidebar.Reports.Reports")}
                </MenuItem>
              )}
              {hasAccess(
                permission,
                `${REPORTS_PRODUCTION_ANALYSIS_REPORT}.view`
              ) && (
                <MenuItem
                  component={<Link to="/reports/production-analysis-report" />}
                >
                  {t("sidebar.Reports.Production Analysis Report")}
                </MenuItem>
              )}
              {hasAccess(
                permission,
                `${REPORTS_DAILY_SUMMARY_REPORT}.view`
              ) && (
                <MenuItem
                  component={<Link to="/reports/daily-summary-report" />}
                >
                  {t("sidebar.Reports.Daily Summary")}
                </MenuItem>
              )}

              {hasAccess(permission, `${REPORTS_DAILY_SALES_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/food-sale-report" />}>
                  {t("sidebar.Reports.Food Sales Report")}
                </MenuItem>
              )}
              {hasAccess(
                permission,
                `${REPORTS_DETAILED_SALES_REPORT}.view`
              ) && (
                <MenuItem component={<Link to="/reports/daily-sales-report" />}>
                  {t("sidebar.Reports.Daily Sales Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_CONSUMPTION_REPORT}.view`) && (
                <MenuItem
                  component={<Link to="/reports/detailed-sales-report" />}
                >
                  {t("sidebar.Reports.Detailed Sales Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_STOCK_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/consumption-report" />}>
                  {t("sidebar.Reports.Consumption Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_LOW_STOCK_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/stock-report" />}>
                  {t("sidebar.Reports.Stock Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_PROFIT_LOSS_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/low-stock-report" />}>
                  {t("sidebar.Reports.Low Stock Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_SUPPLIER_DUE_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/profit-loss-report" />}>
                  {t("sidebar.Reports.Profit And Loss Report")}
                </MenuItem>
              )}
              {hasAccess(
                permission,
                `${REPORTS_CUSTOMER_LEDGER_REPORT}.view`
              ) && (
                <MenuItem
                  component={<Link to="/reports/supplier-due-report" />}
                >
                  {t("sidebar.Reports.Supplier Due Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_CUSTOMER_DUE_REPORT}.view`) && (
                <MenuItem
                  component={<Link to="/reports/customer-ledger-report" />}
                >
                  {t("sidebar.Reports.Customer Ledger Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_PURCHASE_REPORT}.view`) && (
                <MenuItem
                  component={<Link to="/reports/customer-due-report" />}
                >
                  {t("sidebar.Reports.Customer Due Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_EXPENSE_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/purchase-report" />}>
                  {t("sidebar.Reports.Purchase Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_WASTE_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/expense-report" />}>
                  {t("sidebar.Reports.Expense Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_TAX_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/waste-report" />}>
                  {t("sidebar.Reports.Waste Report")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_ATTENDANCE_REPORT}.view`) && (
                <MenuItem component={<Link to="/reports/attendance-report" />}>
                  {t("sidebar.Reports.Attendance Report")}
                </MenuItem>
              )}
              {hasAccess(
                permission,
                `${REPORTS_FOOD_MENU_SALES_BY_CATEGORY}.view`
              ) && (
                <MenuItem
                  component={
                    <Link to="/reports/food-menu-sales-by-category-report" />
                  }
                >
                  {t("sidebar.Reports.Food Menu Sales By Category")}
                </MenuItem>
              )}
              {hasAccess(
                permission,
                `${REPORTS_AVAILABLE_LOYALTY_POINT}.view`
              ) && (
                <MenuItem
                  component={<Link to="/reports/available-loyalty-report" />}
                >
                  {t("sidebar.Reports.Available Loyality Points")}
                </MenuItem>
              )}
              {hasAccess(permission, `${REPORTS_USAGE_LOYALTY_POINT}.view`) && (
                <MenuItem
                  component={<Link to="/reports/Usage-loyality-point-report" />}
                >
                  {t("sidebar.Reports.Usage Loyality point Report")}
                </MenuItem>
              )}
            </SubMenu>
          )}
          {hasAccess(permission, USER_MANAGEMENT_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.User Management.User Management")}
              open={openSubMenu === "User Management"}
              onClick={() => handleSubMenuClick("User Management")}
              icon={<FiUserCheck />}
            >
              {hasAccess(permission, `${USER_MANAGEMENT_USER}.view`) && (
                <MenuItem component={<Link to="/user-management/user" />}>
                  {" "}
                  {t("sidebar.User Management.users")}
                </MenuItem>
              )}
              {hasAccess(permission, `${USER_MANAGEMENT_ROLES}.view`) && (
                <MenuItem component={<Link to="/user-management/permission" />}>
                  {" "}
                  {t("sidebar.User Management.Roles")}
                </MenuItem>
              )}
            </SubMenu>
          )}
          {hasAccess(permission, SETTINGS_SIDEBAR) && (
            <SubMenu
              label={t("sidebar.Settings.Settings")}
              open={openSubMenu === "Settings"}
              onClick={() => handleSubMenuClick("Settings")}
              icon={<IoSettingsOutline />}
            >
              {hasAccess(permission, `${SETTINGS_SYSTEM_SETTINGS}.view`) && (
                <MenuItem component={<Link to="/settings/system-settings" />}>
                  {t("sidebar.Settings.System Settings")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_PRINTER}.view`) && (
                <MenuItem component={<Link to="/settings/printer-settings" />}>
                  {t("sidebar.Settings.Settings")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_COUNTER}.view`) && (
                <MenuItem component={<Link to="/settings/counter-settings" />}>
                  {t("sidebar.Settings.Counter")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_TAX_SETTING}.view`) && (
                <MenuItem component={<Link to="/settings/tax-settings" />}>
                  {t("sidebar.Settings.Tax Settings")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_MULTIPLE_CURRENCY}.view`) && (
                <MenuItem component={<Link to="/settings/currency-settings" />}>
                  {t("sidebar.Settings.Currency Settings")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_SELF_ORDER_SETTING}.view`) && (
                <MenuItem component={<Link to="/settings/qr-settings" />}>
                  {t("sidebar.Settings.Self Order Settings")}
                </MenuItem>
              )}
              {hasAccess(
                permission,
                `${SETTINGS_RESERVATION_SETTING}.view`
              ) && (
                <MenuItem
                  component={<Link to="/settings/reservation-settings" />}
                >
                  {t("sidebar.Settings.Reservation Settings")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_PAYMENT_METHODS}.view`) && (
                <MenuItem component={<Link to="/settings/payment-settings" />}>
                  {t("sidebar.Settings.Payment Settings")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_DELIVERY_PARTNER}.view`) && (
                <MenuItem component={<Link to="/settings/delivery-settings" />}>
                  {t("sidebar.Settings.Delivery Partner")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_AREA_FLOOR}.view`) && (
                <MenuItem component={<Link to="/settings/area-table" />}>
                  {t("sidebar.Settings.Area/Floor")}
                </MenuItem>
              )}
              {hasAccess(permission, `${SETTINGS_TABLE}.view`) && (
                <MenuItem component={<Link to="/settings/table-settings" />}>
                  {t("sidebar.Settings.Table Settings")}
                </MenuItem>
              )}
            </SubMenu>
          )}
        </Menu>
      </Sidebar>
    </>
  );
};

export default SideBar;
