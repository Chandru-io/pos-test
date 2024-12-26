import { createSlice } from "@reduxjs/toolkit";

const permission = {
  role_name: "Admin",
  description: "access admin panel option",
  permissions: {
    Dashboard: {
      access: true,
      children: {
        Total_Revenue: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Net_Profit: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Online_Transaction: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Average_Receipt: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Total_Customers: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Revenue: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Sales_by_Payment_Method: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Stock_Status: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Operational_Comparison: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Sales_Type: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Customer_Receivables: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Suppliers_Payables: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Expenses: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },
    Panels: {
      access: true,
      children: {
        POS_Dashboard: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Waiter: { view: true, create: false, edit: false, delete: false },
        Kitchen: { view: true, create: false, edit: false, delete: false },
      },
    },
    Items: {
      access: true,
      children: {
        Ingredient_Unit: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Ingredient_category: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Ingredients_List: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Modifier: { view: true, create: false, edit: false, delete: false },
        Food_Menu_Category: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Food_Menu: { view: true, create: false, edit: false, delete: false },
        Pre_made_Food: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },
    Stocks: {
      access: true,
      children: {
        All_Stocks: { view: true, create: false, edit: false, delete: false },
        Low_Stocks: { view: true, create: false, edit: false, delete: false },
        Slow_Moving_Stocks: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Stocks_Adjustments: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },
    Purchase: {
      access: true,
      children: {
        Purchase: { view: true, create: false, edit: false, delete: false },
        Supplier: { view: true, create: false, edit: false, delete: false },
        Due_Payments: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },
    Production: {
      access: true,
      children: {
        Production: { view: true, create: false, edit: false, delete: false },
      },
    },
    Sales: {
      access: true,
      children: {
        Sales: { view: true, create: false, edit: false, delete: false },
        Customer: { view: true, create: false, edit: false, delete: false },
        Promotion: { view: true, create: false, edit: false, delete: false },
      },
    },
    Expenses: {
      access: true,
      children: {
        Expense_Item: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Expenses: { view: true, create: false, edit: false, delete: false },
      },
    },

    Waste_List: {
      access: true,
      children: {
        Waste_List: { view: true, create: false, edit: false, delete: false },
      },
    },
    Attendance: {
      access: true,
      children: {
        Attendance: { view: true, create: false, edit: false, delete: false },
      },
    },
    Reports: {
      access: true,
      children: {
        Register: { view: true, create: false, edit: false, delete: false },
        Z_Report: { view: true, create: false, edit: false, delete: false },
        Production_Analysis_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Daily_Summary_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Food_Sale_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Daily_Sales_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Detailed_Sales_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Consumption_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Stock_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Low_Stock_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Profit_Loss_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Supplier_Due_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Customer_Ledger_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Customer_Due_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Purchase_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Expense_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Waste_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Tax_Report: { view: true, create: false, edit: false, delete: false },
        Attendance_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Food_menu_sales_by_category: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Available_Loyalty_point: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Usage_Loyalty_Point: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Production_Report: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },
    User_Management: {
      access: true,
      children: {
        Users: { view: true, create: false, edit: false, delete: false },
        Roles: { view: true, create: false, edit: false, delete: false },
      },
    },
    Settings: {
      access: true,
      children: {
        System_Settings: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Printer: { view: true, create: false, edit: false, delete: false },
        Counter: { view: true, create: false, edit: false, delete: false },
        Tax_Setting: { view: true, create: false, edit: false, delete: false },
        Multiple_Currency: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Self_order_Setting: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Reservation_Setting: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Payment_Methods: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Delivery_Partner: {
          view: true,
          create: false,
          edit: false,
          delete: false,
        },
        Area_floor: { view: true, create: false, edit: false, delete: false },
        Table: { view: true, create: false, edit: false, delete: false },
      },
    },
  },
};

const initialState = permission;

const authSlice = createSlice({
  name: "permission",
  initialState,
  reducers: {
    setPermissions: (state, action) => {
      state.permission = action.payload;
    },
  },
});

export const { setPermissions } = authSlice.actions;

export default authSlice.reducer;
