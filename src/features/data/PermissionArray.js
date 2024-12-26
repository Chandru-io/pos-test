export const permission = {
  permissions: {
    Dashboard: {
      access: false,
      children: {
        Total_Revenue: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Net_Profit: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Online_Transaction: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Average_Receipt: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Total_Customers: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Revenue: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Sales_by_Payment_Method: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Stock_Status: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Operational_Comparison: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Sales_Type: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Customer_Receivables: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Suppliers_Payables: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Expenses: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },
    Panels: {
      access: false,
      children: {
        POS_Dashboard: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Waiter: { view: false, create: false, edit: false, delete: false },
        Kitchen: { view: false, create: false, edit: false, delete: false },
      },
    },
    Items: {
      access: false,
      children: {
        Ingredient_Unit: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Ingredient_category: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Ingredients_List: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Modifier: { view: false, create: false, edit: false, delete: false },
        Food_Menu_Category: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Food_Menu: { view: false, create: false, edit: false, delete: false },
        Pre_made_Food: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },
    Stocks: {
      access: false,
      children: {
        All_Stocks: { view: false, create: false, edit: false, delete: false },
        Low_Stocks: { view: false, create: false, edit: false, delete: false },
        Slow_Moving_Stocks: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Stocks_Adjustments: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },
    Purchase: {
      access: false,
      children: {
        Purchase: { view: false, create: false, edit: false, delete: false },
        Supplier: { view: false, create: false, edit: false, delete: false },
        Due_Payments: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },

    Sales: {
      access: false,
      children: {
        Sales: { view: false, create: false, edit: false, delete: false },
        Customer: { view: false, create: false, edit: false, delete: false },
        Promotion: { view: false, create: false, edit: false, delete: false },
      },
    },
    Expenses: {
      access: false,
      children: {
        Expense_Item: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Expenses: { view: false, create: false, edit: false, delete: false },
      },
    },

    Waste_List: {
      access: false,
      children: {
        Waste_List: { view: false, create: false, edit: false, delete: false },
      },
    },
    Attendance: {
      access: false,
      children: {
        Attendance: { view: false, create: false, edit: false, delete: false },
      },
    },
    Production: {
      access: false,
      children: {
        Production: { view: false, create: false, edit: false, delete: false },
      },
    },

    User_Management: {
      access: false,
      children: {
        Users: { view: false, create: false, edit: false, delete: false },
        Roles: { view: false, create: false, edit: false, delete: false },
      },
    },
    Reports: {
      access: false,
      children: {
        Register: { view: false, create: false, edit: false, delete: false },
        Z_Report: { view: false, create: false, edit: false, delete: false },
        Production_Analysis_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Daily_Summary_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Food_Sale_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Daily_Sales_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Detailed_Sales_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Consumption_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Stock_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Low_Stock_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Profit_Loss_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Supplier_Due_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Customer_Ledger_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Customer_Due_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Purchase_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Expense_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Waste_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Tax_Report: { view: false, create: false, edit: false, delete: false },
        Attendance_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Food_menu_sales_by_category: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Available_Loyalty_point: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Usage_Loyalty_Point: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Production_Report: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
      },
    },

    Settings: {
      access: false,
      children: {
        System_Settings: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Printer: { view: false, create: false, edit: false, delete: false },
        Counter: { view: false, create: false, edit: false, delete: false },
        Tax_Setting: { view: false, create: false, edit: false, delete: false },
        Multiple_Currency: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Self_order_Setting: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Reservation_Setting: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Payment_Methods: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Delivery_Partner: {
          view: false,
          create: false,
          edit: false,
          delete: false,
        },
        Area_floor: { view: false, create: false, edit: false, delete: false },
        Table: { view: false, create: false, edit: false, delete: false },
      },
    },
  },
};
